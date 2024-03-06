import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


//trying to render directly an object and not a function 
// const ReactElement={
//   type:"a",
//   props:{
//       href:"https://google.com",
//       target: "_blank"
//   },
//   children :"Click me to visit google"
// }

//1st function
function MyApp(){
  return(
    <div>
      <h1>Custome App !</h1>
    </div>
  )
}
//2nd element
const anotherElement=(
  <a href="https://google.com" target="_blank">Visit google</a>
)

//3rd element

const ReactElement=React.createElement(
  "a",
  {href:"https://google.com", target:"_blank"},
  "Click me to visit google"
)
// ReactElement rendering calling without <React.StrictMode>

ReactDOM.createRoot(document.getElementById('root')).render(

 <React.StrictMode>   
    <App />
</React.StrictMode>

  
)
