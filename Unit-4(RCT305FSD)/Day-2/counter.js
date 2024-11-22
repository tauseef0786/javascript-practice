function App(){
    let [count , setCount] = React.useState(0) // 1

    return(
        <div>
            <button onClick={()=>setCount(++count)} >Inc</button>
            <h2>{count}</h2>
            <button onClick={()=>setCount((prev)=>prev-1)}>Dec</button>
        </div>
    )

}

let root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App/>)

// counter  inc   count    dec



// function add(){}


// add()