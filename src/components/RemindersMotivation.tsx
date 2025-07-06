
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { 
  Bell, 
  Heart, 
  Target, 
  Calendar,
  CheckCircle2,
  Circle,
  Plus,
  Quote,
  Star,
  Zap
} from "lucide-react";

export function RemindersMotivation() {
  const [weeklyChecklist, setWeeklyChecklist] = useState([
    { task: "Update financial tracker", completed: true },
    { task: "Film YouTube content", completed: true },
    { task: "Apply for 3 jobs", completed: false },
    { task: "Review investment portfolio", completed: false },
    { task: "Plan next week's schedule", completed: false }
  ]);

  const [habits, setHabits] = useState([
    { name: "Morning planning session", streak: 12, target: 7, completed: [true, true, true, true, true, false, false] },
    { name: "Track daily expenses", streak: 8, target: 7, completed: [true, true, false, true, true, true, false] },
    { name: "YouTube content creation", streak: 5, target: 3, completed: [true, false, true, false, true, false, false] },
    { name: "Job applications review", streak: 3, target: 5, completed: [true, true, false, false, true, false, false] }
  ]);

  const motivationalQuotes = [
    "Every dollar saved is a step towards freedom",
    "Your 10 cent challenge is inspiring thousands",
    "Small consistent actions create big results",
    "Today's sacrifice is tomorrow's success"
  ];

  const [currentQuote] = useState(motivationalQuotes[0]);

  const toggleChecklistItem = (index: number) => {
    const newChecklist = [...weeklyChecklist];
    newChecklist[index].completed = !newChecklist[index].completed;
    setWeeklyChecklist(newChecklist);
  };

  const getDayName = (index: number) => {
    const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    return days[index];
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Reminders & Motivation</h2>
          <p className="text-gray-600">Stay accountable and inspired on your journey</p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Add Reminder
        </Button>
      </div>

      {/* Daily Motivation */}
      <Card className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
        <CardContent className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <Quote className="h-6 w-6" />
            <h3 className="text-xl font-semibold">Daily Motivation</h3>
          </div>
          <blockquote className="text-lg italic mb-4">
            "{currentQuote}"
          </blockquote>
          <div className="flex items-center gap-2 text-blue-100">
            <Star className="h-4 w-4" />
            <span className="text-sm">Keep pushing towards your goals!</span>
          </div>
        </CardContent>
      </Card>

      {/* Weekly Checklist */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5" />
            Weekly Checklist
          </CardTitle>
          <CardDescription>
            Essential tasks to complete this week
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {weeklyChecklist.map((item, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 cursor-pointer transition-colors"
                onClick={() => toggleChecklistItem(index)}
              >
                {item.completed ? (
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                ) : (
                  <Circle className="h-5 w-5 text-gray-400" />
                )}
                <span className={`flex-1 ${item.completed ? 'line-through text-gray-500' : ''}`}>
                  {item.task}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-4">
            <Progress value={(weeklyChecklist.filter(item => item.completed).length / weeklyChecklist.length) * 100} />
            <p className="text-sm text-gray-600 mt-2">
              {weeklyChecklist.filter(item => item.completed).length} of {weeklyChecklist.length} tasks completed
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Habit Tracking */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5" />
            Habit Tracking
          </CardTitle>
          <CardDescription>
            Build consistency in your daily routines
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {habits.map((habit, index) => (
              <div key={index} className="space-y-3">
                <div className="flex justify-between items-center">
                  <div>
                    <h4 className="font-medium">{habit.name}</h4>
                    <p className="text-sm text-gray-600">
                      {habit.streak} day streak • Target: {habit.target}/week
                    </p>
                  </div>
                  <div className="flex items-center gap-1">
                    <Zap className="h-4 w-4 text-yellow-500" />
                    <span className="font-bold">{habit.streak}</span>
                  </div>
                </div>
                
                <div className="flex gap-1">
                  {habit.completed.map((completed, dayIndex) => (
                    <div
                      key={dayIndex}
                      className={`w-8 h-8 rounded flex items-center justify-center text-xs font-medium ${
                        completed 
                          ? 'bg-green-100 text-green-800' 
                          : 'bg-gray-100 text-gray-400'
                      }`}
                    >
                      {getDayName(dayIndex)}
                    </div>
                  ))}
                </div>
                
                <Progress 
                  value={(habit.completed.filter(Boolean).length / habit.target) * 100} 
                  className="h-2"
                />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Monthly Reflection */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Heart className="h-5 w-5 text-red-500" />
            Monthly Reflection
          </CardTitle>
          <CardDescription>
            Track your growth and celebrate wins
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <h4 className="font-medium mb-2">This Month's Wins</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                  Launched 10 Cent NZ Challenge series
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                  Secured two regular side gigs
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                  Built emergency fund to $180
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-green-600" />
                  Gained 120 new YouTube subscribers
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium mb-2">Areas to Improve</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2">
                  <Target className="h-4 w-4 text-blue-600" />
                  Increase job application follow-ups
                </li>
                <li className="flex items-center gap-2">
                  <Target className="h-4 w-4 text-blue-600" />
                  More consistent daily expense tracking
                </li>
                <li className="flex items-center gap-2">
                  <Target className="h-4 w-4 text-blue-600" />
                  Better work-life balance planning
                </li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Upcoming Reminders */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Bell className="h-5 w-5" />
            Upcoming Reminders
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
              <div>
                <p className="font-medium">Weekly budget review</p>
                <p className="text-sm text-gray-600">Every Sunday at 6:00 PM</p>
              </div>
              <Calendar className="h-5 w-5 text-yellow-600" />
            </div>
            
            <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
              <div>
                <p className="font-medium">YouTube content planning</p>
                <p className="text-sm text-gray-600">Every Monday at 10:00 AM</p>
              </div>
              <Calendar className="h-5 w-5 text-blue-600" />
            </div>
            
            <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
              <div>
                <p className="font-medium">Investment contribution</p>
                <p className="text-sm text-gray-600">Every Friday at 4:00 PM</p>
              </div>
              <Calendar className="h-5 w-5 text-green-600" />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
