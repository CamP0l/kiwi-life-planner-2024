
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Circle, Target, TrendingUp, DollarSign, Users } from "lucide-react";

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

  // Sample data - in real app this would come from state management
  const emergencyFund = 180; // current amount
  const emergencyGoal = 500;
  const cameraFund = 75;
  const cameraGoal = 300;
  const subscribers = 450;
  const subscriberGoal = 1000;
  const weeklyIncome = 580;
  const weeklyBudget = 600;

  return (
    <div className="space-y-6">
      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Weekly Budget</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${weeklyIncome}</div>
            <p className="text-xs text-muted-foreground">
              of ${weeklyBudget} weekly limit
            </p>
            <Progress value={(weeklyIncome / weeklyBudget) * 100} className="mt-2" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Emergency Fund</CardTitle>
            <Target className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${emergencyFund}</div>
            <p className="text-xs text-muted-foreground">
              of ${emergencyGoal} goal
            </p>
            <Progress value={(emergencyFund / emergencyGoal) * 100} className="mt-2" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Camera Fund</CardTitle>
            <Target className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${cameraFund}</div>
            <p className="text-xs text-muted-foreground">
              of ${cameraGoal} goal
            </p>
            <Progress value={(cameraFund / cameraGoal) * 100} className="mt-2" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">YouTube Subs</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{subscribers}</div>
            <p className="text-xs text-muted-foreground">
              of {subscriberGoal} goal
            </p>
            <Progress value={(subscribers / subscriberGoal) * 100} className="mt-2" />
          </CardContent>
        </Card>
      </div>

      {/* Weekly Priorities */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5" />
            Weekly Priorities
          </CardTitle>
          <CardDescription>
            Stay focused on what matters most this week
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {priorities.map((priority, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 cursor-pointer transition-colors"
                onClick={() => togglePriority(index)}
              >
                {checkedItems[index] ? (
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                ) : (
                  <Circle className="h-5 w-5 text-gray-400" />
                )}
                <span className={`flex-1 ${checkedItems[index] ? 'line-through text-gray-500' : ''}`}>
                  {priority}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-4 text-sm text-gray-600">
            {checkedItems.filter(Boolean).length} of {priorities.length} completed
          </div>
        </CardContent>
      </Card>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="cursor-pointer hover:shadow-md transition-shadow">
          <CardContent className="flex items-center justify-center p-6">
            <div className="text-center">
              <TrendingUp className="h-8 w-8 mx-auto mb-2 text-blue-600" />
              <p className="font-medium">Track Expense</p>
            </div>
          </CardContent>
        </Card>

        <Card className="cursor-pointer hover:shadow-md transition-shadow">
          <CardContent className="flex items-center justify-center p-6">
            <div className="text-center">
              <Target className="h-8 w-8 mx-auto mb-2 text-green-600" />
              <p className="font-medium">Log Income</p>
            </div>
          </CardContent>
        </Card>

        <Card className="cursor-pointer hover:shadow-md transition-shadow">
          <CardContent className="flex items-center justify-center p-6">
            <div className="text-center">
              <Users className="h-8 w-8 mx-auto mb-2 text-red-600" />
              <p className="font-medium">YouTube Update</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
