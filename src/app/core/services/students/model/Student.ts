export interface Student {
    id:number,
    name:string,
    email:string
    active:boolean
}

export const studentColumns: string[] = [
  'id',
  'fullName',
  'email',
  'active',
];