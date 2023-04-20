import React, { ChangeEvent, useState, useEffect } from 'react'
import {Modal, Button} from 'react-bootstrap';
import {Customer} from './Customer';
import axios from 'axios';

const baseURL = "https://localhost:7087/api/Customer";

interface SendIdProp 
{
  id: number,
}

const ViewModal: React.FC<any> = ({getCustomerId}) => {

  const [person, setPerson] = useState<Customer>();
  const [isShow, invokeModal] = useState<boolean>();
  const closeModal = () => invokeModal(false);
  const showModal = () => invokeModal(true);

  React.useEffect( () => {
    axios.get(`${baseURL}/${getCustomerId}`).then((response) => 
    {
        setPerson(response.data.data);
    });
  }, []);

  return (
    <div>
      <Modal.Header closeButton onClick={closeModal}>
        <Modal.Title>Customer Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>
        <div className="table-responsive ">
          <table className="table table-bordered table-striped">
            <thead className="table-dark">
                <tr>
                  <th scope="col">Id</th>
                  <th scope="col">Name</th>
                </tr>
            </thead>
            <tbody>
                <tr key={person?.id}>
                  <td>{person?.id}</td>
                  <td>{person?.name}</td>
                </tr>
            </tbody>
          </table>
        </div>
        <div className="table-responsive">
          <table className="table table-bordered table-striped ">
            <thead className="table-dark">
              <tr>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
              </tr>
            </thead>
            <tbody>
                <tr key={person?.id}>
                  <td>{person?.email}</td>
                  <td>{person?.phone}</td>
                </tr>
            </tbody>
          </table>
        </div>
        <div className="table-responsive">
          <table className="table table-bordered table-striped ">
            <thead className="table-dark">
              <tr>
                <th scope="col">Street</th>
                <th scope="col">Town</th>
              </tr>
            </thead>
            <tbody>
                <tr key={person?.id}>
                  <td>{person?.street}</td>
                  <td>{person?.town}</td>
                </tr>
            </tbody>
          </table>
        </div>
        <div className="table-responsive">
          <table className="table table-bordered table-striped ">
            <thead className="table-dark">
              <tr>
                <th scope="col">City</th>
                <th scope="col">Zipcode</th>
              </tr>
            </thead>
            <tbody>
                <tr key={person?.id}>
                  <td>{person?.city}</td>
                  <td>{person?.zipcode}</td>
                </tr>
            </tbody>
          </table>
        </div>
        </div>
      </Modal.Body>
      <Modal.Footer>            
        <button 
            type="button" 
            className="btn btn-danger"
            onClick = {closeModal}>
            Close
        </button>
      </Modal.Footer>
    </div>
  )
}
export default ViewModal;