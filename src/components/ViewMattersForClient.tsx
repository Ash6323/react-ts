import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import React, {useState} from "react";
import  {Client, MatterByCLient} from './Entities';
import axios from 'axios';

const clientBaseURL = "https://localhost:7269/api/Client";
const mattersByClientURL = "https://localhost:7269/api/Matter/GetByClient";

const ViewMattersForClient = () => {

    const [clients,setClients]=useState<Client[]>([]);
    const [mattersByClient,setMattersByClient]=useState<MatterByCLient[]>([]);

    const getClients = () => {
        axios.get(clientBaseURL).then((response) => 
        {
            setClients(response.data.data);
        })
        .catch(error => console.log(error.data.message));
    }
    const getMattersByClient = (clientId: number) => {
        axios.get(`${mattersByClientURL}/${clientId}`)
        .then((response) => 
        {
            setMattersByClient(response.data.data);
        })
        .catch(error => console.log(error.data.message));
    }

    React.useEffect( () => {
        getClients();
    }, []);

    const handleChange = (e:any) => 
    {
        const {name, value} = e.target;
        getMattersByClient(value);
    };

    const handleMatterStatus = (isActive: number): string => {
        if(isActive == 0)
            return("Inactive")           
        else
            return("Active")
    }

    return (
        <>
        <div className="my-container shadow">
            <h3>Matters For a Client</h3>
            <hr></hr>
            <label className="col-md-4">
                Select a Client:
                <select required id = "client-dropdown" className="input-item-details" name="clientId"
                        defaultValue="Select-Client"
                        onChange={handleChange} >
                    <option value= "Select-Client" disabled>Select a Client</option>
                    {clients.map((item) => { 
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
                            <th scope="col">Title</th>
                            <th scope="col">Description</th>
                            <th scope="col">Jurisdiction</th>
                            <th scope="col">Client</th>
                            <th scope="col">Billing Attorney</th>
                            <th scope="col">Responsible Attorney</th>
                            <th scope="col">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                    {mattersByClient.map((item: MatterByCLient,index)=>{
                        return <tr key={index}>
                                <td className="view-info">{item.title}</td>
                                <td className="view-info">{item.description}</td>
                                <td className="view-info">{item.jurisdictionArea}</td>
                                <td className="view-info">{item.clientName}</td>
                                <td className="view-info">{item.billingAttorneyName}</td>
                                <td className="view-info">{item.responsibleAttorneyName}</td>
                                <td className="view-info">{handleMatterStatus(item.isActive)}</td>
                            </tr>
                    })}
                    </tbody>
                </table>
            </div>
        </div>
        </>
    )
}
export default ViewMattersForClient;