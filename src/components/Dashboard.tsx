
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Circle, Target, TrendingUp, DollarSign, Users, Heart, Calendar } from "lucide-react";

export function Dashboard() {
  const [checkedItems, setCheckedItems] = useState<boolean[]>([false, false, false, false, false]);

  const priorities = [
    "Film this week's 10 Cent NZ Challenge episode",
    "Update YouTube content calendar",
    "Track weekly expenses and income",
    "Apply for 2-3 casual job positions",
    "Review and adjust financial goals"
  ];

  const togglePriority = (index: number) => {
    const newChecked = [...checkedItems];
    newChecked[index] = !newChecked[index];
    setCheckedItems(newChecked);
  };

  // Dynamic greeting based on time of day
  const getGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return "Good morning";
    if (hour < 17) return "Good afternoon";
    return "Good evening";
  };

  // Sample data
  const emergencyFund = 180;
  const emergencyGoal = 500;
  const cameraFund = 75;
  const cameraGoal = 300;
  const subscribers = 450;
  const subscriberGoal = 1000;
  const weeklyIncome = 580;
  const weeklyBudget = 600;

  return (
    <div className="space-y-6">
      {/* Health-style greeting */}
      <div className="text-left mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">{getGreeting()}</h2>
        <p className="text-lg text-gray-600">Here's your daily summary</p>
      </div>

      {/* Main Progress Cards - Apple Health Style */}
      <div className="space-y-4">
        {/* Weekly Budget Card */}
        <Card className="bg-gradient-to-br from-purple-50 to-violet-50 border-purple-100 shadow-sm">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center">
                  <DollarSign className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Weekly Budget</h3>
                  <p className="text-sm text-gray-600">${weeklyIncome} of ${weeklyBudget}</p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-purple-600">${weeklyBudget - weeklyIncome}</div>
                <p className="text-sm text-gray-600">remaining</p>
              </div>
            </div>
            <Progress value={(weeklyIncome / weeklyBudget) * 100} className="h-2" />
          </CardContent>
        </Card>

        {/* Emergency Fund Card */}
        <Card className="bg-gradient-to-br from-indigo-50 to-blue-50 border-indigo-100 shadow-sm">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-indigo-500 rounded-full flex items-center justify-center">
                  <Target className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Emergency Fund</h3>
                  <p className="text-sm text-gray-600">${emergencyFund} of ${emergencyGoal}</p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-indigo-600">{Math.round((emergencyFund / emergencyGoal) * 100)}%</div>
                <p className="text-sm text-gray-600">complete</p>
              </div>
            </div>
            <Progress value={(emergencyFund / emergencyGoal) * 100} className="h-2" />
          </CardContent>
        </Card>

        {/* YouTube Growth Card */}
        <Card className="bg-gradient-to-br from-pink-50 to-rose-50 border-pink-100 shadow-sm">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-pink-500 rounded-full flex items-center justify-center">
                  <Users className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">YouTube Growth</h3>
                  <p className="text-sm text-gray-600">{subscribers} of {subscriberGoal} subscribers</p>
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-pink-600">{subscribers}</div>
                <p className="text-sm text-gray-600">subscribers</p>
              </div>
            </div>
            <Progress value={(subscribers / subscriberGoal) * 100} className="h-2" />
          </CardContent>
        </Card>
      </div>

      {/* Today's Priorities */}
      <Card className="shadow-sm">
        <CardHeader className="pb-4">
          <CardTitle className="text-lg font-semibold flex items-center gap-2">
            <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center">
              <CheckCircle2 className="h-4 w-4 text-white" />
            </div>
            Today's Priorities
          </CardTitle>
          <CardDescription className="text-gray-600">
            {checkedItems.filter(Boolean).length} of {priorities.length} completed
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          {priorities.map((priority, index) => (
            <div
              key={index}
              className="flex items-center space-x-3 p-3 rounded-xl bg-gray-50 hover:bg-gray-100 cursor-pointer transition-colors"
              onClick={() => togglePriority(index)}
            >
              <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                checkedItems[index] ? 'bg-orange-500' : 'bg-gray-300'
              }`}>
                {checkedItems[index] ? (
                  <CheckCircle2 className="h-4 w-4 text-white" />
                ) : (
                  <Circle className="h-4 w-4 text-white" />
                )}
              </div>
              <span className={`flex-1 ${checkedItems[index] ? 'line-through text-gray-500' : 'text-gray-900'}`}>
                {priority}
              </span>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Quick Stats Grid */}
      <div className="grid grid-cols-2 gap-4">
        <Card className="shadow-sm">
          <CardContent className="p-4 text-center">
            <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center mx-auto mb-3">
              <Target className="h-6 w-6 text-teal-600" />
            </div>
            <div className="text-xl font-bold text-gray-900">${cameraFund}</div>
            <p className="text-sm text-gray-600">Camera Fund</p>
            <Progress value={(cameraFund / cameraGoal) * 100} className="h-1 mt-2" />
          </CardContent>
        </Card>

        <Card className="shadow-sm">
          <CardContent className="p-4 text-center">
            <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center mx-auto mb-3">
              <Heart className="h-6 w-6 text-emerald-600" />
            </div>
            <div className="text-xl font-bold text-gray-900">$125</div>
            <p className="text-sm text-gray-600">Donations</p>
            <Progress value={25} className="h-1 mt-2" />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
