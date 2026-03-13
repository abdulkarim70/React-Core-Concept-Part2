import { useState } from "react"

export default function Batsman(){
    const [runs, setRuns] =useState(0)
    const [ sixes, setsixes]=useState(0)
      const handleSingle=()=>{
let updatedRuns=runs+1;
setRuns(updatedRuns)
    }

    const handleFour=()=>{
      let  updatedRuns=runs+4
        setRuns(updatedRuns)
    }
const handlerSix=()=>{
    
const newRuns=runs+6;
setsixes(newRuns)
const updatedSixes=sixes+1
setRuns(newRuns)
}

    return(
        <div>
            <h3>Bangla: Batsman</h3>
            <p>six:{sixes}</p>
        <h1>Score:{runs}</h1>
        {
            runs>50 && <p>Your Score 50+</p>
        }
        <button onClick={handleSingle}>Singles</button>
        <button onClick={handleFour}>Four</button>
        <button onClick={handlerSix}>Six</button>
        </div>
    )
}