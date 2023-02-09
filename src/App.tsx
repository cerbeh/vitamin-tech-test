import { useState } from 'react'
import { Form } from './components/Form'
import { Event } from './types'
import { daysOfWeek, timeSlots, seed } from './constants'
import { CalendarGrid } from './components/Calendar'

function App() {
  const [events, setEvents] = useState<Event[]>([])

  function handleSubmit(event: Event) {
    setEvents((prevEvents) => [...prevEvents, event])
  }

  return (
    <div className="container mx-auto">
      <CalendarGrid days={daysOfWeek} times={timeSlots} events={events} />
      <Form onSubmit={handleSubmit} dayOptions={daysOfWeek} timeOptions={timeSlots} />
    </div>
  )
}

export default App
