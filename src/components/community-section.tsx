
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Calendar, Users, Route } from "lucide-react";

export function CommunitySection() {
  // Sample community events
  const upcomingRuns = [
    {
      id: 1,
      title: "Sunrise Beach Run",
      date: "Saturday, April 26",
      time: "6:00 AM",
      location: "Costa Verde Beach",
      participants: 12
    },
    {
      id: 2,
      title: "Trail Run Adventure",
      date: "Sunday, April 27",
      time: "8:00 AM",
      location: "Lomas de Lúcumo",
      participants: 8
    },
    {
      id: 3,
      title: "Midweek City Night Run",
      date: "Wednesday, April 30",
      time: "7:00 PM",
      location: "Parque Kennedy",
      participants: 15
    }
  ];

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Community Calendar */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center gap-3 mb-6">
              <Calendar className="text-sporty-blue h-6 w-6" />
              <h3 className="text-2xl font-bold">Community Runs</h3>
            </div>
            
            <div className="space-y-4 mb-6">
              {upcomingRuns.map((run) => (
                <div key={run.id} className="calendar-event bg-cream">
                  <div className="flex justify-between items-center">
                    <h4 className="font-bold">{run.title}</h4>
                    <span className="text-sm bg-sporty-orange/20 text-sporty-orange px-2 py-1 rounded-full">
                      {run.participants} runners
                    </span>
                  </div>
                  <div className="mt-2 text-sm text-charcoal/70">
                    <div>{run.date} at {run.time}</div>
                    <div>{run.location}</div>
                  </div>
                  <div className="mt-3 flex justify-between">
                    <Button variant="outline" size="sm" className="text-xs">
                      Add to Calendar
                    </Button>
                    <Button variant="outline" size="sm" className="text-xs bg-sporty-blue/10 text-sporty-blue border-sporty-blue">
                      Join Run
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            
            <Button asChild className="w-full bg-sporty-blue hover:bg-sporty-blue/90">
              <Link to="/community">View All Community Runs</Link>
            </Button>
          </div>
          
          {/* Strava Integration */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center gap-3 mb-6">
              <Users className="text-sporty-purple h-6 w-6" />
              <h3 className="text-2xl font-bold">Connect & Share</h3>
            </div>
            
            <div className="mb-8">
              <Card className="mb-6 border-sporty-purple/20">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-sporty-purple/20 p-3 rounded-full">
                      <img src="/placeholder.svg" alt="Strava" className="w-8 h-8" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Strava Integration</h4>
                      <p className="text-sm text-charcoal/70">Track and share your runs with the community</p>
                    </div>
                  </div>
                  <Button className="w-full bg-[#FC4C02] hover:bg-[#FC4C02]/90">
                    Connect with Strava
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="border-sporty-pink/20">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="bg-sporty-pink/20 p-3 rounded-full">
                      <Route className="text-sporty-pink h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">Group Challenges</h4>
                      <p className="text-sm text-charcoal/70">Join monthly challenges and earn rewards</p>
                    </div>
                  </div>
                  <div className="bg-cream rounded-lg p-3 mb-4">
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium">April Challenge Progress</span>
                      <span className="text-sm font-medium">65%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div className="bg-sporty-pink h-2.5 rounded-full" style={{ width: "65%" }}></div>
                    </div>
                  </div>
                  <Button asChild className="w-full bg-sporty-pink hover:bg-sporty-pink/90">
                    <Link to="/challenges">View Challenges</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
            
            <Button asChild variant="outline" className="w-full border-sporty-purple text-sporty-purple hover:bg-sporty-purple/10">
              <Link to="/community">Explore Community Features</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
