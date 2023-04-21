import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import React, {useState, useEffect, useContext} from "react";
import { useNavigate } from "react-router-dom";
import {Customer} from './Customer';
import axios from 'axios';
import {AppContext} from '../App';
import {useLocation} from 'react-router-dom';
import Loader from './Loader';

const baseURL = "https://localhost:7087/api/Customer";

const AddCustomer = () => {
    const navigate = useNavigate();
    const [custId, setCustId] = useState<number>(0);
    const [custName, setCustName] = useState<string>("");
    const [custEmail, setCustEmail] = useState<string>("");
    const [custPhone, setCustPhone] = useState<string>("");
    const [custStreet, setCustStreet] = useState<string>("");
    const [custTown, setCustTown] = useState<string>("");
    const [custCity, setCustCity] = useState<string>("");
    const [custZipcode, setCustZipcode] = useState<string>("");
    var [formHeading, setFormHeading] = useState<string>("Add Customer Details");
    var [submitButtonValue, setSubmitButtonValue] = useState<string>("Submit");
    const [data,setData]=useState({id:0,name:"",email:"",phone:"",street:"",town:"",city:"",zipcode:""});
    const location = useLocation();
    const { loading } = useContext(AppContext);

    const newCustomer: Customer = {
        id: custId,
        name: custName,
        email: custEmail,
        phone: custPhone,
        street: custStreet,
        town: custTown,
        city: custCity,
        zipcode: custZipcode,
    }

    const handleNameChange = (e:any) => 
    {
        setCustName(e.target.value );
    };
    const handleEmailChange = (e:any) => 
    {
        setCustEmail(e.target.value );
    };
    const handlePhoneChange = (e:any) => 
    {
        setCustPhone(e.target.value );
    };
    const handleStreetChange = (e:any) => 
    {
        setCustStreet(e.target.value );
    };
    const handleTownChange = (e:any) => 
    {
        setCustTown(e.target.value );
    };
    const handleCityChange = (e:any) => 
    {
        setCustCity(e.target.value );
    };
    const handleZipcodeChange = (e:any) => 
    {
        setCustZipcode(e.target.value );
    };

    const setDefaultValues = () =>
    {
        setCustId(0);
        setCustName("");
        setCustEmail("");
        setCustPhone("");
        setCustStreet("");
        setCustTown("");
        setCustCity("");
        setCustZipcode("");
    }

    const handleSubmit = (e:any) => 
    {
        e.preventDefault();
        const validName = new RegExp('^[a-zA-z]+([\s][a-zA-Z]+)*$');
        const validEmail = new RegExp('^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$');
        const validPhone = new RegExp("^[0-9]{10}$");
        const validZipcode = new RegExp("^[0-9]{6}$");
        
        if (!validName.test(custName)) 
        {
            alert("Please enter a valid Name");
        }
        else if (!validEmail.test(custEmail)) 
        {
            alert("Please enter a valid Email ID");
        }
        else if (!validPhone.test(custPhone)) 
        {
            alert("Please enter a valid Phone Number");
        }
        else if (!validName.test(custStreet) && custStreet!='') 
        {
            alert("Please enter a valid Street");
        }
        else if (!validName.test(custTown) && custTown!='') 
        {
            alert("Please enter a valid Town");
        }
        else if (!validName.test(custCity) && custCity!='') 
        {
            alert("Please enter a valid City");
        }
        else if (!validZipcode.test(custZipcode) && custZipcode!='')
        {
            alert("Please enter a valid Zipcode");
        }

        else
        {
            if(submitButtonValue=== "Submit")
            {
                axios.post(baseURL, newCustomer)
                .then(response => 
                {
                    navigate("../Customer/ViewAllCustomers");
                })
                setDefaultValues();
            }
            else
            {
                axios.put(`${baseURL}/${data.id}`, newCustomer)
                .then(response => 
                {
                    navigate("../Customer/ViewAllCustomers");
                })
                setDefaultValues();
            }
        }
    }

    useEffect(()=> {
    if(location.state != null && location.state.type === "Update")
        {
            setFormHeading("Update Customer Details");
            setSubmitButtonValue("Update");
            data.id = location.state.id;
            data.name = location.state.name;
            data.email = location.state.email;
            data.phone = location.state.phone;
            data.street = location.state.street;
            data.town = location.state.town;
            data.city = location.state.city;
            data.zipcode = location.state.zipcode;
        
            // setCustId(data.id);
            setCustName(data.name);
            setCustEmail(data.email);
            setCustPhone(data.phone);
            setCustStreet(data.street);
            setCustTown(data.town);
            setCustCity(data.city);
            setCustZipcode(data.zipcode);
        }
        else
        {
            setFormHeading("Add Customer Details");
            setSubmitButtonValue("Submit");
            data.id = 0;
            data.name = '';
            data.email = '';
            data.phone = '';
            data.street = '';
            data.town = '';
            data.city = '';
            data.zipcode = '';
        
            // setCustId(data.id);
            setCustName(data.name);
            setCustEmail(data.email);
            setCustPhone(data.phone);
            setCustStreet(data.street);
            setCustTown(data.town);
            setCustCity(data.city);
            setCustZipcode(data.zipcode);
        }
    },[location.state])
   
    return (
        <>
        <div className="my-container shadow">
            <h3>{formHeading}</h3>
            <hr></hr>
            <div>
                <form onSubmit={handleSubmit}>
                    {loading && <Loader />}
                    <div className="row g-3 input-row">
                        <label className="col-md-4">
                        Name:
                        <input type="text" name="name" value={custName}
                        placeholder="Enter Person Name"
                        className="input-item-details" onChange={handleNameChange} required/>
                        </label>
         
                        <label className="col-md-4">
                        Email:
                        <input type="text" name="name" value={custEmail}
                        placeholder="Enter Person Name"
                        className="input-item-details" onChange={handleEmailChange} required/>
                        </label>

                        <label className="col-md-4">
                        Phone:
                        <input type="text" name="name" value={custPhone}
                        placeholder="Enter Person Name"
                        className="input-item-details" onChange={handlePhoneChange} required/>
                        </label>
                    </div>           
                    <div className="row g-3 input-row">
                        <label className="col-md-4">
                        Street:
                        <input type="text" name="name" value={custStreet}
                        placeholder="Enter Person Name"
                        className="input-item-details" onChange={handleStreetChange} />
                        </label>

                        <label className="col-md-4">
                        Town:
                        <input type="text" name="name" value={custTown}
                        placeholder="Enter Person Name"
                        className="input-item-details" onChange={handleTownChange} />
                        </label>

                        <label className="col-md-4">
                        City:
                        <input type="text" name="name" value={custCity}
                        placeholder="Enter Person Name"
                        className="input-item-details" onChange={handleCityChange} />
                        </label>
                    </div>    
                    <div className="row g-3 input-row">
                        <label className="col-md-4">
                        Zipcode:
                        <input type="text" name="name" value={custZipcode}
                        placeholder="Enter Person Name"
                        className="input-item-details" onChange={handleZipcodeChange} />
                        </label>
                    </div>           
                    <button type="submit" className="btn submit-btn" 
                            >{submitButtonValue}</button>
                </form>
            </div>
        </div>
        </>
    );
}
export default AddCustomer;