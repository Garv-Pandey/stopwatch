import { useState, useEffect, useRef } from "react";

export function Stopwatch() {

    const startTime = useRef(0)
    const [isActive, setIsActive] = useState(false)
    const [elapsedTime, setElapsedTime] = useState(0)
    const intervalRef = useRef(null)

    useEffect(() => {
        console.log("useffect")
        if (isActive === true) {
            console.log("interval")
            intervalRef.current = setInterval(() => {
                setElapsedTime(Date.now() - startTime.current)
            }, 10);
        }

        return () => {
            console.log("return")
            clearInterval(intervalRef.current)
        }
    }, [isActive])

    const start = () => {
        console.log("start")
        setIsActive(true)
        startTime.current = Date.now() - elapsedTime
    }

    const stop = () => {
        setIsActive(false)
        setElapsedTime(Date.now() - startTime.current)
    }

    const reset = () => {
        setIsActive(false)
        setElapsedTime(0)
    }


    function formattedTime() {
        return elapsedTime
    }

    return (
        <div>
            <h1>{formattedTime()}</h1>

            <div className="buttons" >
                <button onClick={start}>Start</button>
                <button onClick={stop}>Stop</button>
                <button onClick={reset}>Reset</button>
            </div>
        </div>
    )
}