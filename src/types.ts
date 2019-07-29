export interface IChatMessage {
    component: string,
    message: string,
    values?: any,
    attributeToFill?: string,
    command?:string,
    params?: any
}



export interface ITimeRange { 
    starting: number,
    till: number,
    format: string
}