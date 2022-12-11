export interface PatronResponse {
    id: string;
    firstName: string;
    lastName: string;
    name: string;
    address: string;
    dateOfBirth: Date;
    email: string;
    mobile: string;
    registerId: string;
    issued: Date;
    currentDues: number;
    checkoutsCount: number;
    checkoutsPending: number;
    multipleCheckoutLimit: number;
} 