import { useState, FormEvent, useEffect } from 'react'

type Weekday = 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday'
interface Event {
  name: string
  day: Weekday
  time: number
}

const daysOfWeek: Weekday[] = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday'
]

const timeSlots = [8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6]

const seed: Event[] = [
  {
    name: 'Event 1',
    day: 'Monday',
    time: 9
  },
  {
    name: 'Event 2',
    day: 'Wednesday',
    time: 12
  }
]

function App() {
  const [events, setEvents] = useState<Event[]>(seed)
  const [event, setEvent] = useState({} as Event)

  const displayTime = (time: number, isAm: boolean) => `${time}.00${isAm ? 'am' : 'pm'}`

  function handleChange(e: FormEvent<HTMLInputElement | HTMLSelectElement>) {
    const { name, value } = e.currentTarget
    setEvent({ ...event, [name]: value })
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setEvents((prevEvents) => [...prevEvents, event])
    setEvent({} as Event)
  }

  return (
    <div className="container mx-auto">
      <h1 className="text-5xl text-center font-bold mt-0 mb-6">Hello World</h1>
      {events.map(event => (<div className="font-medium leading-tight text-base">{event.name}</div>))}
      <form onSubmit={handleSubmit} className="border-2 rounded-sm w-1/2 p-2">
        <h2>Add Event</h2>
        <div className="mb-6">
          <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
          <input type="text" name="name" id="name" className="input[type='text'] bg-slate-100 border-gray-300 rounded-lg p-2 w-full" onInput={handleChange} placeholder="Name your event" />
        </div>
        <div className="mb-6">
          <label htmlFor="day-select" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white ">Day</label>
          <select name="day" id="day-select" className="select  w-full" onInput={handleChange} value={event.day}>
            {daysOfWeek.map((day) => (<option value={day}>{day}</option>))}
          </select>
        </div>
        <div className="mb-6">
          <label htmlFor="day-select" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Time</label>
          <select name="time" id="day-select" className="select  w-full" onInput={handleChange} value={event.time}>
            {timeSlots.map((time, i) => (<option value={time}>{displayTime(time, i < 4)}</option>))}
          </select>
        </div>
        <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Submit</button>
      </form>
    </div>
  )
}

export default App
