import {PatronResponse} from "../../types/PatronResponse";
import React, {useEffect, useState} from "react";
import PatronService from "../../services/PatronService";
import PatronsTable from "../../components/PatronsTable";
import { Button } from "reactstrap";
import AddEditPatronModal from "./AddEditPatronModal";

type State = {
    loading: boolean;
    pageNumber: number;
    pageSize: number;
    searchString: string;
    orderBy: string;
    patrons: PatronResponse[];
}

const Patrons : React.FC = () => {    
    const [state, setState] = useState<State>({
        loading: true,
        pageNumber: 1,
        pageSize: 10,
        searchString: '',
        orderBy: '',
        patrons: []
    });
    
    const loadData = () => {
        PatronService.getAll(state.pageNumber, state.pageSize, state.searchString, state.orderBy)
            .then(res => {
                const paginatedData = res.data;
                setState({
                    ...state,
                    patrons: paginatedData.data,
                    loading: false
                })
            })
            .catch(err => console.log(err));        
    };
    
    useEffect(() => loadData(), []);
    
    let contents = state.loading 
        ? <p><em>Loading...</em></p> 
        : <PatronsTable patrons={state.patrons} loadData={loadData} />;
        
    const [add, toggleAdd] = useState(false);
    
    const invokeAdd = () => {
        toggleAdd(!add);
        if(!add) {
            loadData();
        }
    }

    return (
        <div>
            <h2>Patrons</h2>
            <p className="text-muted">Find all patrons here</p>
            <div className="my-2">
                <Button color="primary" className="me-2" onClick={invokeAdd}>Add</Button>
                <Button color="secondary" onClick={loadData}>Refresh</Button>
            </div>
            {add && <AddEditPatronModal patron={null} toggle={invokeAdd} />}
            {contents}
        </div>
    )
};

export default Patrons;