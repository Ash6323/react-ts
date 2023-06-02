import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import React, { useState } from "react";
import { BillingByAttorneys } from './Entities';
import axios from 'axios';

const billingByAttorneysURL = "https://localhost:7269/api/Invoice/BillingByAttorneys";

const ViewBillingByAttorneys = () => {

    const [billingByAttorneys, setBillingByAttorneys] = useState<BillingByAttorneys[]>([]);

    const getBillingByAttorneys = () => {
        axios.get(`${billingByAttorneysURL}`)
            .then((response) => {
                setBillingByAttorneys(response.data.data);
            })
            .catch(error => console.log(error.data.message));
        }

    React.useEffect(() => {
        getBillingByAttorneys();
    }, []);

    return (
        <>
            <div className="my-container shadow">
                <h3>Last Week's Billing by Attorneys</h3>
                <hr></hr>
                <div className="table-responsive card">
                    <table className="table table-bordered table-striped ">
                        <thead className="table-dark">
                            <tr>
                                <th scope="col">Attorney Name</th>
                                <th scope="col">Last Week's Billing</th>
                            </tr>
                        </thead>
                        <tbody>
                        {billingByAttorneys.map((item, index) => {
                            return (
                                <tr key={index}>
                                    <td>{item.attorneyName}</td>
                                    <td>{item.billing}</td> 
                                </tr>
                            );
                        })}
                    </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}
export default ViewBillingByAttorneys;