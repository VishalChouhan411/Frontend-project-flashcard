/*in this file we are using the values from of flashcard and making the single flashcard theme
 that will be going to visible in MyFlashCard */
 import React from "react";
 import { useNavigate } from "react-router-dom";
 import DemoImg from "../../assets/VCoder.png";
 import { AiFillCloseCircle } from "react-icons/ai";
 
 const MySingleFlashCard = ({ flashcard, removeFlashcard }) => {
   const navigate = useNavigate();
 
   // The code is meant to remove a flashcard from the group.
   function closeCard() {
     removeFlashcard(flashcard.groupid); 
   }
 
   return (
     <div
       id="parentDiv"
       key={flashcard.groupid} 
       className="p-4 m-6 mx-auto flex flex-col space-y-3 items-center justify-center rounded-md text-black w-[23rem] h-[20rem] relative border-2 border-slate-500" 
     >
       <div className="absolute -top-9">
        
         {flashcard.groupimg ? (
           <img
             className="rounded-full w-16 h-16 object-cover aspect-square"
             src={flashcard.groupimg} 
             alt={flashcard.groupname} 
           />
         ) : (
           <img
             className="rounded-full w-16 h-16 object-cover aspect-square"
             src={DemoImg}
             alt={flashcard.groupname} 
           />
         )}
       </div>
 
       <button onClick={closeCard} id="deleteFlashcard">
         <AiFillCloseCircle className="w-7 h-6 text-black-500" />
       </button>
 
       <h2 className="font-bold text-lg">{flashcard.groupname}</h2>
       <p className="text-center font-medium text-sm text-slate-600 line-clamp-2">
         {flashcard.groupdescription}
       </p>
       <p className="font-medium text-sm text-slate-700">
       
         {flashcard.cards ? flashcard.cards.length : 0} Cards
       </p>
 
       <button
         onClick={() => navigate(`/flashcarddetails/${flashcard.groupid}`)}
         className="py-1 px-16 text-red-600 font-bold rounded-sm border-red-600 ring-2 ring-red-600"
       >
         View Cards
       </button>
     </div>
   );
 };
 
 export default MySingleFlashCard;