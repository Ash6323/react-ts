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
    itemPrice: string;
    itemQuantity: string;
  }

  const [initItemName, setitemName] = useState<string>("Apple");
  const [initItemDescription, setitemDescription] =
    useState<string>("Apple Description");
  const [initItemPrice, setitemPrice] = useState<string>("25");
  const [initItemQuantity, setitemQuantity] = useState<string>("3");

  // const initialItem:Item = {
  //   id: Date.now(),
  //   itemName: itemName,
  //   itemDescription: itemDescription,
  //   itemPrice: itemPrice,
  //   itemQuantity: itemQuantity
  // }
  const [initialItem, setInitialItem] = useState<Item>({
    id: Date.now(),
    itemName: initItemName,
    itemDescription: initItemDescription,
    itemPrice: initItemPrice,
    itemQuantity: initItemQuantity,
  });

  const [step, setNewStep] = useState(1);
  const nextStep = () => { setNewStep(step + 1); };
  const prevStep = () => { setNewStep(step - 1); };

  const [itemList, setItemList] = useState<Item[]>([initialItem]);

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
    setitemPrice(e.target.value);
  };
  const handleChange_ItemQuantity = (e: ChangeEvent<HTMLInputElement>) => {
    setitemQuantity(e.target.value);
  };

  function AddItem() {
    const newItem: Item = {
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
                placeholder="Search for an Item"
                className="form-control input-item"
                id="item-search-input"
              ></input>
              <datalist id="items-list">
                <option value="Item1"></option>
                <option value="Item2"></option>
                <option value="Item3"></option>
                <option value="Item4"></option>
                <option value="Item5"></option>
              </datalist>
            </div>
            <Button
              className="add-item-btn"
              variant="success"
              onClick={showModal}>
              Add Item
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
                  <input
                    className="input-item-details"
                    type="text"
                    placeholder="New Item Name"
                    onChange={handleChange_ItemName}
                  />
                  <input
                    className="input-item-details"
                    type="text"
                    placeholder="New Item Description"
                    onChange={handleChange_ItemDescription}
                  />
                </Modal.Body>
                <Modal.Footer>            
                  <Button variant="danger" onClick={closeModal}>
                    Close
                  </Button>
                  <Button variant="dark" onClick={nextStep}>
                    Next
                  </Button>
                </Modal.Footer>
                </>
              )}
              {step === 2 && (
              <>
                <Modal.Body>
                  <input
                    className="input-item-details"
                    type="text"
                    placeholder="New Item Price"
                    onChange={handleChange_ItemPrice}
                  />
                  <input
                    className="input-item-details"
                    type="text"
                    placeholder="New Item Quantity"
                    onChange={handleChange_ItemQuantity}
                  />
                </Modal.Body>
                <Modal.Footer>            
                  <Button variant="danger" onClick={prevStep}>
                    Back
                  </Button>
                  <Button variant="dark" onClick={AddItem}>     
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
                  {/* <th scope="col">#</th> */}
                  <th scope="col">Item Name</th>
                  <th scope="col">Description</th>
                  <th scope="col">Price</th>
                  <th scope="col">Quantity</th>
                </tr>
              </thead>
              <tbody>
                {itemList.map((item) => (
                  <tr key={item.id}>
                    {/* <th scope="row">{item.id}</th> */}
                    <td>{item.itemName}</td>
                    <td>{item.itemDescription}</td>
                    <td>{item.itemPrice}</td>
                    <td>{item.itemQuantity}</td>
                  </tr>
                ))}

                {/* <tr>
                  <th scope="row">1</th>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Larry the Bird</td>
                  <td>@twitter</td>
                </tr> */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
