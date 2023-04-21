import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import { Modal } from "react-bootstrap";
import ViewModal from './ViewModal';
import ConfirmDeleteModal from './ConfirmDeleteModal';
import {Customer} from './Customer';
import React, {useState, useContext} from "react";
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import {AppContext} from '../App';
import Loader from './Loader';

const baseURL = "https://localhost:7087/api/Customer";

const ViewAllCustomers: React.FC = () => {

    const [persons, setPersons] = useState<Customer[]>([]);
    const [isView, invokeViewModal] = useState(false);
    const [isShow, invokeDeleteModal] = useState(false);
    const [getCustomerId,setGetCustomerId] = useState<number>();
    const [deletionCustomerId, setDeletionCustomerId] = useState<number>(0);
    const { loading } = useContext(AppContext);
    const navigate = useNavigate();
    
    const getCustomers = () => {
        axios.get(baseURL).then((response) => 
        {
            setPersons(response.data.data);
        });
    }

    React.useEffect( () => {
        getCustomers();
      }, []);
    
    const handleTableRowClick = (custId:number) => 
    {
        setGetCustomerId(custId);
        invokeViewModal(true);
    }

    const handleUpdateClick = (sendId:any,sendName:any,sendEmail:any,sendPhone:any,
                            sendStreet:any,sendTown:any,sendCity:any, sendZipcode:any) => 
    { 
        navigate('../Customer/AddCustomer',
                {state:
                    {
                        type: "Update",
                        id: sendId, name: sendName, email: sendEmail, phone: sendPhone,
                        street: sendStreet, town: sendTown, city: sendCity, zipcode: sendZipcode
                    }
                });
    }

    const handleDeleteClick = (id:any) => {
        // setDeletionCustomerId(id);
        // invokeDeleteModal(true);
        axios.delete(`${baseURL}/${id}`)
        .then(() => 
        {
            getCustomers();
        });
    }
    return (
        <>
        <div className="my-container shadow">
            <h3>Customer List</h3>
            <div className="table-responsive card">
                {loading && <Loader />}
                <table className="table table-bordered table-striped ">
                    <thead className="table-dark">
                        <tr>
                            <th scope="col">S.No.</th>
                            <th scope="col">Name</th>
                            <th scope="col">Email</th>
                            <th scope="col">Phone</th>
                            <th scope="col">City</th>
                            <th scope="col">Update</th>
                            <th scope="col">Delete</th>
                        </tr>
                    </thead>
                 <tbody>
                    {persons.map((e,index)=>{
                        const{id, name, email, phone, street, town, city, zipcode} = e;
                    return <tr key={index}>
                            <td onClick= {() => handleTableRowClick(id)} className="view-info">{index+1}</td>
                            <td onClick= {() => handleTableRowClick(id)} className="view-info">{name}</td>
                            <td onClick= {() => handleTableRowClick(id)} className="view-info">{email}</td>
                            <td onClick= {() => handleTableRowClick(id)} className="view-info">{phone}</td>
                            <td onClick= {() => handleTableRowClick(id)} className="view-info">{city}</td>
                            <td>
                                <button 
                                    type="button" 
                                    className="btn update-btn btn-warning"
                                    onClick={() => handleUpdateClick(id,name,email,phone,street,town,city,zipcode)}>
                                    Update
                                </button>
                            </td>
                            <td>
                                <button 
                                    type="button" 
                                    className="btn btn-danger"
                                    disabled = {!((street === null || street.trim() === "") && 
                                                (town === null || town.trim() === "") &&
                                                (city === null || city.trim() === "") && 
                                                (zipcode === null || zipcode.trim() === ""))}
                                    onClick = {() => handleDeleteClick(id)}>Delete
                                </button>
                            </td>
                            </tr>
                        })}
                 </tbody>
                </table>
            </div>
            <div>
                <Modal show={isView} onHide={() => invokeViewModal(false)} contentClassName="modal-container">
                    <ViewModal getCustomerId={getCustomerId} /> 
                </Modal>
                <Modal show={isShow} onHide={() => invokeDeleteModal(false)} contentClassName="modal-container">
                    <ConfirmDeleteModal deletionCustomerId = {deletionCustomerId} /> 
                </Modal>
            </div>
        </div>
        </>
    );
}
export default ViewAllCustomers;
