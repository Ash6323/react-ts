import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import React, {useState} from "react";
import  {Attorney} from './Entities';
import axios from 'axios';

const attorneyBaseURL = "https://localhost:7269/api/Attorney";
const billingForAttorneyURL = "https://localhost:7269/api/Invoice/BillingForAttorney";

const ViewBillingForAttorney = () => {

    const [attorneys,setAttorneys]=useState<Attorney[]>([]);
    const [billingForAttorney,setBillingForAttorney]=useState<number>();
    const [attorneyName, setAttorneyName] = useState<string>();

    const getAttorneys = () => {
        axios.get(attorneyBaseURL).then((response) => 
        {
            setAttorneys(response.data.data);
        })
        .catch(error => console.log(error.data.message));
    }
    const getBillingByAttorney = (attorneyId: number) => {
        axios.get(`${billingForAttorneyURL}/${attorneyId}`)
        .then((response) => 
        {
            setBillingForAttorney(response.data.data);
        })
        .catch(error => console.log(error.data.message));
    }

    React.useEffect( () => {
        getAttorneys();
    }, []);

    const handleChange = (e:any) => 
    {
        const {name, value} = e.target;
        attorneys.forEach(a => {
            if(a.id == value) {
                setAttorneyName(a.name);
            }  
        getBillingByAttorney(value);
        });
    };

    return (
        <>
        <div className="my-container shadow">
            <h3>Last Week's Billing for an Attorney</h3>
            <hr></hr>
            <label className="col-md-4">
                Select an Attorney:
                <select required id = "attorney-dropdown" className="input-item-details" name="attorneyId"
                        defaultValue="Select-Attorney"
                        onChange={handleChange} >
                    <option value= "Select-Attorney" disabled>Select an Attorney</option>
                    {attorneys.map((item) => { 
                    return (<option key= {item.id} value={item.id} >
                                {item.name}
                            </option>);
                    })}
                </select>
            </label>
            <div className="table-responsive card">
                <table className="table table-bordered table-striped ">
                    <thead className="table-dark">
                        <tr>
                            <th scope="col">Attorney Name</th>
                            <th scope="col">Last Week's Billing</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="view-info">{attorneyName}</td>
                            <td className="view-info">{billingForAttorney}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        </>
    )
}
export default ViewBillingForAttorney;