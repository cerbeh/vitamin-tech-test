import { useState } from 'react'
import { Form } from './components/Form'
import { Event } from './types'
import { daysOfWeek, timeSlots, seed } from './constants'
import { displayTime } from './lib/display'

function App() {
  const [events, setEvents] = useState<Event[]>([])

  function handleSubmit(event: Event) {
    setEvents((prevEvents) => [...prevEvents, event])
  }

  return (
    <div className="container mx-auto">
      <div className="grid grid-flow-col grid-cols-6 gap-4">

        {/* Headers */}
        <div className="m-4" />
        {daysOfWeek.map(day =>
          <h3 className="text-2xl text-center font-bold mt-0 mb-6">{day}</h3>
        )}
      </div>

      {timeSlots.map(time =>
        <div className="grid grid-flow-col grid-cols-6">

          {/* Row ID */}
          <p className="p-3 m-2 text-center">{displayTime(+time)}</p>

          {daysOfWeek.map(day =>
            <div className="flex flex-nowrap bg-slate-100">
              {events
                .filter(event => day === event.day && time === event.time)
                .map(event =>
                  <span className="text-center w-full p-1 bg-lime-50 m-0.5">
                    {event.name}
                  </span>
                )
              }
            </div>
          )}
        </div>
      )}

      <Form onSubmit={handleSubmit} dayOptions={daysOfWeek} timeOptions={timeSlots} />
    </div>
  )
}

export default App
