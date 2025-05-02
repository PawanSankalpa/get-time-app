import React, {useState} from "react";

function App(){

    const [time, realTime] =useState("00:00:00")

    function getTime() {
        realTime(new Date().toLocaleTimeString());
    }

    function startTheTimer() {
        setInterval(getTime, 1000)
    }
    return(
        <div className="container">
            <h1>{time}</h1>
            <button onClick={startTheTimer}>Click Here To Get Time</button>
        </div>
    );
}

export default App;