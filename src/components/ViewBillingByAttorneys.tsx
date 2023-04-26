import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import React, { useState } from "react";
import { Attorney, BillingByAttorneys } from './Entities';
import axios from 'axios';

const billingByAttorneysURL = "https://localhost:7269/api/Invoice/BillingByAttorneys";
const billingForAttorneyURL = "https://localhost:7269/api/Invoice/BillingForAttorney";

const ViewBillingByAttorneys = () => {

    const [billingByAttorneys, setBillingByAttorneys] = useState<BillingByAttorneys[]>([]);
    const [billingForAttorney, setBillingForAttorney] = useState<number>();

    const [count, setCount] = useState<number>(0);
    const [billings, setBillings] = useState({});

    const getBillingByAttorneys = () => {
        axios.get(`${billingByAttorneysURL}`)
            .then((response) => {

                console.log("d", response);
                var newData: any;
                newData = response.data.data;
                console.log("new da", newData);
                setBillingByAttorneys(response.data.data);
                // console.log("store",billingByAttorneys);
                newData.forEach((element: any) => {
                    const result = getBillingByAttorney(element.id);
                    console.log("foreach result", element.id);
                    setBillings(
                        element.attorneyName
                    );
                    console.log("setbilling", billings);
                });
            })
            .catch(error => console.log(error.data.message));




        // setCount(billingByAttorneys.length);

        // billingByAttorneys.forEach(item => {
        //     setBillings([...billings, getBillingByAttorney(item.id)]);
        // });
    }
    const getBillingByAttorney = (attorneyId: number) => {
        axios.get(`${billingForAttorneyURL}/${attorneyId}`)
            .then((response) => {
                // console.log("an", response);
                setBillingForAttorney(response.data.data);

            })
            .catch(error => console.log(error.data.message));
        return billingForAttorney;
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