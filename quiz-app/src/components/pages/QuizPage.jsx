import { useState } from "react";
import Header from "./Header";
import Banner from "./Banner";
import Categories from "./Categorie";
import LevelSelector from "./Level";
import QuestionNumber from "./QuestionNumber";

export default function Quizpage() {
  const [category, setCategory] = useState("");
  const [level, setLevel] = useState("easy");
  const [number, setNumber] = useState(10);

  const handleStart =() =>  {
    if(!category){
      alert("choisir une catégorie");
      return;
    }
      setstarted(true);
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <Header />
      <Banner onStart={handleStart} />
      <Categories setCategory={setCategory} />
      <LevelSelector level={level} setLevel={setLevel} />
      <QuestionNumber number={number} setNumber={setNumber} />
    </div>
  );
}