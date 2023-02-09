import { useState } from 'react'
import { Form } from './components/Form'
import { Event } from './types'
import { daysOfWeek, timeSlots, seed } from './constants'
import { displayTime } from './lib/display'

function App() {
  const [events, setEvents] = useState<Event[]>(seed)

  function handleSubmit(event: Event) {
    setEvents((prevEvents) => [...prevEvents, event])
  }

  return (
    <div className="container mx-auto">
      <div className="grid grid-flow-col auto-cols-max">

        {daysOfWeek.map(day =>
          <div className="m-4">
            <h3 className="text-2xl text-center font-bold mt-0 mb-6">{day} Events</h3>
            {
              events
                .filter(event => day === event.day)
                .map(event =>
                  <div className="p-2 m-1">
                    <div className="text-center">
                      {event.name}
                    </div >
                    <div className="text-center">
                      {displayTime(event.time, event.time > 6 && event.time !== 12)}
                    </div >
                  </div >
                )
            }
          </div>
        )}
      </div>

      <Form onSubmit={handleSubmit} dayOptions={daysOfWeek} timeOptions={timeSlots} />
    </div>
  )
}

export default App
