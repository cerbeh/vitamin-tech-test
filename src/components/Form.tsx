import { FC, useState, FormEvent } from "react";
import { Event, Weekday } from "../types";
import { displayTime } from "../lib/display";

interface FormProps {
    onSubmit: (e: Event) => void
    timeOptions: number[]
    dayOptions: Weekday[]
}

export const Form: FC<FormProps> = (props) => {
    const { onSubmit, dayOptions, timeOptions } = props

    const initialValues = { name: '', day: dayOptions[0], time: timeOptions[0] }

    const [event, setEvent] = useState<Event>(initialValues)

    function handleChange(e: FormEvent<HTMLInputElement | HTMLSelectElement>) {
        const { name, value } = e.currentTarget
        setEvent({ ...event, [name]: value })
    }

    function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault()
        onSubmit(event)
        setEvent(initialValues)
    }

    return (
        <form onSubmit={handleSubmit} className="border-2 rounded-sm w-1/2 p-2">
            <h2>Add Event</h2>

            <div className="mb-6">
                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Name</label>
                <input type="text" name="name" id="name" className="input[type='text'] bg-slate-100 border-gray-300 rounded-lg p-2 w-full" onChange={handleChange} placeholder="Name your event" value={event.name} />
            </div>

            <div className="mb-6">
                <label htmlFor="day-select" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white ">Day</label>
                <select name="day" id="day-select" className="select  w-full" onInput={handleChange} value={event.day}>
                    {dayOptions.map((day) => (
                        <option value={day}>{day}</option>
                    ))}
                </select>
            </div>

            <div className="mb-6">
                <label htmlFor="day-select" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Time</label>
                <select name="time" id="day-select" className="select  w-full" onInput={handleChange} value={event.time}>
                    {timeOptions.map((time, i) => (
                        <option value={time}>{displayTime(time, i < 4)}</option>
                    ))}
                </select>
            </div>

            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Submit</button>
        </form>
    )
}