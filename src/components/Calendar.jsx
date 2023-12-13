import React, { useState } from "react";
import Fullcalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

function Calendars() {
  const [events, setEvents] = useState([]);

  const handleEventAdd = (start, end) => {
    const newEvent = {
      title: 'New Event',
      start: start.toISOString(),
      end: end.toISOString(),
      id: new Date().toISOString(),
    };

    setEvents((prevEvents) => [...prevEvents, newEvent]);
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
