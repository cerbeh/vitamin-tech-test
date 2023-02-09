
export type Weekday = 'Monday' | 'Tuesday' | 'Wednesday' | 'Thursday' | 'Friday'

export interface Event {
    name: string
    day: Weekday
    time: number
}