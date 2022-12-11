export interface PatronResponse {
    id: string;
    firstName: string;
    lastName: string;
    name: string;
    address: string;
    dateOfBirth: string;
    email: string;
    mobile: string;
    registerId: string;
    issued: string;
    currentDues: number;
    checkoutsCount: number;
    checkoutsPending: number;
    multipleCheckoutLimit: number;
} 