import React, { ChangeEvent, useState, useEffect } from 'react'
import {Modal, Button} from 'react-bootstrap';
import { Step, Stepper } from "react-form-stepper";

interface ItemProp 
{
  propItem: (itemName: string, itemDescription: string, itemPrice: number, itemQuantity: number) => void;
}

const ModalDialog: React.FC<ItemProp> = ({propItem}) => {

  const [initItemName, setitemName] = useState<string>("");
  const [initItemDescription, setitemDescription] = useState<string>("");
  const [initItemPrice, setitemPrice] = useState<number>(Number);
  const [initItemQuantity, setitemQuantity] = useState<number>(Number);

  const [step, setNewStep] = useState(1);
  const nextStep = () => { setNewStep(step + 1); };
  const prevStep = () => { setNewStep(step - 1); };

  const [isShow, invokeModal] = useState<boolean>();
  const closeModal = () => invokeModal(false);
  const showModal = () => invokeModal(true);

  function AddItem()
  {
    propItem(initItemName,initItemDescription,initItemPrice,initItemQuantity);
    console.log(propItem);
  }

  return (
    <div>
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
                    value={initItemName} 
                    onChange={(e) => setitemName(e.target.value)}
                  />
                  </div>
                  <div>
                  <label>Enter Item Description:</label>
                  <input
                    className="input-item-details"
                    type="textarea"
                    placeholder="New Item Description"
                    value={initItemDescription} 
                    onChange={(e) => setitemDescription(e.target.value)}
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
                    value={initItemPrice} 
                    onChange={(e) => setitemPrice(e.target.valueAsNumber)}
                  />
                  </div>
                  <div>
                  <label>Enter Item Quantity:</label>
                  <input
                    className="input-item-details"
                    type="number"
                    placeholder="New Item Quantity"
                    value={initItemQuantity} 
                    onChange={(e) => setitemQuantity(e.target.valueAsNumber)}
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
              </div>
  )
}
export default ModalDialog;