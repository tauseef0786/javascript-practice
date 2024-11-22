 // useState

// useState takes an original/initial state , returns two things in an array
// [original state value , function which can update this value]


let Navbar = ()=>{
    function ToggleLogIn(title){
        setIsLogged((prev)=> prev ? false : true)
    }
    return (
        <div>
            <button>Home</button>
            <button>About</button>
            <button onClick={()=>ToggleLogIn("dholu")}>LogIn</button> 
            <button>Theme</button>
        </div>
    )
}

// <Card ele={ele} isLogged={true} />

let Card = ({ele })=>{
    return (
        <>
        
            <div key={ele.id}>
                <img src={ele.img} />
                <p><b>Name : </b> {ele.name} </p>
                <p><b>Email : </b> {ele.email} </p>
                <h3>{ele.department}</h3>
            </div>

        </>
      
    )
}


let Container = ({isLogged})=>{
    let arr = [
        {
            id : 1,
            name : "dholu" , 
            email : "dholu@gmail.com" , 
            department : "HR" , 
            img : "https://dummyimage.com/150x150/000/fff"
        } , 
        {
            id : 2,
            name : "bholu" , 
            email : "bholu@gmail.com" , 
            department : "Finance" , 
            img : "https://dummyimage.com/150x150/000/fff"

        } , 
        {
            id : 3,
            name : "bheem" , 
            email : "bheem@gmail.com" , 
            department : "Operations" , 
            img : "https://dummyimage.com/150x150/000/fff"

        } , 
        {
            id : 4,
            name : "jaggu" , 
            email : "jaggu@gmail.com" , 
            department : "IT" , 
            img : "https://dummyimage.com/150x150/000/fff"

        } , 
        {
            id : 5,
            name : "kaaliya" , 
            email : "kaaliya@gmail.com" , 
            department : "Logistics" , 
            img : "https://dummyimage.com/150x150/000/fff"

        } , 
        {
            id : 6,
            name : "indumati" , 
            email : "indumati@gmail.com" , 
            department : "Legal" , 
            img : "https://dummyimage.com/150x150/000/fff"

        }
    ]

    return (
        <div className={isLogged ? "container-light" : "container-dark"}>
            {
                arr.map((ele , i)=>{
                    return (
                        <div key={i} className="cards">
                            {
                            
                                <Card ele={ele} />

                            }
                            
                        </div>
                    )
                })
              
            }
        </div>
    )

}

let App = ()=>{
    let [isLogged , setIsLogged ] = React.useState(false)
    return (
        <>
         <button className={isLogged ? "dark" : "light"} onClick={()=>setIsLogged(!isLogged)}>
            Toggle Login
         </button>
        {
            isLogged ? 
            <>
            <Navbar isLogged={isLogged}  />
            <Container isLogged={isLogged}/>
            </>
            :
            <h2>Not Logged in !!</h2>
        }
          
        </>
        
    )
}

let root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App/>)






// App(isLogged , isAdmin)    // <App isLogged={isLogged} />

// App( {isLogged , isAdmin} )


// State =>  solid , liquid , gas

// Ice Cube  =>   water    =>   vapour


// component => state

// stateGlobal

// function comp1(){
   //  state1

   // console.log(state2)
// }


// function comp2(){
  // state2
// }


// Prop Drilling

// CDN links
// layout
// dom vs vdom / reactDOM
// React.useState(initialState / initialValue) => [original state , updater function ]
// updaterFunction(value for next state)
// updaterFunction((ele)=>)
// conditional rendering
// counters
// toggle Theme    