import { FC } from "react"
import { Event, Weekday } from "../types"
import { displayTime } from "../lib/display"

interface CalendarProps {
    days: Weekday[]
    times: string[]
    events: Event[]
}

export const CalendarGrid: FC<CalendarProps> = (props) => {
    const { days, times, events } = props
    return (
        <>
            <div className="grid grid-flow-col grid-cols-6 gap-4">

                {/* Headers */}
                <div className="m-4" />
                {days.map(day =>
                    <h3 className="text-2xl text-center font-bold mt-0 mb-6">{day}</h3>
                )}
            </div>

            {times.map(time =>
                <div className="grid grid-flow-col grid-cols-6 divide-x divide-y">

                    {/* Row ID */}
                    <p className="p-3 m-2 text-center">{displayTime(+time)}</p>

                    {days.map(day =>
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
            )
            }
        </>
    )
}
