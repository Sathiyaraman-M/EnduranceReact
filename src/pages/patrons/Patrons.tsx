import {PatronResponse} from "../../types/PatronResponse";
import React, {useCallback, useEffect, useState} from "react";
import PatronService from "../../services/PatronService";
import PatronsTable from "../../components/PatronsTable";

interface State {
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
                    patrons: paginatedData.Data ?? [],
                    loading: false
                })
            })
            .catch(err => console.log(err));        
    };
    
    useEffect(() => loadData(), []);
    
    let contents = state.loading 
        ? <p><em>Loading...</em></p> 
        : <PatronsTable patrons={state.patrons} loadData={loadData} />;
    
    return (
        <div>
            <h2>Patrons</h2>
            <p className="text-muted">Find all patrons here</p>
            {contents}
        </div>
    )
};

export default Patrons;