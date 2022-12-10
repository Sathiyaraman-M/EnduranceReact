import React from "react";
import {PatronResponse} from "../types/PatronResponse";
import PatronService from "../services/PatronService";
import {Button} from "reactstrap";

interface LoadDataMethod {
    () : void;
}

const PatronsTable : React.FC<{ patrons: PatronResponse[], loadData : LoadDataMethod }> = ({ patrons, loadData }) => {
    const deletePatron = (id: string) => {
        PatronService.deleteById(id)
            .then(res => {
                console.log(res);
                loadData()
            })
            .catch(err => console.log(err));
    };

    return (
        <div className="table-responsive">
            <table className="table table-hover table-bordered">
                <thead>
                <tr>
                    <th>S.No</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Mobile</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {
                    patrons.map((patron, index) => (
                        <tr>
                            <td>{index}</td>
                            <td>{patron.FirstName} {patron.LastName}</td>
                            <td>{patron.Email}</td>
                            <td>{patron.Mobile}</td>
                            <td>
                                <Button color="warning" type="submit" className="me-2">Edit</Button>
                                <Button color="danger" type="submit" className="me-2" onClick={() => deletePatron(patron.Id)}>Delete</Button>
                            </td>
                        </tr>
                    ))
                }
                <tr>
                    <td>1</td>
                    <td>Bruce Wayne</td>
                    <td>bruce@wayne-enterprises.com</td>
                    <td>6783451378</td>
                    <td>
                        <Button color="warning" type="submit" className="me-2">Edit</Button>
                        <Button color="danger" type="submit" className="me-2">Delete</Button>
                    </td>
                </tr>
                </tbody>
            </table>
        </div>
    );
}

export default PatronsTable