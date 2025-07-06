
import { useState, useEffect } from 'react';
import { Cloud, CloudRain, CloudSnow, Sun, Moon } from 'lucide-react';

interface WeatherData {
  temperature: number;
  condition: string;
  isDay: boolean;
}

export function WeatherWidget() {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [location, setLocation] = useState<string>('');

  const getWeatherEmoji = (condition: string, isDay: boolean) => {
    const conditionLower = condition.toLowerCase();
    
    if (conditionLower.includes('rain') || conditionLower.includes('drizzle')) {
      return <CloudRain className="h-5 w-5 text-blue-500" />;
    }
    if (conditionLower.includes('snow') || conditionLower.includes('blizzard')) {
      return <CloudSnow className="h-5 w-5 text-blue-300" />;
    }
    if (conditionLower.includes('cloud') || conditionLower.includes('overcast')) {
      return <Cloud className="h-5 w-5 text-gray-500" />;
    }
    if (conditionLower.includes('clear') || conditionLower.includes('sunny')) {
      return isDay ? 
        <Sun className="h-5 w-5 text-yellow-500" /> : 
        <Moon className="h-5 w-5 text-indigo-300" />;
    }
    
    // Default
    return isDay ? 
      <Sun className="h-5 w-5 text-yellow-500" /> : 
      <Moon className="h-5 w-5 text-indigo-300" />;
  };

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        // Get user's location
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(async (position) => {
            const { latitude, longitude } = position.coords;
            
            // Using OpenWeatherMap API (free tier)
            // Note: In production, this API key should be stored securely in Supabase
            const API_KEY = 'demo'; // User will need to replace this
            const response = await fetch(
              `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
            );
            
            if (response.ok) {
              const data = await response.json();
              const currentHour = new Date().getHours();
              const isDay = currentHour >= 6 && currentHour < 20;
              
              setWeather({
                temperature: Math.round(data.main.temp),
                condition: data.weather[0].main,
                isDay
              });
              setLocation(data.name);
            } else {
              // Fallback to mock data for demo
              const currentHour = new Date().getHours();
              const isDay = currentHour >= 6 && currentHour < 20;
              setWeather({
                temperature: 22,
                condition: 'Clear',
                isDay
              });
              setLocation('Auckland');
            }
          }, () => {
            // Location access denied, use mock data
            const currentHour = new Date().getHours();
            const isDay = currentHour >= 6 && currentHour < 20;
            setWeather({
              temperature: 22,
              condition: 'Clear',
              isDay
            });
            setLocation('Auckland');
          });
        }
      } catch (error) {
        console.error('Weather fetch error:', error);
        // Fallback to mock data
        const currentHour = new Date().getHours();
        const isDay = currentHour >= 6 && currentHour < 20;
        setWeather({
          temperature: 22,
          condition: 'Clear',
          isDay
        });
        setLocation('Auckland');
      }
    };

    fetchWeather();
    // Refresh weather every 30 minutes
    const interval = setInterval(fetchWeather, 30 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  if (!weather) {
    return (
      <div className="flex items-center gap-2 text-gray-400">
        <div className="w-5 h-5 bg-gray-200 rounded animate-pulse"></div>
        <span className="text-sm">--°</span>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-xl px-3 py-2 shadow-sm">
      {getWeatherEmoji(weather.condition, weather.isDay)}
      <div className="text-right">
        <div className="text-lg font-semibold text-gray-900">{weather.temperature}°</div>
        {location && <div className="text-xs text-gray-600 leading-none">{location}</div>}
      </div>
    </div>
  );
}
