export type EditPatronRequest = {
    id: string,
    registerId: string,
    firstName: string,
    lastName: string,
    address: string,
    dateOfBirth: Date,
    email: string,
    mobile: string,
    issued: Date | null,
    multipleCheckoutLimit: number
}  