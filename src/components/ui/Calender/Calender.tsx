
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

// Moment.js এর Localizer সেট করা
const localizer = momentLocalizer(moment);

const Calender = () => {
    // ডামি ডেটা
    const dummyEvents = [
        {
            title: 'Meeting with Client',
            start: new Date(2024, 8, 11, 13, 30), // September 11, 2024, 01:30 PM
            end: new Date(2024, 8, 11, 14, 30),   // September 11, 2024, 02:30 PM
        },
        {
            title: 'Lunch with Team',
            start: new Date(2024, 8, 12, 12, 0),  // September 12, 2024, 12:00 PM
            end: new Date(2024, 8, 12, 13, 0),    // September 12, 2024, 01:00 PM
        },
        {
            title: 'Lunch with Team',
            start: new Date(2024, 8, 12, 12, 0),  // September 12, 2024, 12:00 PM
            end: new Date(2024, 8, 12, 13, 0),    // September 12, 2024, 01:00 PM
        },
    ];

    return (
        <div>
            <h1 className="text-center text-2xl font-bold mb-4">My Calendar</h1>
            <Calendar
                localizer={localizer}
                events={dummyEvents}
                startAccessor="start"
                endAccessor="end"
                style={{ height: 500 }}
            />
        </div>
    );
};

export default Calender;
