import React, {useState, useEffect} from "react";
import axios from 'axios';
import {Button} from 'react-bootstrap';

const baseURL = "https://jsonplaceholder.typicode.com/users";

const APIPost = () => {

    const [sentData, setSentData] = useState({personId: 0, name: "",})
    const [data, setData] = useState<any>([]);

    const handleIdChange = (e:any) => 
    {
        setSentData({ ...sentData, [e.target.name]: e.target.valueAsNumber });
    };
    const handleNameChange = (e:any) => 
    {
        setSentData({ ...sentData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e:any) => 
    {
        e.preventDefault();

        axios.post(baseURL, sentData)
        .then(response => 
        {
            setData([...data, response.data]);
        })
        sentData.personId = 0;
        sentData.name = "";
    }
    return (
        <>
        <div className="container shadow">
            <h3>Using API to POST Person Details</h3>
            <div>
                <form onSubmit={handleSubmit}>
                    <div className="input-row">
                        <label>
                            Person ID:
                            <input type="number" name="personId" value={sentData.personId}
                            placeholder="Enter Person ID"
                            className="input-item-details" onChange={handleIdChange} />
                        </label>
                    </div>                 
                    <div className="input-row">
                        <label>
                        Person Name:
                        <input type="text" name="name" value={sentData.name}
                        placeholder="Enter Person Name"
                        className="input-item-details" onChange={handleNameChange} />
                        </label>
                    </div>           
                    <Button variant="success" type="submit">Add</Button>
                </form>
            </div>
            <div className="table-responsive card">
                <table className="table table-bordered table-striped ">
                    <thead className="table-dark">
                        <tr>
                            <th scope="col">Person ID</th>
                            <th scope="col">Person Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item: any, index: any) => (
                            <tr key={index}>
                                <td>{item.personId}</td>
                                <td>{item.name}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
        </>
    );
}
export default APIPost;