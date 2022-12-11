import React, {useState} from "react";
import {Button, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";
import {PatronResponse} from "../types/PatronResponse";
import AddEditPatronModal from "../pages/patrons/AddEditPatronModal";

const PatronTableRow : React.FC<{patron: PatronResponse, index: number, deleteMethod: () => void }> = ({patron, index, deleteMethod}) => {

    const [show, toggle] = useState(false);
    
    const toggleCallback = () => toggle(!show);
    
    return(
        <tr key={patron.id}>
            <td>{index + 1}</td>
            <td>{patron.registerId}</td>
            <td>{patron.firstName} {patron.lastName}</td>
            <td>{patron.email}</td>
            <td>{patron.mobile}</td>
            <td>
                <Button color="warning" type="submit" className="me-2"
                        onClick={toggleCallback}>Edit</Button>
                {show && <AddEditPatronModal patron={patron} toggle={toggleCallback} /> }
                <Button color="danger" type="submit" className="me-2" onClick={deleteMethod}>Delete</Button>
            </td>
        </tr>
    )
};

export default PatronTableRow;