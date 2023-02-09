import { useState } from 'react'
import { Form } from './components/Form'
import { Event } from './types'
import { daysOfWeek, timeSlots, seed } from './constants'

function App() {
  const [events, setEvents] = useState<Event[]>(seed)

  function handleSubmit(event: Event) {
    setEvents((prevEvents) => [...prevEvents, event])
  }

  return (
    <div className="container mx-auto">
      <h1 className="text-5xl text-center font-bold mt-0 mb-6">Hello World</h1>
      {events.map(event => (<div className="font-medium leading-tight text-base">{event.name}</div>))}
      <Form onSubmit={handleSubmit} dayOptions={daysOfWeek} timeOptions={timeSlots} />
    </div>
  )
}

export default App
