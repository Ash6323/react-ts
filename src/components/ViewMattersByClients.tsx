import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import React, {useState} from "react";
import {MatterByCLient} from './Entities';
import axios from 'axios';

const baseURL = "https://localhost:7269/api/Matter/GetByClients";

const ViewMattersByClients = () => {

    const [matters, setMatters] = useState<MatterByCLient[][]>([]);

    const getMatters = () => {
        axios.get(baseURL)
        .then((response) => 
        {
            setMatters(response.data.data);
        })
        .catch(error => console.log(error.data.message));
    }

    React.useEffect( () => {
        getMatters();
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
                            <th scope="row">Client No.</th>
                            <th scope="row">Matters</th>
                            <th scope="row">Title</th>
                            <th scope="row">Description</th>
                            <th scope="row">Area</th>
                            <th scope="row">Billing Attorney</th>
                            <th scope="row">Responsible Attorney</th>
                            <th scope="row">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {matters?.map((clientName, index) => {
                            return (
                                <React.Fragment key={index}>
                                    <tr>
                                        <th rowSpan={matters[index].length + 1}>{index + 1}</th>
                                        <th colSpan={7}>{matters[index][0].clientName}</th>
                                    </tr>
                                    {matters[index].map((matter, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{index + 1}</td>
                                                <td>{matter.title}</td>
                                                <td>{matter.description}</td>
                                                <td>{matter.jurisdictionArea}</td>
                                                <td>{matter.billingAttorneyName}</td>
                                                <td>{matter.responsibleAttorneyName}</td>
                                                <td>{matter.isActive == 1 ? "Active" : "Inactive"}</td>
                                            </tr>
                                        )
                                    })}
                                </React.Fragment>
                            )
                        })}
                        </tbody>
                </table>
            </div>
        </div>
        </>   
    );
}
export default ViewMattersByClients;