let {useState} = React

// let Counter = ()=>{

//     console.log("counter re-rendered")
//     let [count , setCount] = useState(0)

//     function updatesCount(i){
//         setCount(count+i)
//         setCount(count+i)
//         setCount(count+i)
        
//     }
//     //


//     return (
//         <>
//           <button onClick={function (){updatesCount(-1)}}>Dec</button>
//           <h2>{count}</h2>
//           <button onClick={()=>updatesCount(1)}>Inc</button>
//         </>
//     )
// }

// let VDOMtest = ()=>{
//     console.log("testing VDOM ")
//     return (
//         <h3>Testing if VDOM actually works !!</h3>
//     )
// }

// 

let Register = ()=>{

    let [name , setName] = useState("")
    let [email , setEmail] = useState("")
    let [password , setPassword] = useState("")
    let [phone , setPhone] = useState("+91-")  // "+91"
    let [age , setAge] = useState(0)
    let [demoDB , setDemoDB] = useState([])

    function HandleClick(){
        console.log(name , email , password , phone)
        let obj = {
            id : Math.random().toString() ,
            name ,
            email ,
            password ,
            phone
        }
        setDemoDB((prev)=>[...prev,obj])
        // prev = []
        // return [...prev , obj]
        // prev = [{}]
        // return [...prev , obj]
        // prev = [{} , {}]
        setName("")
        setEmail("")
        setPassword("")
        setPhone("")
    }

    return (
        <>
        <div>
            <input value={name}
                   placeholder="Name"
                   onChange={(e)=>setName(e.target.value)}  />
            <input value={email}
                   placeholder="email"
                   onChange={(e)=>setEmail(e.target.value)} />
            <input value={password}
                   placeholder="password"
                   onChange={(e)=>setPassword(e.target.value)} />
            <input value={phone}
                   placeholder="phone"
                   onChange={(e)=>setPhone(e.target.value)} />
            <button onClick={HandleClick}>Register !!</button>
         
        </div>

        <DisplayData demoDB={demoDB} setDemoDB={setDemoDB} />

        </>
    )
}

let DisplayData = ({demoDB , setDemoDB})=>{
    //    console.log(demoDB)

    function handleDelete(id){
       let newData = demoDB.filter((ele)=>ele.id !== id)
       setDemoDB(newData)
    }
    return (
        <div className="container">
  {demoDB.map((ele) => (
    <div className="card" key={ele.id}>
      <p><b>Name:</b> {ele.name}</p>
      <p><b>Email:</b> {ele.email}</p>
      <p><b>Phone:</b> {ele.phone}</p>
      <button onClick={() => handleDelete(ele.id)}>Delete</button>
    </div>
  ))}
</div>

    )
}

let App = ()=>{
    // useState => number & booleans
    // let [toggle , setToggle] = useState(true) // conditional rendering , conditional styling , switch on off , flag
    // let [num , setNum] = useState(0)  // counter , pagination , lists , flag
    // let [str , setStr] = useState("") // input , search , writing text
    // let [arr , setArr] = useState([]) // data storage , lists
    // let [obj , setObj] = useState({}) // multiple datatypes , key value pairs

    return (
        <>
          <Register/>
        </>
    )
}

let root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App/>)


// localStorage


// function userData(){
//     let a = 1
//     let b = 2
//     let c = [1,2,3,4]

//     return {
//       a , b ,c
//     }
// }


// props


// Optimizes the code


// Recap

// DOM  vs VDOM
// components and props => prop drilling
// useState => hold any possible datatype in JS
// components => state => if it's updated it won't update other components up until prop drilling isn't happening
// CRUD

//hioio