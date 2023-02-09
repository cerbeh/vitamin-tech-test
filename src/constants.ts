import { Weekday, Event } from "./types"

export const daysOfWeek: Weekday[] = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday'
]

export const timeSlots = [8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6]

export const seed: Event[] = [
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