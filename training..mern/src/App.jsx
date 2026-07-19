// import React from "react";
// const App=() => {
//   const name="Khushi";
//   let students={
//     id:101,
//     name:"Khushi",
//     roll:"123",
//     age:20,
//     city:"Udaipur",
//     course:"MERN",

//   };
// let array=[1,2,3,4,5,6,7,8,9,10];
// const sumTwoDigits=(a,b)=>{
//   let c;
//   return a+b;
// };

// return(
//   <div>
//     <h1>hello</h1>
//     {"Khushi"}
//     <br/>
//     {/*{2+5}*/}
//     {2-5}
//     <br/>
//     {students.course}
//     <br/>
//     {array[0]}
//     <br/>
//     {sumTwoDigits(10,20)}
//   </div>
  
// );
// };
// export default App;
import React from "react"
// import About from "./Component/About/About";
// import Footer from "./Component/Footer/Footer";
// const App=()=>{
//   let name="Khushi";
//   let age=20;
//   return(
//     <div>
//       <About fname={name} StudentAge={age}/>
//       <Footer/>
//     </div>
//   );
// };
// export default App;


import Navbar from "./Component/Navbar/Navbar";
import HeroSection from "./Component/Herosection/Herosection";
import Services from "./Component/Services/Services";
import Protfolio from "./Component/Protfolio/Protfolio";
import About from "./Component/About/About";
import Testimonials from "./Component/Social Proofs/Social Proofs";
import Blog from "./Component/Blog/Blog";
import Contact from"./Component/Contact/Contact";




function App() {
  return (
    <div id="top">
      <Navbar />
      <HeroSection />
      <Services />
      <Protfolio />
      <About />
      <Testimonials />
      <Blog/>
      <Contact/>
    </div>
  );
}

export default App;
