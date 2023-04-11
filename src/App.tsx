import React, { ChangeEvent, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from "./components/Navbar"

function App() {

  const initialGroceryList = ["Eggs", "Crackers", "Almond", "Flour" ,"Black Beans", "Cucumber"];
  const [groceryList, setGroceryList] = useState(["Eggs", "Crackers", "Almond", "Flour" ,"Black Beans", "Cucumber"]);
  const [count, setCount] = useState(0);
  const [newGrocery, setnewGrocery] = useState("");

  const renderList = groceryList.map
        ((groceryItem, index) => 
          <div className="ag-courses_item">
            <div className="ag-courses-item_link">
              <div className="ag-courses-item_bg"></div>
              <div className="row-cols-3 ag-courses-item_title" key={index}>
                <div className="col flex-basis-60">{groceryItem}</div>
                <button className="col flex-basis-20 delete-button" onClick= {() => deleteByValue(groceryItem)}>Delete</button>
                <div className="col flex-basis-20"></div>
              </div>
            </div>
          </div>
          /* <div className="List-display" key={index}>{groceryItem}
            <button className="delete-button" onClick= {() => deleteByValue(groceryItem)}>Delete</button>
            </div> */  
        );

  function SortGroceryList() 
  {
    setCount(count + 1);
    if(count%2!=0)
    {
      groceryList.sort();
      setGroceryList([...groceryList]);
    }
    else
    {
      groceryList.reverse();
      setGroceryList([...groceryList]);
    }
  }
  function ResetGroceryList() 
  {
    setCount(0);
    setGroceryList(initialGroceryList);
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => 
  {
    setnewGrocery(e.target.value);     //Store the input value to local state
  };

  function AddGrocery()
  {
    groceryList.push(newGrocery);
    setGroceryList([...groceryList]);
  }

  const deleteByValue = (groceryItem:string) => 
  {
    setGroceryList(oldValues => 
    {
      return oldValues.filter(grocery => grocery !== groceryItem)
    })
  }

  const getValue=(v:Function)=>{
  console.log(v)
  }
  return (
    <div className="App">
      
      <Navbar />
      {renderList}
      <button className="toggle-order-btn" onClick={SortGroceryList}>Toggle Order</button>
      <button className="reset-list-btn" onClick={ResetGroceryList}>Reset List</button>
      <div className="add-grocery-div">
        <input className="input-grocery" type="text" placeholder="Add New Grocery Item" onChange={handleChange} value={newGrocery}/>
        <button className="add-grocery-btn" onClick={AddGrocery}>Add Grocery</button>
      </div>
      
      {/* <div className="ag-courses_item">
        <div className="ag-courses-item_link">
          <div className="ag-courses-item_bg"></div>
          <div className="ag-courses-item_title">
            Hello
          </div>
        </div>
      </div> */}


    </div>
  );
}

export default App;
