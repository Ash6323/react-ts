import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import React, {useState} from "react";
import  {Matter, InvoiceByMatter} from './Entities';
import axios from 'axios';

const matterBaseURL = "https://localhost:7269/api/Matter";
const invoicesByMatterURL = "https://localhost:7269/api/Invoice/GetByMatter";

const ViewInvoicesForMatter = () => {

    const [matters,setMatters]=useState<Matter[]>([]);
    const [invoicesByMatter,setInvoicesByMatter]=useState<InvoiceByMatter[]>([]);

    const getMatters = () => {
        axios.get(matterBaseURL).then((response) => 
        {
            setMatters(response.data.data);
        })
        .catch(error => console.log(error.data.message));
    }
    const getInvoicesByMatter = (matterId: number) => {
        axios.get(`${invoicesByMatterURL}/${matterId}`)
        .then((response) => 
        {
            setInvoicesByMatter(response.data.data);
        })
        .catch(error => console.log(error.data.message));
    }

    React.useEffect( () => {
        getMatters();
    }, []);

    const handleChange = (e:any) => 
    {
        console.log(matters);
        const {name, value} = e.target;
        getInvoicesByMatter(value);
    };

    return (
        <>
        <div className="my-container shadow">
            <h3>Invoices For a Matter</h3>
            <hr></hr>
            <label className="col-md-4">
                Select a Matter:
                <select required id = "matter-dropdown" className="input-item-details" name="matterId"
                        defaultValue="Select-Matter"
                        onChange={handleChange} >
                    <option value= "Select-Matter" disabled>Select a Matter</option>
                    {matters.map((item, index) => { 
                    return (<option key= {index} value={item.id} >
                                {item.title}
                            </option>);
                    })}
                </select>
            </label>
            <div className="table-responsive card">
                <table className="table table-bordered table-striped ">
                    <thead className="table-dark">
                        <tr>
                            <th scope="col">S.No.</th>
                            <th scope="col">Date</th>
                            <th scope="col">Matter Title</th>
                            <th scope="col">Attorney Name</th>
                            <th scope="col">Hours Worked</th>
                            <th scope="col">Total Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                    {invoicesByMatter.map((item: InvoiceByMatter,index)=>{
                        return <tr key={index}>
                                <td className="view-info">{index+1}</td>
                                <td className="view-info">{item.date.toString()}</td>
                                <td className="view-info">{item.matterTitle}</td>
                                <td className="view-info">{item.attorneyName}</td>
                                <td className="view-info">{item.hoursWorked}</td>
                                <td className="view-info">{item.totalAmount}</td>
                            </tr>
                    })}
                    </tbody>
                </table>
            </div>
        </div>
        </>
    )
}
export default ViewInvoicesForMatter;