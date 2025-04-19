import { useState } from "react";


export const CountN = function(){
    let [count, setCount] = useState(0)
    let [toggle, setToggle] =useState(false)
    let [reset, setReset]=useState(0)
    // if (count<1){
    //     return count=0
    // }

    return(
        <>
        <div>
            <p> {count}</p>
            <button onClick={()=>setCount(count+1)}> INC</button>
            <button onClick={()=>setCount(reset)}> Reset</button>
            <button onClick={()=>setCount(count-1)}>DESC</button>
        </div>
        
        
        </>
    )
}





// import { useState } from "react"
// import & ReactMemoChild } from " /reactMemoChild"
// export const Parent = (=>1
// let [count, setCount] = useState useState(0)
// let [toggle , setToggle] = useState(false)
// return (
// ‹div>
// ‹button onClick={()=>setCount (count+1) }>
// Update Count
// </button>
// ‹ button onClick={(=>setToggle(!toggle)}>
// {toggle ? "It's True" : "It's False" }
// </button>
// <h2>Count in Parent : {count}</h2>
// ‹ReactMemoChild count={count} />
// </div>