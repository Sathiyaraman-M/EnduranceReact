export interface PatronResponse {
    Id: string;
    FirstName: string;
    LastName: string;
    Address: string;
    DateOfBirth: Date;
    Email: string;
    Mobile: string;
    RegisterId: string;
    Issued: Date;
    CurrentDues: number;
    CheckoutsCount: number;
    CheckoutsPending: number;
    MultipleCheckoutLimit: number;
} 