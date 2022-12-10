import http from './base/http-common';
import {PaginatedResult, TypedResult} from "../types/Result";
import {PatronResponse} from "../types/PatronResponse";

const getAll = (pageNumber: number, pageSize: number, searchString: string, orderBy: string) => {
    return http.get<PaginatedResult<PatronResponse[]>>(`api/patrons?pageNumber=${pageNumber}&pageSize=${pageSize}&searchString=${searchString}&orderBy=${orderBy}`);
};

const getById = (id: string) => {
    return http.get<TypedResult<PatronResponse>>(`api/patrons/${id}`);
}

const deleteById = (id: string) => {
    return http.delete(`api/patrons/${id}`);
}

const PatronService = {
    getAll,
    getById,
    deleteById
};

export default PatronService;