
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
    { id: "dashboard", label: "Summary", icon: Home, component: Dashboard },
    { id: "planner", label: "Planner", icon: Calendar, component: WeeklyPlanner },
    { id: "youtube", label: "Content", icon: Video, component: YouTubeTracker },
    { id: "financial", label: "Finance", icon: DollarSign, component: FinancialGoals },
    { id: "sidehustle", label: "Work", icon: Briefcase, component: SideHustleBoard },
    { id: "reminders", label: "Goals", icon: Bell, component: RemindersMotivation },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 pb-20">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          {tabs.map((tab) => (
            <TabsContent key={tab.id} value={tab.id} className="mt-6">
              <tab.component />
            </TabsContent>
          ))}
        </Tabs>
      </div>

      {/* Bottom Navigation - iOS Style */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-md border-t border-gray-200">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-6 py-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex flex-col items-center justify-center py-2 px-1 transition-colors ${
                  activeTab === tab.id 
                    ? 'text-purple-600' 
                    : 'text-gray-500'
                }`}
              >
                <tab.icon className="h-5 w-5 mb-1" />
                <span className="text-xs font-medium leading-none">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
