import React from "react";
import {PatronResponse} from "../types/PatronResponse";
import PatronService from "../services/PatronService";
import PatronTableRow from "./PatronTableRow";

const PatronsTable : React.FC<{ patrons: PatronResponse[], loadData : () => void }> = ({ patrons, loadData }) => {    
    const deletePatron = (id: string) => {
        PatronService.deleteById(id)
            .then(res => {
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
                    <th>Register ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Mobile</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                {patrons.map((patron, index) => (
                    <PatronTableRow key={index} patron={patron} index={index} deleteMethod={() => deletePatron(patron.id)} />
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default PatronsTable