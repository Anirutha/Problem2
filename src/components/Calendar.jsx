import React, { useState } from "react";
import Fullcalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

function Calendars() {
  const [events, setEvents] = useState([
    // Your initial events data goes here
    {
      id: '1',
      title: 'Event 1',
      start: '2023-12-11T08:00:00',
      end: '2023-12-11T17:00:00',
    },
    {
      id: '2',
      title: 'Event 1',
      start: '2023-12-12T08:00:00',
      end: '2023-12-12T17:00:00',
    },
    {
      id: '3',
      title: 'Event 1',
      start: '2023-12-13T08:00:00',
      end: '2023-12-13T17:00:00',
    },
    {
      id: '4',
      title: 'Event 1',
      start: '2023-12-14T08:00:00',
      end: '2023-12-14T17:00:00',
    },
    {
      id: '5',
      title: 'Event 1',
      start: '2023-12-15T08:00:00',
      end: '2023-12-15T17:00:00',
    },
    {
      id: '6',
      title: 'Event 1',
      start: '2023-12-16T08:00:00',
      end: '2023-12-16T12:00:00',
    },
    // Add more events as needed
  ]);
  const unavailableTimes = [
    { start: '2023-12-11T12:30:00', end: '2023-12-11T13:00:00' },
    { start: '2023-12-12T12:30:00', end: '2023-12-12T13:00:00' },
    { start: '2023-12-13T12:30:00', end: '2023-12-13T13:00:00' },
    { start: '2023-12-14T12:30:00', end: '2023-12-14T13:00:00' },
    { start: '2023-12-15T12:30:00', end: '2023-12-15T13:00:00' },
    // Add more unavailable time ranges as needed
  ];

  const handleEventAdd = (start, end) => {
    const newEvent = {
      title: 'New Event',
      start: start.toISOString(),
      end: end.toISOString(),
      id: new Date().toISOString(),
    };

    setEvents((prevEvents) => [...prevEvents, newEvent]);
  };
  const selectConstraint = (info) => {
    const selectedRange = {
      start: info.startStr,
      end: info.endStr,
    };

    // Check if the selected range overlaps with any unavailable time ranges
    const isUnavailable = unavailableTimes.some((unavailableRange) => {
      return (
        selectedRange.start < unavailableRange.end &&
        selectedRange.end > unavailableRange.start
      );
    });

    return !isUnavailable; // Return true if the selected range is available, false otherwise
  };

  return (
    <div>
      <Fullcalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView={"dayGridMonth"}
        events={events}
        editable={true}
        selectable={true}
        select={(info) => handleEventAdd(info.start, info.end)}
        selectConstraint={selectConstraint}
        headerToolbar={{
          start: "today prev,next", // will normally be on the left. if RTL, will be on the right
          center: "title",
          end: "dayGridMonth,timeGridWeek,timeGridDay", // will normally be on the right. if RTL, will be on the left
        }
        }
        height={"90vh"}
      />
    </div>
  );
}

export default Calendars;
