// parent component
import React from "react";
import Albums from "./components/Album/main.albums";
import MainLayouts from "./components/Layouts/main.layouts";
import {BrowserRouter as Router, Routes, Route } from "react-router-dom"

// FUNCTION COMPONENT
// function testing(){
//   return <h1>TESTING</h1>
// }

// function App() {
//   return (
//     <React.Fragment>
//       {testing()}
//       </React.Fragment>
//   );
// }

// CLASS COMPONENT
// class App extends React.Component{

//   componentWillMount(){
//     console.log('will mounting')
//   }

// componentDidMount(){
//   console.log('did mounting')
// }

//   render(){
//     return (
//       <h1>TESTING</h1>
//     )
//   }
// }

const App = () => {
  return (
    <>
    <MainLayouts>
      <Router>
        <Routes>
          <Route path="/" element={<h1>HOMEPAGE</h1>} />
          <Route path="/albums" element={<Albums />} />
          <Route path="/posts" element={<h1>POSTING</h1>} />
          <Route path="*" element={<h1 className="text-center text-danger">404 NOT FOUND</h1>} />
        </Routes>
      </Router>
    </MainLayouts>
    </>
  )
}

export default App;
