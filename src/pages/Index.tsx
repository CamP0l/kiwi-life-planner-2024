
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Home, 
  Calendar, 
  Video, 
  DollarSign, 
  Briefcase, 
  Bell,
  Plus,
  CheckCircle2,
  Target,
  TrendingUp
} from "lucide-react";
import { Dashboard } from "@/components/Dashboard";
import { WeeklyPlanner } from "@/components/WeeklyPlanner";
import { YouTubeTracker } from "@/components/YouTubeTracker";
import { FinancialGoals } from "@/components/FinancialGoals";
import { SideHustleBoard } from "@/components/SideHustleBoard";
import { RemindersMotivation } from "@/components/RemindersMotivation";

const Index = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  const tabs = [
    { id: "dashboard", label: "Dashboard", icon: Home, component: Dashboard },
    { id: "planner", label: "Weekly Planner", icon: Calendar, component: WeeklyPlanner },
    { id: "youtube", label: "YouTube Tracker", icon: Video, component: YouTubeTracker },
    { id: "financial", label: "Financial Goals", icon: DollarSign, component: FinancialGoals },
    { id: "sidehustle", label: "Side Hustles", icon: Briefcase, component: SideHustleBoard },
    { id: "reminders", label: "Reminders", icon: Bell, component: RemindersMotivation },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-6">
        <header className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">Kiwi Life Planner</h1>
          <p className="text-gray-600">Your complete system for life, finances, and creative goals</p>
        </header>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6 mb-6">
            {tabs.map((tab) => (
              <TabsTrigger key={tab.id} value={tab.id} className="flex items-center gap-2">
                <tab.icon className="h-4 w-4" />
                <span className="hidden sm:inline">{tab.label}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {tabs.map((tab) => (
            <TabsContent key={tab.id} value={tab.id}>
              <tab.component />
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default Index;
