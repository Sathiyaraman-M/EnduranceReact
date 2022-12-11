export type Result = {
    message: string[];
    succeeded: boolean;    
}

export type TypedResult<T> = {
    message: string[];
    succeeded: boolean;
    data: T 
}

export type PaginatedResult<T> = {
    message: string[];
    succeeded: boolean;
    data: T[]
    currentPage: number;
    hasNextPage: boolean;
    hasPreviousPage: boolean;
    pageSize: number;
    totalCount: number;
    totalPages: number
}