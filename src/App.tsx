import { Routes, Route } from "react-router-dom";
import React, { useState } from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import AddProducts from "./components/AddProduct";
import ViewProducts from "./components/ViewProducts";


function App() {

  interface Item {
    id: number;
    item_Name: string;
    item_Description: string;
    item_Price: number;
    item_Quantity: number;
  }
  const [itemList, setItemList] = useState<Item[]>([]);
  
  const AddItem = (itemName: string, itemDescription: string, itemPrice: number, itemQuantity: number) =>
  {
    const newItem: Item = 
    {
      id: Date.now(),
      item_Name: itemName,
      item_Description: itemDescription,
      item_Price: itemPrice,
      item_Quantity: itemQuantity,
    };
    setItemList([...itemList, newItem]);
    console.log("App.tsx",itemList);
  }


  return (
    <div className="App">
      <div className="container-fluid">
        <Navbar />
        <div className="row">
          <div className="col-md-2">
            <Sidebar />
          </div>       
          <div className="col-md-10">
            <Routes>
              <Route path="Add-Product" element= { <AddProducts propItem={AddItem}/> }/>
              <Route path="View-Products" element={ <ViewProducts productsList = {itemList}/> } />
            </Routes>
          </div>
        </div>
      </div>     
    </div>
  );
}

export default App;
