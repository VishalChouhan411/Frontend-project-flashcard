import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateFlashCard from "./pages/CreateFlashCard";
import MyFlashCard from "./pages/MyFlashCard";
import FlashCardDetails from "./pages/FlashCardDetails";
import Navbar from "./components/Navbar";
import Header from "./components/Header";



function App() {
  const [mode, setMode]=useState('white') 

  const toggleMode=()=>{   //this is to change toggle the background color
    if (mode ==='white'){
      setMode('bg-slate-800')
      document.body.style.backgroundColor = "rgb(15 23 42)"
    } else{
      setMode('white')
      document.body.style.backgroundColor = "white"
    }
  }

  return (
    
    <BrowserRouter >
      <div className={`w-full min-h-screen`} >
        <Header mode={mode} toggleMode={toggleMode} />
        <div className="px-5 xl:px-32 container mt-10">
          <Navbar mode={mode} />
          <Routes>
            <Route path="/" element={<CreateFlashCard mode={mode} />} />{/*giving defult path to createflashcard  */}
            <Route path="/myflashcard" element={<MyFlashCard mode={mode}/>}  />
            <Route path="/flashcarddetails/:groupId" element={<FlashCardDetails  mode={mode}/>} />
          </Routes>
        </div>
        </div>
    </BrowserRouter>
  );
}

export default App;
