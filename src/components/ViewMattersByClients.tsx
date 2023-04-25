import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import React, {useState} from "react";
import {Matter, Jurisdiction, Client, Attorney} from './Entities';
import axios from 'axios';

const baseURL = "https://localhost:7269/api/Matter/GetByClients";
const jurisdictionBaseURL = "https://localhost:7269/api/Jurisdiction";
const clientBaseURL = "https://localhost:7269/api/Client"; 
const attorneyBaseURL = "https://localhost:7269/api/Attorney";

const ViewMattersByClients = () => {

    const [matters, setMatters] = useState<Matter[]>([]);
    const [jurisdictions, setJurisdictions] = useState<Jurisdiction[]>([]);
    const [attorneys,setAttorneys]=useState<Attorney[]>([]);
    const [clients,setClients]=useState<Client[]>([]);
    const [area, setArea] = useState<string>("");
    const [clientName, setClientName] = useState<string>("");
    const [attorneyName, setAttorneyName] = useState<string>("");
    const [matterStatus, setMatterStatus] = useState<string>("");

    const getMatters = () => {
        axios.get(baseURL)
        .then((response) => 
        {
            setMatters(response.data.data);
        });
    }
    const getJurisdictions = () => {
        axios.get(jurisdictionBaseURL)
        .then((response) => 
        {
            setJurisdictions(response.data.data);
        });
    }
    const getClients = () => {
        axios.get(clientBaseURL).then((response) => 
        {
            setClients(response.data.data);
        });
    }
    const getAttorneys = () => {
        axios.get(`${attorneyBaseURL}`).then((response) => 
        {
            setAttorneys(response.data.data);
        });
    }
    const getJurisdictionById = (jurisdictionId: number): string => {
            jurisdictions.forEach(j => {
            if(j.id == jurisdictionId)
                setArea(j.area);
        });
        return (area);
    }
    const getClientById = (clientId: number): string => {
        clients.forEach(c => {
        if(c.id == clientId)
            setClientName(c.name);
        });
        return (clientName);  
    }
    const getAttorneyById = (attorneyId: number): string => {
        attorneys.forEach(a => {
        if(a.id == attorneyId)
            setAttorneyName(a.name);
        });
        return (attorneyName);
    }
    const handleMatterStatus = (isActive: number): string => {
        if(isActive == 0)
            setMatterStatus("Inactive");
        else
            setMatterStatus("Active")

        return (matterStatus);
    }
    React.useEffect( () => {
        getMatters();
        getJurisdictions();
        getClients();
        getAttorneys();
      }, []);

    return (
        <>
        <div className="my-container shadow">
            <h3>Matters By Clients</h3>
            <div className="table-responsive card">
                {/* {loading && <Loader />} */}
                <table className="table table-bordered table-striped ">
                    <thead className="table-dark">
                        <tr>
                            <th scope="row">Client Name</th>
                            <th scope="row">Matters</th>
                        </tr>
                        {/* <tr><th scope="row">Phone</th></tr>
                        <tr><th scope="row">City</th></tr>
                        <tr><th scope="row">Update</th></tr>
                        <tr><th scope="row">Delete</th></tr> */} 
                    </thead>
                    <tbody>
                    {matters.map((item,index)=>{
                        return <tr key={index}>
                            {/* <td onClick= {() => handleTableRowClick(id)} className="view-info">{index+1}</td> */}
                            <td >{item.title}</td>
                            <td >{item.description}</td>
                            {/* <td className="view-info">{getJurisdictionById(item.jurisdictionId)}</td>
                            <td className="view-info">{getClientById(item.clientId)}</td>
                            <td className="view-info">{getAttorneyById(item.billingAttorneyId)}</td>
                            <td className="view-info">{getAttorneyById(item.responsibleAttorneyId)}</td>
                            <td className="view-info">{handleMatterStatus(item.isActive)}</td> */}
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>
        </div>
        </>   
    );
}
export default ViewMattersByClients;