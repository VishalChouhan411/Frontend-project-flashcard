/*in this file we are creating MyFlashCard when user is on this page user will be able to see all the generated flashcards. if there is no flashcard then user will see option for redirect to create flashcard page*/

import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import FlashcardUI from "../components/Card_UI/FlashcardUI";
import { useDispatch } from "react-redux";
import {  RemoveCard } from "../app/feature/flashcardSlice";

const MyFlashCard = (props) => {
  const navigate = useNavigate(); 
  const flashcard = useSelector((state) => state.flashcard.flashcards); 
  const [showAll, setShowAll] = useState(false);
  const showLimit = !showAll ? 6 : flashcard.length; 
  const [flashcards, setFlashcards] = useState(flashcard); 
  const dispatch = useDispatch();
  
  const removeFlashcard = (id) => {
    dispatch(RemoveCard(id))
    setFlashcards(flashcards.filter((flashcard) => flashcard.card.groupid !== id)
     ); 
    
    console.log(id);
  };
  

  return (
    <section className="flex flex-col mt-16" >
      
      {flashcards.length > 0 ? (
        <div>
          <div className="flex flex-wrap" >
            {flashcards.slice(0, showLimit).map(({ card }, i) => (
              <FlashcardUI 
                key={i}
                flashcard={card}
                removeFlashcard={removeFlashcard}
              />
            ))}
          </div>
          <div className="flex justify-end mr-10" >
            <button
              className="w-16 mt-1 mb-5 font-semibold text-lg text-red-600 outline-none border-none active:outline-none active:border-none"
              onClick={() => setShowAll(!showAll)} 
            >
              See all
            </button>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center shadow-lg p-20" style={{ backgroundColor: props.mode === "white" ? "white" : "rgb(30 41 59)" }}>
          <h1 className="font-semibold text-xl text-blue-600" >
            No FlashCards avaliable,  
            <span
              className="text-red-500 cursor-pointer"
              onClick={() => navigate("/")}
            >
              --CLICK--
            </span>
             to Create New Flashcard
          </h1>
        </div>
      )}
    </section>
  );
};

export default MyFlashCard;