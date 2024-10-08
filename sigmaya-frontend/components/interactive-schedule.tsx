"use client";

import { useState, useCallback, useMemo } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Setup the localizer for react-big-calendar
const localizer = momentLocalizer(moment);

interface Class {
  id: number;
  title: string;
  start: Date;
  end: Date;
  resourceId: string; // This will be the course code
  link: string; // Link to the class information page
}

// Sample class data
const classes: Class[] = [
  {
    id: 1,
    title: "Matemáticas Avanzadas",
    start: new Date(2024, 9, 8, 10, 0), // Note: month is 0-indexed
    end: new Date(2024, 9, 8, 11, 30),
    resourceId: "MAT301",
    link: "/class-info/MAT301",
  },
  {
    id: 2,
    title: "Programación en Python",
    start: new Date(2024, 9, 9, 14, 0),
    end: new Date(2024, 9, 9, 15, 30),
    resourceId: "CS202",
    link: "/class-info/CS202",
  },
  {
    id: 3,
    title: "Literatura Contemporánea",
    start: new Date(2024, 9, 10, 9, 0),
    end: new Date(2024, 9, 10, 12, 0),
    resourceId: "LIT405",
    link: "/class-info/LIT405",
  },
  // Add more classes as needed
];

export function InteractiveScheduleComponent() {
  const [currentDate, setCurrentDate] = useState(new Date());

  const onNavigate = useCallback((newDate: Date) => {
    setCurrentDate(newDate);
  }, []);

  const { components, defaultDate, views } = useMemo(
    () => ({
      components: {
        toolbar: CustomToolbar,
        event: EventComponent,
      },
      defaultDate: new Date(),
      views: {
        week: true,
        day: true,
      },
    }),
    []
  );

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Horario Interactivo</CardTitle>
      </CardHeader>
      <CardContent>
        <Calendar
          localizer={localizer}
          events={classes}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500 }}
          date={currentDate}
          onNavigate={onNavigate}
          defaultView="week"
          views={views}
          components={components}
          defaultDate={defaultDate}
        />
      </CardContent>
    </Card>
  );
}

interface ToolbarProps {
  date: Date;
  onNavigate: (action: "PREV" | "NEXT" | "TODAY") => void;
  label: string;
}

function CustomToolbar({ date, onNavigate, label }: ToolbarProps) {
  return (
    <div className="flex justify-between items-center mb-4">
      <div>
        <Button variant="outline" size="sm" onClick={() => onNavigate("PREV")}>
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => onNavigate("NEXT")}
          className="ml-2"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
      <h2 className="text-lg font-semibold">{label}</h2>
      <Button variant="outline" size="sm" onClick={() => onNavigate("TODAY")}>
        Hoy
      </Button>
    </div>
  );
}

interface EventProps {
  event: Class;
}

function EventComponent({ event }: EventProps) {
  return (
    <div>
      <a href={event.link} className="text-blue-500 underline">
        {event.resourceId}: {event.title}
      </a>
    </div>
  )
}