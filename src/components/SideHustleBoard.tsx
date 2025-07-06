
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Briefcase, 
  Clock, 
  DollarSign, 
  Plus,
  Calendar,
  MapPin,
  TrendingUp,
  CheckCircle2
} from "lucide-react";

export function SideHustleBoard() {
  const [applications, setApplications] = useState([
    { company: "Local Café", position: "Barista", status: "applied", dateApplied: "2024-01-15", wage: 22.50 },
    { company: "Retail Store", position: "Sales Assistant", status: "interview", dateApplied: "2024-01-12", wage: 23.00 },
    { company: "Event Staffing", position: "Event Helper", status: "rejected", dateApplied: "2024-01-10", wage: 25.00 },
    { company: "Delivery Service", position: "Driver", status: "offered", dateApplied: "2024-01-08", wage: 24.00 }
  ]);

  const currentGigs = [
    { 
      company: "Weekend Markets", 
      role: "Setup Assistant", 
      hoursWorked: 8, 
      hourlyRate: 22.50, 
      totalEarned: 180,
      nextShift: "Saturday 7:00 AM"
    },
    { 
      company: "Event Catering", 
      role: "Server", 
      hoursWorked: 12, 
      hourlyRate: 24.00, 
      totalEarned: 288,
      nextShift: "Friday 5:00 PM"
    }
  ];

  const weeklyStats = {
    hoursWorked: 20,
    totalEarned: 468,
    averageHourly: 23.40,
    activeGigs: 2
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'applied': return 'bg-blue-100 text-blue-800';
      case 'interview': return 'bg-yellow-100 text-yellow-800';
      case 'offered': return 'bg-green-100 text-green-800';
      case 'rejected': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">Side Hustle Board</h2>
          <p className="text-gray-600">Track casual gigs, applications, and earnings</p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          New Application
        </Button>
      </div>

      {/* Weekly Stats */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Hours Worked</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{weeklyStats.hoursWorked}h</div>
            <p className="text-xs text-muted-foreground">
              This week
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Earned</CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${weeklyStats.totalEarned}</div>
            <p className="text-xs text-muted-foreground">
              This week
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Average Rate</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${weeklyStats.averageHourly}</div>
            <p className="text-xs text-muted-foreground">
              Per hour
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Active Gigs</CardTitle>
            <Briefcase className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{weeklyStats.activeGigs}</div>
            <p className="text-xs text-muted-foreground">
              Current positions
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Current Gigs */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5 text-green-600" />
            Active Gigs
          </CardTitle>
          <CardDescription>Your current side hustle positions</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {currentGigs.map((gig, index) => (
              <div key={index} className="p-4 border rounded-lg bg-green-50">
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h4 className="font-semibold">{gig.company}</h4>
                    <p className="text-sm text-gray-600">{gig.role}</p>
                  </div>
                  <Badge className="bg-green-100 text-green-800">Active</Badge>
                </div>
                
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div>
                    <p className="text-gray-600">Hours Worked</p>
                    <p className="font-medium">{gig.hoursWorked}h</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Hourly Rate</p>
                    <p className="font-medium">${gig.hourlyRate}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Total Earned</p>
                    <p className="font-medium text-green-600">${gig.totalEarned}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">Next Shift</p>
                    <p className="font-medium">{gig.nextShift}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Job Applications */}
      <Card>
        <CardHeader>
          <CardTitle>Job Applications</CardTitle>
          <CardDescription>Track your application status and follow-ups</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {applications.map((app, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h4 className="font-medium">{app.company}</h4>
                    <Badge className={getStatusColor(app.status)}>
                      {app.status}
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-600">{app.position}</p>
                  <div className="flex items-center gap-4 mt-2 text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      Applied: {new Date(app.dateApplied).toLocaleDateString()}
                    </span>
                    <span className="flex items-center gap-1">
                      <DollarSign className="h-3 w-3" />
                      ${app.wage}/hour
                    </span>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  Follow Up
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Application Progress */}
      <Card>
        <CardHeader>
          <CardTitle>Application Goals</CardTitle>
          <CardDescription>Weekly application targets</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <div className="flex justify-between mb-2">
                <span className="font-medium">Applications This Week</span>
                <span>3 of 5</span>
              </div>
              <Progress value={60} />
            </div>
            
            <div>
              <div className="flex justify-between mb-2">
                <span className="font-medium">Follow-ups Completed</span>
                <span>2 of 3</span>
              </div>
              <Progress value={67} />
            </div>
            
            <div>
              <div className="flex justify-between mb-2">
                <span className="font-medium">Interview Prep</span>
                <span>1 of 1</span>
              </div>
              <Progress value={100} />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
