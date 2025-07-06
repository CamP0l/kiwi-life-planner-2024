
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  DollarSign, 
  Target, 
  TrendingUp, 
  TrendingDown,
  Plus,
  Home,
  ShoppingCart,
  Car,
  Smartphone,
  Coffee
} from "lucide-react";

export function FinancialGoals() {
  const weeklyIncome = 580;
  const weeklyBudget = 600;
  const rent = 400;
  
  const savings = {
    emergency: { current: 180, goal: 500 },
    camera: { current: 75, goal: 300 },
    investments: { current: 45, weekly: 7.50 }
  };

  const expenses = [
    { category: "Rent", amount: 400, icon: Home, color: "bg-red-100 text-red-800", fixed: true },
    { category: "Groceries", amount: 80, icon: ShoppingCart, color: "bg-blue-100 text-blue-800" },
    { category: "Transport", amount: 25, icon: Car, color: "bg-green-100 text-green-800" },
    { category: "Phone", amount: 30, icon: Smartphone, color: "bg-purple-100 text-purple-800", fixed: true },
    { category: "Entertainment", amount: 20, icon: Coffee, color: "bg-yellow-100 text-yellow-800" }
  ];

  const investments = [
    { platform: "Sharesies", amount: 25.00, type: "ETF Portfolio" },
    { platform: "Kernel", amount: 20.00, type: "Index Fund" }
  ];

  const totalExpenses = expenses.reduce((sum, expense) => sum + expense.amount, 0);
  const remainingBudget = weeklyIncome - totalExpenses;

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Financial Goals & Budget</h2>
          <p className="text-gray-600">Track every dollar towards your goals</p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Add Transaction
        </Button>
      </div>

      {/* Budget Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Weekly Income</CardTitle>
            <TrendingUp className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-green-600">${weeklyIncome}</div>
            <p className="text-xs text-muted-foreground">
              Current week earnings
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Expenses</CardTitle>
            <TrendingDown className="h-4 w-4 text-red-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-red-600">${totalExpenses}</div>
            <p className="text-xs text-muted-foreground">
              Weekly spending
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Remaining</CardTitle>
            <DollarSign className="h-4 w-4 text-blue-600" />
          </CardHeader>
          <CardContent>
            <div className={`text-2xl font-bold ${remainingBudget >= 0 ? 'text-green-600' : 'text-red-600'}`}>
              ${remainingBudget}
            </div>
            <p className="text-xs text-muted-foreground">
              Available this week
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Savings Goals */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5 text-red-600" />
              Emergency Fund
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span>${savings.emergency.current}</span>
                <span>${savings.emergency.goal}</span>
              </div>
              <Progress value={(savings.emergency.current / savings.emergency.goal) * 100} />
              <p className="text-sm text-gray-600">
                {Math.round((savings.emergency.current / savings.emergency.goal) * 100)}% of goal reached
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5 text-blue-600" />
              Camera Fund
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span>${savings.camera.current}</span>
                <span>${savings.camera.goal}</span>
              </div>
              <Progress value={(savings.camera.current / savings.camera.goal) * 100} />
              <p className="text-sm text-gray-600">
                {Math.round((savings.camera.current / savings.camera.goal) * 100)}% of goal reached
              </p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-green-600" />
              Investments
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="text-2xl font-bold">${savings.investments.current}</div>
              <p className="text-sm text-gray-600">
                +${savings.investments.weekly}/week average
              </p>
              <div className="space-y-2">
                {investments.map((investment, index) => (
                  <div key={index} className="flex justify-between text-sm">
                    <span>{investment.platform}</span>
                    <span className="font-medium">${investment.amount}</span>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Weekly Expenses Breakdown */}
      <Card>
        <CardHeader>
          <CardTitle>Weekly Expenses</CardTitle>
          <CardDescription>Track your spending categories</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {expenses.map((expense, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-gray-100">
                    <expense.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium">{expense.category}</p>
                    {expense.fixed && (
                      <Badge variant="secondary" className="text-xs">Fixed</Badge>
                    )}
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-bold">${expense.amount}</p>
                  <p className="text-sm text-gray-600">
                    {Math.round((expense.amount / weeklyIncome) * 100)}% of income
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <div className="flex justify-between items-center">
              <span className="font-medium">Total Weekly Expenses</span>
              <span className="text-xl font-bold">${totalExpenses}</span>
            </div>
            <Progress value={(totalExpenses / weeklyBudget) * 100} className="mt-2" />
            <p className="text-sm text-gray-600 mt-2">
              {Math.round((totalExpenses / weeklyBudget) * 100)}% of ${weeklyBudget} budget used
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
