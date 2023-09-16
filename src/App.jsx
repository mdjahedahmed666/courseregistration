import { useState } from "react";
import "./App.css";
import { Courses } from "./components/Courses/Courses";
import { SideCards } from "./components/SideCards/SideCards";

function App() {
  const [cards, setCards] = useState([]);
  const [totalCredit, setTotalCredit] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [toast, setToast] = useState(0);
  const [remainingCredit, setRemainingCredit] = useState(20);
  
  
  const handleClick = (course) => {
    const addedName = cards.find((c)=> c.name ===course.name);
    if(!addedName){
      const newTotalCredit = totalCredit+course.credit;
      const newRemainingCredit = remainingCredit-course.credit;
      if(newTotalCredit<=20){
        if(newRemainingCredit>=0){
          const newCard = [...cards, course];
        setCards(newCard);
        setTotalCredit(newTotalCredit);  
        setTotalPrice(totalPrice+course.price);
        setRemainingCredit(newRemainingCredit);
        }else{
          setToast('Remaining Credit cant become less than 0');
        }
          const newCard = [...cards, course];
        setCards(newCard);
        setTotalCredit(newTotalCredit);  
        setTotalPrice(totalPrice+course.price);
        setRemainingCredit(newRemainingCredit);
        
      }else{
        setToast('You can not add more than 20 hr of credit');
      }
    }else{
setToast('This course has already been added');
    }
    
  }
  return (
    <div>
      <h1 className="text-3xl font-bold text-center p-8">Course Registration</h1>
      <div className="md:flex max-w-7xl mx-auto gap-4">
        <Courses handleClick={handleClick}/>
        <SideCards cards={cards} totalCredit={totalCredit} totalPrice={totalPrice} remainingCredit={remainingCredit}/>
      </div>
      {toast && <div className="toast font-black text-3xl text-blue-700 absolute top-10 left-[480px]">{toast}</div>}
    </div>
  );
}

export default App;
