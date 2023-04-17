import React, {useState} from "react";
import axios from 'axios';

const baseURL = "https://jsonplaceholder.typicode.com/users";

const APIGet = () => {

    const [persons, setPersons] = useState<any[]>([]);

    React.useEffect(() => {
        axios.get(baseURL).then((response) => 
        {
            setPersons(response.data);
        });
      }, []);

    return (
        <>
        <div className="container shadow">
            <h3>Using API to GET Person Details</h3>
            <div className="table-responsive card">
                <table className="table table-bordered table-striped ">
                    <thead className="table-dark">
                        <tr>
                            <th scope="col">Person ID</th>
                            <th scope="col">Person Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {persons.map((person) => (
                            <tr key={person.id}>
                                <td>{person.id}</td>
                                <td>{person.name}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
        </>
    );
}
export default APIGet;