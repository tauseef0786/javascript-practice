// // Create parent and child divs
// const parentDiv = document.createElement("div");
// const childDiv = document.createElement("div");

// // Create buttons
// const btn1 = document.createElement("button");
// const btn2 = document.createElement("button");
// const btn3 = document.createElement("button");

// // Add text to buttons (optional)
// btn1.textContent = "Button 1";
// btn2.textContent = "Button 2";
// btn3.textContent = "Button 3";

// // Create select and options
// const select1 = document.createElement("select");
// const option1 = document.createElement("option");
// const option2 = document.createElement("option");

// // Add text to options
// option1.textContent = "Option 1";
// option2.textContent = "Option 2";

// // Append options to the select
// select1.append(option1, option2);

// // Append buttons and select to the child div
// childDiv.append(btn1, btn2, btn3, select1);

// // Append child div to the parent div
// parentDiv.append(childDiv);

// // Append parent div to the body
// document.body.append(parentDiv);


// replace all code into react framework

{/* <div>
    <div>

    </div>
</div> */}

// JS and XML


// Single page application

// components == functions

// function add(){
//        return 1+2
//}
// function

// navbar => This is navbar => h1

// content => this is content => h2

// footer  => this is footer => h3

// div{
//     font-style : sans-serif;
// }

function Nav(){
    return(
        <div id="nav">
            <h1>This is Navbar</h1>
            <button>Click Me</button>
        </div>
    )
}

function Content(){
    let arr = ["apple" ,"grapes","melon","mango","banana","Orange"]
    return (
        <>
    <h2>This is content</h2>
        <ul>
            {
                arr.map((ele,i)=>{
                    return(
                        <li key={i}>{ele}</li>
                    )
                })
            }
        </ul>
    </>
    )

}
function Footer(){
    return (
    <h3>This is footer</h3>
    )
}

// what is react fragment => 1hr => 3days => 7days => 14days => 28days => 4months



function App(){
    return (
    <>
    <Nav/>
    <Content/>
    <Footer/>
    </>
    )
    }

    // components
// App()  === <h1>Hello world!</h1>

const root = ReactDOM. createRoot (document.getElementById ('root') )
root.render(<App/>)

// getElementById

// querySelector


// [2 , 3 , 4 , 5]
//  0   1   2   3   4


// arr.splice()
// arr.shift()

// let obj = { b:2}


// Declarative vs Impritive prog.
// React is a library but if we include all the features => works like a framework
// React is a SPA (single page application)
// ReactDOM.createRoot(identify root).render(component)
// components vs function => return HTML  => single element => wrapping them in a parent tag => react fragment => <React.Fragment> , <>
// return <h1>  </h1> => JS intepolation
// CDN Links => react , reactDOM , babel


// JSX   => babel (Transpiles) => JS

// render lists => mapping different elements 

// any layout



let flag = true

let App = ()=>{
    return (<h1>{ flag ? "hello world" : "bye world" }</h1>)  // conditional rendering
}

root.render(App())