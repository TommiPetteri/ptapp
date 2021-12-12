
import React, { useState, useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

export default function Calendarpage() {
    const localizer = momentLocalizer(moment);
    const [trainings, setTrainings] = useState([]);

    useEffect(() => {
        getTrainings()
    }, []);

    const getTrainings = () => {
        fetch('https://customerrest.herokuapp.com/gettrainings')
            .then(response => response.json())
            .then(data => setTrainings(data))
            .catch(err => console.error(err))
    }

    const events = trainings.map((training) =>
        training =
        {
            allDay: 'false',
            title: 
            moment(training.date).format('h:mm') +
            "/ " + training.duration + 
            "min  "  + 
            training.activity + "/ " +
            training.customer.lastname,

            start: moment(training.date).toDate(),
            end: moment(training.date).add(training.duration, 'minutes').toDate(),
      
        }
    );
    console.log('events:', events);

    return (
        <Calendar
            localizer={localizer}
            events={events}

            style={{ height: 450 }}
        />
    )
}