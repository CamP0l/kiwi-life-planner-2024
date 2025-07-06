
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Plus, Edit } from "lucide-react";

export function WeeklyPlanner() {
  const [selectedDay, setSelectedDay] = useState<string | null>(null);

  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  
  const schedule = {
    Monday: [
      { time: '9:00 AM', activity: 'Job Search', type: 'work', color: 'bg-blue-100 text-blue-800' },
      { time: '2:00 PM', activity: 'YouTube Planning', type: 'creative', color: 'bg-red-100 text-red-800' },
      { time: '6:00 PM', activity: 'Football Training', type: 'sport', color: 'bg-green-100 text-green-800' }
    ],
    Tuesday: [
      { time: '10:00 AM', activity: 'Casual Work', type: 'work', color: 'bg-blue-100 text-blue-800' },
      { time: '4:00 PM', activity: 'Video Filming', type: 'creative', color: 'bg-red-100 text-red-800' }
    ],
    Wednesday: [
      { time: '9:00 AM', activity: 'Budget Review', type: 'finance', color: 'bg-yellow-100 text-yellow-800' },
      { time: '6:00 PM', activity: 'Football Match', type: 'sport', color: 'bg-green-100 text-green-800' }
    ],
    Thursday: [
      { time: '10:00 AM', activity: 'Video Editing', type: 'creative', color: 'bg-red-100 text-red-800' },
      { time: '3:00 PM', activity: 'Side Hustle Work', type: 'work', color: 'bg-blue-100 text-blue-800' }
    ],
    Friday: [
      { time: '9:00 AM', activity: 'Content Upload', type: 'creative', color: 'bg-red-100 text-red-800' },
      { time: '7:00 PM', activity: 'Rest & Planning', type: 'rest', color: 'bg-purple-100 text-purple-800' }
    ],
    Saturday: [
      { time: '11:00 AM', activity: 'Football Training', type: 'sport', color: 'bg-green-100 text-green-800' },
      { time: '2:00 PM', activity: 'Content Creation', type: 'creative', color: 'bg-red-100 text-red-800' }
    ],
    Sunday: [
      { time: '10:00 AM', activity: 'Weekly Review', type: 'planning', color: 'bg-gray-100 text-gray-800' },
      { time: '2:00 PM', activity: 'Rest Day', type: 'rest', color: 'bg-purple-100 text-purple-800' }
    ]
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Weekly Planner</h2>
          <p className="text-gray-600">Organize your work, football, filming, and rest time</p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          Add Activity
        </Button>
      </div>

      {/* Activity Legend */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Activity Types</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            <Badge className="bg-blue-100 text-blue-800">Work</Badge>
            <Badge className="bg-red-100 text-red-800">Creative/YouTube</Badge>
            <Badge className="bg-green-100 text-green-800">Football</Badge>
            <Badge className="bg-yellow-100 text-yellow-800">Finance</Badge>
            <Badge className="bg-purple-100 text-purple-800">Rest</Badge>
            <Badge className="bg-gray-100 text-gray-800">Planning</Badge>
          </div>
        </CardContent>
      </Card>

      {/* Weekly Schedule */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {days.map((day) => (
          <Card key={day} className="cursor-pointer hover:shadow-md transition-shadow">
            <CardHeader className="pb-3">
              <CardTitle className="text-lg flex items-center justify-between">
                {day}
                <Edit className="h-4 w-4 text-gray-400" />
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {schedule[day as keyof typeof schedule]?.map((item, index) => (
                <div key={index} className="p-3 rounded-lg bg-gray-50">
                  <div className="flex items-center gap-2 mb-1">
                    <Clock className="h-4 w-4 text-gray-500" />
                    <span className="text-sm font-medium">{item.time}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm">{item.activity}</span>
                    <Badge className={item.color}>{item.type}</Badge>
                  </div>
                </div>
              )) || (
                <div className="text-center text-gray-500 py-4">
                  <Plus className="h-8 w-8 mx-auto mb-2 text-gray-300" />
                  <p className="text-sm">No activities planned</p>
                </div>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card>
          <CardContent className="flex items-center justify-center p-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">12</div>
              <p className="text-sm text-gray-600">Work Hours</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex items-center justify-center p-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-red-600">8</div>
              <p className="text-sm text-gray-600">Creative Hours</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex items-center justify-center p-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">5</div>
              <p className="text-sm text-gray-600">Football Hours</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="flex items-center justify-center p-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">6</div>
              <p className="text-sm text-gray-600">Rest Hours</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
