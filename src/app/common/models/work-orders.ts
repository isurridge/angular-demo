export interface IAddress {
  state?: string;
  city?: string;
}

export interface IWorkOrder {
  id?: number;
  name?: string;
  gender?: string;
  age?: number;
  address?: IAddress;
}



