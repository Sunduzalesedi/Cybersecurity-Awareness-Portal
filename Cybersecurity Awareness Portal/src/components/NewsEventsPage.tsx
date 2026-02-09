import { Calendar, Clock, MapPin, Users, Video, BookOpen, ArrowRight, Filter, Mail, User, Building } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Calendar as CalendarComponent } from './ui/calendar';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from './ui/dialog';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from './ui/tooltip';
import { useState } from 'react';
import { DayModifiers, Matcher } from 'react-day-picker@8.10.1';

export function NewsEventsPage() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<string>('');
  const [hoveredEventDate, setHoveredEventDate] = useState<Date | null>(null);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    department: '',
  });

  const handleRegister = (eventTitle: string) => {
    setSelectedEvent(eventTitle);
    setIsRegistrationOpen(true);
  };

  const handleSubmitRegistration = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle registration submission
    console.log('Registration submitted:', { event: selectedEvent, ...formData });
    setIsRegistrationOpen(false);
    setFormData({ fullName: '', email: '', department: '' });
    // Show success message (you could add a toast notification here)
    alert('Registration successful! You will receive a confirmation email shortly.');
  };

  const upcomingEvents = [
    {
      id: 1,
      title: 'Cybersecurity Awareness Month Kickoff',
      date: 'October 1, 2025',
      dateObj: new Date(2025, 9, 1), // Month is 0-indexed
      time: '10:00 AM - 11:30 AM',
      type: 'Workshop',
      location: 'Main Auditorium',
      attendees: 250,
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800',
      description: 'Launch event featuring keynote speakers and interactive security demonstrations.',
      featured: true,
    },
    {
      id: 2,
      title: 'Phishing Simulation Training',
      date: 'October 15, 2025',
      dateObj: new Date(2025, 9, 15),
      time: '2:00 PM - 4:00 PM',
      type: 'Training',
      location: 'Virtual (Zoom)',
      attendees: 150,
      image: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800',
      description: 'Hands-on training to identify and respond to phishing attempts.',
      featured: false,
    },
    {
      id: 3,
      title: 'Ransomware Response Webinar',
      date: 'October 22, 2025',
      dateObj: new Date(2025, 9, 22),
      time: '1:00 PM - 2:00 PM',
      type: 'Webinar',
      location: 'Virtual (Teams)',
      attendees: 200,
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800',
      description: 'Learn best practices for preventing and responding to ransomware attacks.',
      featured: false,
    },
    {
      id: 4,
      title: 'Password Security Best Practices',
      date: 'November 5, 2025',
      dateObj: new Date(2025, 10, 5),
      time: '11:00 AM - 12:00 PM',
      type: 'Workshop',
      location: 'Conference Room B',
      attendees: 80,
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800',
      description: 'Master the art of creating and managing secure passwords.',
      featured: false,
    },
  ];

  const pastEvents = [
    {
      id: 5,
      title: 'Data Protection Compliance Workshop',
      date: 'September 15, 2025',
      type: 'Workshop',
      attendees: 180,
      recording: true,
    },
    {
      id: 6,
      title: 'Social Engineering Defense Training',
      date: 'August 30, 2025',
      type: 'Training',
      attendees: 220,
      recording: true,
    },
    {
      id: 7,
      title: 'Security Incident Response Drill',
      date: 'August 10, 2025',
      type: 'Workshop',
      attendees: 95,
      recording: false,
    },
    {
      id: 8,
      title: 'Mobile Security Awareness Session',
      date: 'July 25, 2025',
      type: 'Webinar',
      attendees: 310,
      recording: true,
    },
  ];

  const news = [
    {
      id: 1,
      title: 'SecureGuard Achieves SOC 2 Type II Certification',
      date: 'September 28, 2025',
      category: 'Achievement',
      excerpt: 'We are proud to announce our successful SOC 2 Type II audit, demonstrating our commitment to data security and privacy.',
    },
    {
      id: 2,
      title: 'New AI-Powered Threat Detection System Deployed',
      date: 'September 20, 2025',
      category: 'Technology',
      excerpt: 'Our latest machine learning platform can detect and respond to threats 10x faster than traditional methods.',
    },
    {
      id: 3,
      title: 'Q3 Security Report: Zero Major Incidents',
      date: 'September 10, 2025',
      category: 'Report',
      excerpt: 'Thanks to team vigilance and proactive measures, we maintained a perfect security record this quarter.',
    },
  ];

  const getEventIcon = (type: string) => {
    switch (type) {
      case 'Workshop':
        return Users;
      case 'Webinar':
        return Video;
      case 'Training':
        return BookOpen;
      default:
        return Calendar;
    }
  };

  const getEventColor = (type: string) => {
    switch (type) {
      case 'Workshop':
        return 'blue';
      case 'Webinar':
        return 'purple';
      case 'Training':
        return 'teal';
      default:
        return 'slate';
    }
  };

  // Get event dates for calendar highlighting
  const eventDates = upcomingEvents.map(event => event.dateObj);
  
  // Get event for a specific date
  const getEventForDate = (date: Date) => {
    return upcomingEvents.find(event => 
      event.dateObj.getDate() === date.getDate() &&
      event.dateObj.getMonth() === date.getMonth() &&
      event.dateObj.getFullYear() === date.getFullYear()
    );
  };

  return (
    <div className="min-h-screen bg-slate-950 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-white text-4xl mb-4">Latest News & Events</h1>
          <p className="text-slate-400 text-lg">
            Stay informed about upcoming training sessions, workshops, and cybersecurity updates
          </p>
        </div>

        {/* Featured Event Banner */}
        {upcomingEvents.filter((e) => e.featured)[0] && (
          <Card className="bg-gradient-to-br from-teal-900 to-blue-900 border-teal-700 mb-12">
            <CardContent className="p-0">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="relative h-64 lg:h-auto overflow-hidden rounded-l-lg">
                  <ImageWithFallback
                    src={upcomingEvents.filter((e) => e.featured)[0].image}
                    alt="Featured Event"
                    className="w-full h-full object-cover"
                  />
                  <Badge className="absolute top-4 left-4 bg-red-600 text-white">
                    Featured Event
                  </Badge>
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <Badge className="bg-teal-600 text-white w-fit mb-4">
                    {upcomingEvents.filter((e) => e.featured)[0].type}
                  </Badge>
                  <h2 className="text-white text-3xl mb-4">
                    {upcomingEvents.filter((e) => e.featured)[0].title}
                  </h2>
                  <p className="text-teal-100 mb-6">
                    {upcomingEvents.filter((e) => e.featured)[0].description}
                  </p>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center gap-2 text-teal-200">
                      <Calendar className="h-4 w-4" />
                      <span>{upcomingEvents.filter((e) => e.featured)[0].date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-teal-200">
                      <Clock className="h-4 w-4" />
                      <span>{upcomingEvents.filter((e) => e.featured)[0].time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-teal-200">
                      <MapPin className="h-4 w-4" />
                      <span>{upcomingEvents.filter((e) => e.featured)[0].location}</span>
                    </div>
                  </div>
                  <Button 
                    className="bg-white text-teal-900 hover:bg-teal-50 w-fit"
                    onClick={() => handleRegister(upcomingEvents.filter((e) => e.featured)[0].title)}
                  >
                    Register Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Upcoming Events */}
            <div>
              <h2 className="text-white text-2xl mb-6">Upcoming Events</h2>
              <div className="space-y-6">
                {upcomingEvents.filter((e) => !e.featured).map((event) => {
                  const Icon = getEventIcon(event.type);
                  const color = getEventColor(event.type);

                  return (
                    <Card
                      key={event.id}
                      className="bg-slate-900 border-slate-800 hover:border-teal-600 transition-all"
                    >
                      <CardContent className="p-0">
                        <div className="grid md:grid-cols-3 gap-0">
                          <div className="relative h-48 md:h-auto overflow-hidden md:rounded-l-lg">
                            <ImageWithFallback
                              src={event.image}
                              alt={event.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="md:col-span-2 p-6">
                            <div className="flex items-start justify-between mb-3">
                              <Badge className={`bg-${color}-600 text-white`}>
                                {event.type}
                              </Badge>
                              <div className="flex items-center gap-1 text-slate-400 text-sm">
                                <Users className="h-4 w-4" />
                                <span>{event.attendees} attending</span>
                              </div>
                            </div>
                            <h3 className="text-white text-xl mb-2">{event.title}</h3>
                            <p className="text-slate-400 text-sm mb-4">{event.description}</p>
                            <div className="space-y-2 mb-4">
                              <div className="flex items-center gap-2 text-slate-400 text-sm">
                                <Calendar className="h-4 w-4" />
                                <span>{event.date}</span>
                              </div>
                              <div className="flex items-center gap-2 text-slate-400 text-sm">
                                <Clock className="h-4 w-4" />
                                <span>{event.time}</span>
                              </div>
                              <div className="flex items-center gap-2 text-slate-400 text-sm">
                                <MapPin className="h-4 w-4" />
                                <span>{event.location}</span>
                              </div>
                            </div>
                            <Button 
                              className="bg-teal-600 hover:bg-teal-700 text-white"
                              onClick={() => handleRegister(event.title)}
                            >
                              Register
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Past Events */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-white text-2xl">Past Events</h2>
                <Tabs defaultValue="all">
                  <TabsList className="bg-slate-900 border border-slate-800">
                    <TabsTrigger value="all" className="data-[state=active]:bg-teal-600">
                      All
                    </TabsTrigger>
                    <TabsTrigger value="training" className="data-[state=active]:bg-teal-600">
                      Training
                    </TabsTrigger>
                    <TabsTrigger value="workshops" className="data-[state=active]:bg-teal-600">
                      Workshops
                    </TabsTrigger>
                    <TabsTrigger value="webinars" className="data-[state=active]:bg-teal-600">
                      Webinars
                    </TabsTrigger>
                  </TabsList>
                </Tabs>
              </div>

              <div className="space-y-4">
                {pastEvents.map((event) => {
                  const Icon = getEventIcon(event.type);
                  const color = getEventColor(event.type);

                  return (
                    <Card
                      key={event.id}
                      className="bg-slate-900 border-slate-800 hover:border-teal-600 transition-all"
                    >
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between">
                          <div className="flex gap-4 flex-1">
                            <div className={`bg-${color}-500/10 w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0`}>
                              <Icon className={`h-6 w-6 text-${color}-500`} />
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-2">
                                <h3 className="text-white">{event.title}</h3>
                                <Badge variant="outline" className="border-slate-700 text-slate-400">
                                  {event.type}
                                </Badge>
                              </div>
                              <div className="flex items-center gap-4 text-slate-400 text-sm">
                                <div className="flex items-center gap-1">
                                  <Calendar className="h-4 w-4" />
                                  <span>{event.date}</span>
                                </div>
                                <div className="flex items-center gap-1">
                                  <Users className="h-4 w-4" />
                                  <span>{event.attendees} attended</span>
                                </div>
                              </div>
                            </div>
                          </div>
                          {event.recording && (
                            <Button variant="outline" className="border-slate-700 text-black hover:bg-slate-800 hover:text-white">
                              <Video className="mr-2 h-4 w-4" />
                              Watch Recording
                            </Button>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Latest News */}
            <div>
              <h2 className="text-white text-2xl mb-6">Latest Security News</h2>
              <div className="space-y-4">
                {news.map((item) => (
                  <Card
                    key={item.id}
                    className="bg-slate-900 border-slate-800 hover:border-teal-600 transition-all cursor-pointer"
                  >
                    <CardHeader>
                      <div className="flex items-center gap-3 mb-2">
                        <Badge className="bg-teal-600 text-white">{item.category}</Badge>
                        <span className="text-slate-500 text-sm">{item.date}</span>
                      </div>
                      <CardTitle className="text-white">{item.title}</CardTitle>
                      <CardDescription className="text-slate-400">
                        {item.excerpt}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button variant="link" className="text-teal-400 hover:text-teal-300 p-0">
                        Read More <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Calendar */}
            <Card className="bg-slate-900 border-slate-800">
              <CardHeader>
                <CardTitle className="text-white">Event Calendar</CardTitle>
              </CardHeader>
              <CardContent>
                <style>{`
                  /* Calendar text visibility fixes */
                  .calendar-with-events button {
                    color: white !important;
                  }
                  .calendar-with-events .rdp-caption_label {
                    color: rgb(226, 232, 240) !important;
                    font-size: 0.95rem !important;
                    font-weight: 600 !important;
                  }
                  .calendar-with-events .rdp-head_cell {
                    color: rgb(148, 163, 184) !important;
                  }
                  .calendar-with-events .rdp-day {
                    color: white !important;
                  }
                  .calendar-with-events .rdp-day_outside {
                    color: rgb(71, 85, 105) !important;
                    opacity: 0.5;
                  }
                  .calendar-with-events .rdp-nav_button svg {
                    color: rgb(226, 232, 240) !important;
                  }
                  
                  /* Hover state for regular dates */
                  .calendar-with-events button:hover:not(.event-date) {
                    background-color: rgb(241, 245, 249) !important;
                    color: black !important;
                  }
                  
                  /* Event date highlighting */
                  .calendar-with-events .event-date {
                    background-color: rgb(20, 184, 166) !important;
                    color: white !important;
                    font-weight: 600 !important;
                    position: relative;
                    border-radius: 0.375rem;
                  }
                  .calendar-with-events .event-date:hover {
                    background-color: rgb(13, 148, 136) !important;
                    color: white !important;
                    transform: scale(1.1);
                    z-index: 10;
                  }
                  .calendar-with-events .event-date::after {
                    content: '';
                    position: absolute;
                    bottom: 2px;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 4px;
                    height: 4px;
                    background-color: rgb(254, 202, 202);
                    border-radius: 50%;
                  }
                  
                  /* Selected date styling */
                  .calendar-with-events [aria-selected="true"]:not(.event-date) {
                    background-color: rgb(30, 41, 59) !important;
                    color: white !important;
                  }
                  .calendar-with-events [aria-selected="true"]:not(.event-date):hover {
                    background-color: rgb(51, 65, 85) !important;
                    color: white !important;
                  }
                  
                  /* Today styling */
                  .calendar-with-events .rdp-day_today:not(.event-date) {
                    background-color: rgb(51, 65, 85) !important;
                    color: white !important;
                  }
                  .calendar-with-events .rdp-day_today:not(.event-date):hover {
                    background-color: rgb(71, 85, 105) !important;
                    color: white !important;
                  }
                `}</style>
                <CalendarComponent
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  className="rounded-md border-0 calendar-with-events"
                  modifiers={{
                    eventDate: eventDates
                  }}
                  modifiersClassNames={{
                    eventDate: 'event-date'
                  }}
                  components={{
                    DayContent: ({ date: dayDate }) => {
                      const event = getEventForDate(dayDate);
                      
                      if (event) {
                        return (
                          <TooltipProvider>
                            <Tooltip delayDuration={0}>
                              <TooltipTrigger asChild>
                                <span className="relative w-full h-full flex items-center justify-center">
                                  {dayDate.getDate()}
                                </span>
                              </TooltipTrigger>
                              <TooltipContent 
                                side="right" 
                                className="bg-slate-800 border-teal-600 text-white p-3 max-w-xs"
                              >
                                <div className="space-y-1">
                                  <p className="font-semibold text-teal-400">{event.title}</p>
                                  <div className="flex items-center gap-1 text-xs text-slate-300">
                                    <Clock className="h-3 w-3" />
                                    <span>{event.time}</span>
                                  </div>
                                  <div className="flex items-center gap-1 text-xs text-slate-300">
                                    <MapPin className="h-3 w-3" />
                                    <span>{event.location}</span>
                                  </div>
                                  <Badge className="bg-teal-600 text-white text-xs mt-1">
                                    {event.type}
                                  </Badge>
                                </div>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        );
                      }
                      
                      return <>{dayDate.getDate()}</>;
                    }
                  }}
                />
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="bg-slate-900 border-slate-800">
              <CardHeader>
                <CardTitle className="text-white">This Month</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Upcoming Events</span>
                  <span className="text-teal-400 text-2xl">4</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Total Attendees</span>
                  <span className="text-teal-400 text-2xl">630</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-slate-400">Training Hours</span>
                  <span className="text-teal-400 text-2xl">12</span>
                </div>
              </CardContent>
            </Card>

            {/* Subscribe */}
            <Card className="bg-gradient-to-br from-teal-900 to-blue-900 border-teal-700">
              <CardHeader>
                <CardTitle className="text-white">Never Miss an Event</CardTitle>
                <CardDescription className="text-teal-200">
                  Get notified about upcoming training sessions and workshops
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-white text-teal-900 hover:bg-teal-50">
                  Subscribe to Calendar
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Registration Dialog */}
        <Dialog open={isRegistrationOpen} onOpenChange={setIsRegistrationOpen}>
          <DialogContent className="bg-slate-900 border-slate-800 text-white sm:max-w-md">
            <DialogHeader>
              <DialogTitle className="text-white">Event Registration</DialogTitle>
              <DialogDescription className="text-slate-400">
                Register for: <span className="text-teal-400">{selectedEvent}</span>
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmitRegistration} className="space-y-4 mt-4">
              <div className="space-y-2">
                <Label htmlFor="fullName" className="text-slate-200">
                  Full Name
                </Label>
                <div className="relative">
                  <User className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                  <Input
                    id="fullName"
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="bg-slate-800 border-slate-700 text-white pl-10 focus:border-teal-500"
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email" className="text-slate-200">
                  Email Address
                </Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-slate-800 border-slate-700 text-white pl-10 focus:border-teal-500"
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="department" className="text-slate-200">
                  Department
                </Label>
                <div className="relative">
                  <Building className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                  <Input
                    id="department"
                    type="text"
                    placeholder="Enter your department"
                    value={formData.department}
                    onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                    className="bg-slate-800 border-slate-700 text-white pl-10 focus:border-teal-500"
                    required
                  />
                </div>
              </div>
              <div className="flex gap-3 pt-4">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setIsRegistrationOpen(false)}
                  className="flex-1 border-slate-700 text-black hover:bg-slate-800 hover:text-white"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  className="flex-1 bg-teal-600 hover:bg-teal-700 text-white"
                >
                  Confirm Registration
                </Button>
              </div>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
}
