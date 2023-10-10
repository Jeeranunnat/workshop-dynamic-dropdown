import { useState } from 'react';
import './App.css';
import DropdownComponent from './components/DropdownComponent';
import FoodComponent from './components/FoodComponent';
import MenuData from './data/MenuData';
function App() {
  const [food, setFood] = useState(MenuData);
  const changeFoodData = (e) => {
    const category = e.target.value;
    if (category === 'เมนูทั้งหมด') setFood(MenuData);
    else {
      const result = MenuData.filter((element) => element.menu === category);
      setFood(result);
    }
  };
  return (
    <div className="containner">
      <DropdownComponent changeFoodData={changeFoodData} />
      <div className="content">
        {food.map((data, index) => {
          return <FoodComponent {...data} key={index} />;
        })}
      </div>
    </div>
  );
}

export default App;
