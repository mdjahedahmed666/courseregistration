import { useState } from "react";
import "./App.css";
import { Courses } from "./components/Courses/Courses";
import { SideCards } from "./components/SideCards/SideCards";

function App() {
  const [cards, setCards] = useState([]);
  const handleClick = (course) => {
    const newCard = [...cards, course];
    setCards(newCard);
  }
  return (
    <div>
      <h1 className="text-3xl font-bold text-center p-8">Course Registration</h1>
      <div className="md:flex max-w-7xl mx-auto">
        <Courses handleClick={handleClick}/>
        <SideCards cards={cards}/>
      </div>
    </div>
  );
}

export default App;
