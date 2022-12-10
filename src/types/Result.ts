export interface Result {
    Message: string[];
    Succeeded: boolean;    
}

export interface TypedResult<T> extends Result {
    Data: T 
}

export interface PaginatedResult<T> extends TypedResult<T> {
    CurrentPage: number;
    HasNextPage: boolean;
    HasPreviousPage: boolean;
    PageSize: number;
    TotalCount: number;
    TotalPages: number
}