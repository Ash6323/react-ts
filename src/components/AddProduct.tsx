import React, { ChangeEvent, useState, useEffect } from 'react'
import { Step, Stepper } from "react-form-stepper";
import {Button} from 'react-bootstrap';

interface ItemProp 
{
  propItem: (itemName: string, itemDescription: string, itemPrice: number, itemQuantity: number) => void;
}

const AddProducts: React.FC<ItemProp> = ({propItem}) => {

  const [initItemName, setitemName] = useState<string>("");
  const [initItemDescription, setitemDescription] = useState<string>("");
  const [initItemPrice, setitemPrice] = useState<number>(Number);
  const [initItemQuantity, setitemQuantity] = useState<number>(Number);

  const [step, setNewStep] = useState(1);
  const nextStep = () => { setNewStep(step + 1); };
  const prevStep = () => { setNewStep(step - 1); };

  function AddItem()
  {
    propItem(initItemName, initItemDescription, initItemPrice, initItemQuantity);
    console.log(propItem);
  }

  return (
    <div className="container shadow">
      <div className="stepper-container">
        <Stepper className="row my-stepper"
                  steps={[{ label: "Item Details" },{ label: "Item Price & Quantity" }]}
                  activeStep={step}/>
        </div>
        {step === 1 && (
        <> 
          <div className="input-row">
            <label>Enter Item Name:</label>
            <input
              className="input-item-details"
              type="text"
              placeholder="New Item Name"
              value={initItemName} 
              onChange={(e) => setitemName(e.target.value)}
            />
          </div>
          <div className="input-row">
            <label>Enter Item Description:</label>
            <input
              className="input-item-details"
              type="textarea"
              placeholder="New Item Description"
              value={initItemDescription} 
              onChange={(e) => setitemDescription(e.target.value)}
              />
          </div>
          <div className="input-row">
            <Button className="button-spacing" 
              variant="dark" 
              onClick={nextStep}
              disabled={initItemName.length >= 30 || initItemDescription.length <= 0 || initItemName.length <= 0}>
              Next
            </Button>
          </div>
        </>
        )}
        {step === 2 && (
        <>
          <div className="input-row">
            <label>Enter Item Price:</label>
            <input
              className="input-item-details"
              type="number"
              placeholder="New Item Price"
              value={initItemPrice} 
              onChange={(e) => setitemPrice(e.target.valueAsNumber)}
            />
          </div>
          <div className="input-row">
            <label>Enter Item Quantity:</label>
            <input
              className="input-item-details"
              type="number"
              placeholder="New Item Quantity"
              value={initItemQuantity} 
              onChange={(e) => setitemQuantity(e.target.valueAsNumber)}
            />
          </div>
          <div className="input-row">
            <Button className="button-spacing" variant="danger" onClick={prevStep}>Back</Button>
            <Button className="button-spacing" variant="dark" 
                    onClick={AddItem}
                    disabled={initItemPrice == 0 || initItemQuantity == 0 || initItemPrice == null || initItemQuantity == null}>
                    Submit
            </Button>
          </div>
        </>
        )}
    </div> 
  );
}
export default AddProducts;
  