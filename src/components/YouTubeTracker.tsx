
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Video, 
  Users, 
  Heart, 
  DollarSign, 
  Calendar, 
  CheckCircle2, 
  Circle,
  Plus,
  TrendingUp,
  MapPin
} from "lucide-react";

export function YouTubeTracker() {
  const [completedSteps, setCompletedSteps] = useState<boolean[]>([false, false, false, false, false]);

  const productionSteps = [
    "Plan video concept and route",
    "Film the journey segment",
    "Edit video with story narration",
    "Create thumbnail and title",
    "Upload and schedule release"
  ];

  const toggleStep = (index: number) => {
    const newSteps = [...completedSteps];
    newSteps[index] = !newSteps[index];
    setCompletedSteps(newSteps);
  };

  // Sample data
  const currentSubscribers = 450;
  const subscriberGoal = 1000;
  const currentDonations = 125.50;
  const donationGoal = 500;
  const videosPublished = 8;
  const plannedVideos = 15;

  const recentVideos = [
    { title: "Day 1: Starting the 10 Cent Challenge in Auckland", views: 234, donations: 25.50, status: "published" },
    { title: "Day 3: Making it to Hamilton with 50 cents", views: 189, donations: 15.25, status: "published" },
    { title: "Day 5: Hitchhiking Adventure to Rotorua", views: 312, donations: 42.75, status: "published" },
    { title: "Day 7: The Taupo Lake Challenge", views: 0, donations: 0, status: "editing" }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold text-gray-900">YouTube Tracker</h2>
          <p className="text-gray-600">10 Cent NZ Challenge - Cancer Fundraiser Series</p>
        </div>
        <Button>
          <Plus className="h-4 w-4 mr-2" />
          New Video
        </Button>
      </div>

      {/* Progress Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Subscribers</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{currentSubscribers}</div>
            <p className="text-xs text-muted-foreground">
              of {subscriberGoal} goal
            </p>
            <Progress value={(currentSubscribers / subscriberGoal) * 100} className="mt-2" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Donations</CardTitle>
            <Heart className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">${currentDonations}</div>
            <p className="text-xs text-muted-foreground">
              of ${donationGoal} goal
            </p>
            <Progress value={(currentDonations / donationGoal) * 100} className="mt-2" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Videos</CardTitle>
            <Video className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{videosPublished}</div>
            <p className="text-xs text-muted-foreground">
              of {plannedVideos} planned
            </p>
            <Progress value={(videosPublished / plannedVideos) * 100} className="mt-2" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Journey Progress</CardTitle>
            <MapPin className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">45%</div>
            <p className="text-xs text-muted-foreground">
              Auckland to Wellington
            </p>
            <Progress value={45} className="mt-2" />
          </CardContent>
        </Card>
      </div>

      {/* Production Checklist */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <CheckCircle2 className="h-5 w-5" />
            Current Video Production
          </CardTitle>
          <CardDescription>
            Track your video creation process step by step
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {productionSteps.map((step, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 p-3 rounded-lg bg-gray-50 hover:bg-gray-100 cursor-pointer transition-colors"
                onClick={() => toggleStep(index)}
              >
                {completedSteps[index] ? (
                  <CheckCircle2 className="h-5 w-5 text-green-600" />
                ) : (
                  <Circle className="h-5 w-5 text-gray-400" />
                )}
                <span className={`flex-1 ${completedSteps[index] ? 'line-through text-gray-500' : ''}`}>
                  {step}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-4">
            <Progress value={(completedSteps.filter(Boolean).length / productionSteps.length) * 100} />
            <p className="text-sm text-gray-600 mt-2">
              {completedSteps.filter(Boolean).length} of {productionSteps.length} steps completed
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Recent Videos */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Videos</CardTitle>
          <CardDescription>Track performance and donation impact</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {recentVideos.map((video, index) => (
              <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                <div className="flex-1">
                  <h4 className="font-medium">{video.title}</h4>
                  <div className="flex items-center gap-4 mt-2 text-sm text-gray-600">
                    <span className="flex items-center gap-1">
                      <TrendingUp className="h-4 w-4" />
                      {video.views} views
                    </span>
                    <span className="flex items-center gap-1">
                      <DollarSign className="h-4 w-4" />
                      ${video.donations}
                    </span>
                  </div>
                </div>
                <Badge variant={video.status === 'published' ? 'default' : 'secondary'}>
                  {video.status}
                </Badge>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Donation Log */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Heart className="h-5 w-5 text-red-500" />
            Recent Donations
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
              <div>
                <p className="font-medium">Sarah M.</p>
                <p className="text-sm text-gray-600">Great cause! Keep going!</p>
              </div>
              <span className="font-bold text-green-600">$25.00</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
              <div>
                <p className="font-medium">Anonymous</p>
                <p className="text-sm text-gray-600">Amazing journey so far</p>
              </div>
              <span className="font-bold text-green-600">$15.50</span>
            </div>
            <div className="flex justify-between items-center p-3 bg-green-50 rounded-lg">
              <div>
                <p className="font-medium">John D.</p>
                <p className="text-sm text-gray-600">Love the adventure!</p>
              </div>
              <span className="font-bold text-green-600">$42.00</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
