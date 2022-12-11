import React, {useEffect} from "react";
import {PatronResponse} from "../../types/PatronResponse";
import {Button, Col, Container, FormGroup, Label, Modal, ModalBody, ModalHeader} from "reactstrap";
import {SubmitHandler, useForm} from "react-hook-form";
import {EditPatronRequest} from "../../types/EditPatronRequest";
import PatronService from "../../services/PatronService";

const AddEditPatronModal : React.FC<{ patron: PatronResponse | null, toggle: () => void }> = ({ patron, toggle }) => {
    const addMode = patron == null;

    const requestModel: EditPatronRequest = {
        address: patron?.address ?? "",
        dateOfBirth: patron?.dateOfBirth.toString() ?? '',
        email: patron?.email ?? "",
        firstName: patron?.firstName ?? "",
        id: patron?.id ?? "",
        issued: patron?.issued.toString() ?? '',
        lastName: patron?.lastName ?? "",
        mobile: patron?.mobile ?? "",
        multipleCheckoutLimit: patron?.multipleCheckoutLimit ?? 0,
        registerId: patron?.registerId ?? ""
    };

    const { register, handleSubmit, reset } = useForm<EditPatronRequest>();
    
    useEffect(() => reset(requestModel),[])
    
    const SavePatron : SubmitHandler<EditPatronRequest> = (data) => {
        PatronService.save(data)
            .then(res => {
                if(res.succeeded) {
                    console.log("Form Submission Succeeded at Backend");
                    toggle();
                }
            });
    }
    
    return (
        <Modal isOpen={true} toggle={toggle}>
            <ModalHeader toggle={toggle}>{addMode ? "Add Patron" : "Edit Patron"}</ModalHeader>
            <ModalBody>
                <Container>                    
                    <form onSubmit={handleSubmit(SavePatron)}>
                        <FormGroup row className="align-items-center">
                            <Label for="registerId" sm={3}>Register ID</Label>
                            <Col sm={9}>                                
                                <input className="form-control" id="registerId" {...register("registerId")} />                        
                            </Col>
                        </FormGroup>
                        <FormGroup row className="align-items-center">
                            <Label for="firstName" sm={3}>First Name</Label>
                            <Col sm={9}>                                
                                <input className="form-control" id="firstName" {...register("firstName")} />                        
                            </Col>
                        </FormGroup>
                        <FormGroup row className="align-items-center">
                            <Label for="lastName" sm={3}>Last Name</Label>
                            <Col sm={9}>                                
                                <input className="form-control" id="lastName" {...register("lastName")} />                        
                            </Col>
                        </FormGroup>
                        <FormGroup row className="align-items-center">
                            <Label for="email" sm={3}>Email</Label>
                            <Col sm={9}>                                
                                <input className="form-control" id="email" {...register("email")} />                        
                            </Col>
                        </FormGroup>
                        <FormGroup row className="align-items-center">
                            <Label for="mobile" sm={3}>Mobile</Label>
                            <Col sm={9}>                                
                                <input className="form-control" id="mobile" {...register("mobile")} />                        
                            </Col>
                        </FormGroup>
                        <FormGroup row className="align-items-center">
                            <Label for="address" sm={3}>Address</Label>
                            <Col sm={9}>                                
                                <input className="form-control" id="address" {...register("address")} />                        
                            </Col>
                        </FormGroup>
                        <FormGroup row className="align-items-center">
                            <Label for="dateOfBirth" sm={3}>Date Of Birth</Label>
                            <Col sm={9}>                                
                                <input className="form-control" type="date" id="dateOfBirth" {...register("dateOfBirth")} />                        
                            </Col>
                        </FormGroup>
                        <div className="offset-sm-3 col-sm-4">
                            <Button type="submit" className="ms-2">Submit</Button>
                        </div>
                    </form>
                </Container>
            </ModalBody>
        </Modal>  
    );
};

export default AddEditPatronModal;