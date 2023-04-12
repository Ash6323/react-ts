import React, { ChangeEvent, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
// import ModalDialog from './components/ModalDialog'
import { Modal, Button } from "react-bootstrap";
import { Step, Stepper } from "react-form-stepper";

function App() {
  interface Item {
    id: number;
    itemName: string;
    itemDescription: string;
    itemPrice: number;
    itemQuantity: number;
  }

  const [initItemName, setitemName] = useState<string>("");
  const [initItemDescription, setitemDescription] = useState<string>("");
  const [initItemPrice, setitemPrice] = useState<number>(Number);
  const [initItemQuantity, setitemQuantity] = useState<number>(Number);

  const [initialItem, setInitialItem] = useState<Item>
  ({
    id: Date.now(),
    itemName: initItemName,
    itemDescription: initItemDescription,
    itemPrice: initItemPrice,
    itemQuantity: initItemQuantity,
  });

  const [itemList, setItemList] = useState<Item[]>([]);

  const [step, setNewStep] = useState(1);
  const nextStep = () => { setNewStep(step + 1); };
  const prevStep = () => { setNewStep(step - 1); };

  const [isShow, invokeModal] = React.useState(false);
  const closeModal = () => invokeModal(false);
  const showModal = () => invokeModal(true);

  const handleChange_ItemName = (e: ChangeEvent<HTMLInputElement>) => {
    setitemName(e.target.value);
  };
  const handleChange_ItemDescription = (e: ChangeEvent<HTMLInputElement>) => {
    setitemDescription(e.target.value);
  };
  const handleChange_ItemPrice = (e: ChangeEvent<HTMLInputElement>) => {
    setitemPrice(e.target.valueAsNumber);
  };
  const handleChange_ItemQuantity = (e: ChangeEvent<HTMLInputElement>) => {
    setitemQuantity(e.target.valueAsNumber);
  };

  const [count, setCount] = useState(0);
  function SortItemList() 
  {
    setCount(count + 1);
    if(count%2 == 1)
    {
      itemList.sort((a, b) => a.itemName.localeCompare(b.itemName));
      setItemList([...itemList]);
    }
    else if(count%2 == 0)
    {
      itemList.sort((a, b) => b.itemName.localeCompare(a.itemName));
      setItemList([...itemList]);
    }
  }

  const [search, setSearch] = useState('');
  const filteredItems = {
    list: itemList.filter((item) =>
      item.itemName.toLowerCase().includes(search.toLowerCase())
    ),
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  // const [isDisabled, setDisabled] = useState(false);
  // const ItemNameValidation = () => {
  //   if (initItemName.length >= 30 || initItemDescription.length <= 100 || initItemName.length <= 0)
  //     setDisabled(true);
  // }

  function AddItem() 
  {
    const newItem: Item = 
    {
      id: Date.now(),
      itemName: initItemName,
      itemDescription: initItemDescription,
      itemPrice: initItemPrice,
      itemQuantity: initItemQuantity,
    };
    setItemList([...itemList, newItem]);
  }
  const RemoveItem = (id: number) => {
    const oldValues = itemList.filter((item) => item.id !== id);
    setItemList(oldValues);
  };

  return (
    <div className="App">
      <Navbar />
      <div className="wrapper">
        <div className="container shadow">
          <div className="d-flex justify-content-center align-items-center search-add-item-div">
            <div className="col flex-basis-70">
              {/* <span className="input-group-text" id="basic-addon1"><i className="fa fa-search"></i></span> */}
              <input
                list="items-list"
                type="text"
                onChange={handleSearch}
                placeholder="Search for an Item"
                className="form-control input-item"
                id="item-search-input"
              ></input>
              <datalist id="items-list">
                {itemList.map((item) => (
                  <div key={item.id}>
                    <option value={item.itemName}></option>
                  </div>
                  ))}
              </datalist>
            </div>
            <Button
              className="add-item-btn"
              variant="success"
              onClick={showModal}> 
              Add Item
            </Button>
            <Button
              className="sort-items-btn"
              variant="success"
              onClick={SortItemList}>
              Sort Items
            </Button>
            <Modal show={isShow}>
              <Modal.Header closeButton onClick={closeModal}>
              <Modal.Title>Enter New Item Details</Modal.Title>
                  <Stepper className="my-stepper"
                    steps={[{ label: "Item Details" },{ label: "Item Billing" }]}
                    activeStep={step}
                  />
              </Modal.Header>
              
              {step === 1 && (
                <> 
                <Modal.Body>
                  <div>
                  <label>Enter Item Name:</label>
                  <input
                    className="input-item-details"
                    type="text"
                    placeholder="New Item Name"
                    onChange={handleChange_ItemName}
                  />
                  </div>
                  <div>
                  <label>Enter Item Description:</label>
                  <input
                    className="input-item-details"
                    type="textarea"
                    placeholder="New Item Description"
                    onChange={handleChange_ItemDescription}
                  />
                  </div>
                </Modal.Body>
                <Modal.Footer>            
                  <Button variant="danger" onClick={closeModal}>
                    Close
                  </Button>
                  <Button variant="dark" 
                          onClick={nextStep}
                          disabled={initItemName.length >= 30 || initItemDescription.length <= 100 || initItemName.length <= 0}>
                    Next
                  </Button>
                </Modal.Footer>
                </>
              )}
              {step === 2 && (
              <>
                <Modal.Body>
                  <div>
                  <label>Enter Item Price:</label>
                  <input
                    className="input-item-details"
                    type="number"
                    placeholder="New Item Price"
                    onChange={handleChange_ItemPrice}
                  />
                  </div>
                  <div>
                  <label>Enter Item Quantity:</label>
                  <input
                    className="input-item-details"
                    type="number"
                    placeholder="New Item Quantity"
                    onChange={handleChange_ItemQuantity}
                  />
                  </div>
                </Modal.Body>
                <Modal.Footer>            
                  <Button variant="danger" onClick={prevStep}>
                    Back
                  </Button>
                  <Button variant="dark" 
                          onClick={AddItem}
                          disabled={initItemPrice == 0 || initItemQuantity == 0}>
                    Add Item
                  </Button>
                </Modal.Footer>
              </>
              )}
            </Modal>
          </div>

          <hr></hr>
          <div className="table-responsive card">
            <table className="table table-bordered table-striped ">
              <thead className="table-dark">
                <tr>
                  <th scope="col">Item Name</th>
                  <th scope="col">Description</th>
                  <th scope="col">Price</th>
                  <th scope="col">Quantity</th>
                </tr>
              </thead>
              <tbody>
                {filteredItems.list.map((item) => (
                  <tr key={item.id}>
                    <td>{item.itemName}</td>
                    <td>{item.itemDescription}</td>
                    <td>{item.itemPrice}</td>
                    <td>{item.itemQuantity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
