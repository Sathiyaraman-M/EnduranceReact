export type EditPatronRequest = {
    id: string,
    registerId: string,
    firstName: string,
    lastName: string,
    address: string,
    dateOfBirth: string,
    email: string,
    mobile: string,
    issued: string | null,
    multipleCheckoutLimit: number
}  