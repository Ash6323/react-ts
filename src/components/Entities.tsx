export interface Matter {
    id: number,
    title: string,
    description: string,
    isActive: number,
    jurisdictionId: number,
    clientId: number,
    billingAttorneyId: number,
    responsibleAttorneyId: number,
}
export interface Jurisdiction {
    id: number,
    area: string,
}
export interface Client {
    id: number,
    name: string,
    age: number,
    gender: string,
    email: string,
    phone: string,
}
export interface Attorney {
    id: number,
    name: string,
    age: number,
    email: string,
    phone: string,
    rate: number,
    jurisdictionId: number,
}
export interface MatterByCLient {
    id: number,
    title: string,
    description: string,
    isActive: number,
    jurisdictionArea: string,
    clientName: string,
    billingAttorneyName: string,
    responsibleAttorneyName: string,
}
export interface InvoiceByMatter {
    id: number,
    date: Date,
    matterTitle: string,
    attorneyName: string,
    hoursWorked: string,
    totalAmount: number,
}