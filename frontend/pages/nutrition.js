import { useState } from 'react';
import Chat from '../components/Chat';

export default function Nutrition() {
  const [calories, setCalories] = useState(0);
  const addMeal = () => {
    setCalories(calories + 500);
  };

  return (
    <div>
      <h1>Today's Nutrition</h1>
      <p>Calories consumed: {calories}</p>
      <button onClick={addMeal}>Add Meal (500 kcal)</button>
      <Chat />
    </div>
  );
}
