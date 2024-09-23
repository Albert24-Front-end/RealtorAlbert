export interface IUser {
    mail: string;
    phone_number: string;
    user_id: number;
    name: string;
    reg_date: Date;
    city: string;
  }
  
  
  export interface IGetUserResponse {
    status: number;
    message: IUser;
  }
  
  export interface ILoginUserPayload {
    email: string;
    password: string;
  }
  
  export interface ILoginUserResponse {
    status: 1 | 0;
    user_id: number;
    message: string;
  }

export interface Property {
    id: string;
    price: number;
    rooms: number;
    baths: number;
    area: number;
    title: string;
    coverPhoto: {
        url: string;
    };
    location: {
        name: string;
    }[];
    score: number;
    externalID: string;
    purpose: string;
  contactName: string;
  phoneNumber: {
    phone: number;
    mobile: number;
    whatsapp: number;
  };
  type: string;
  product: string;
  category: {
    name: string
  }[];
}

export interface IGetCardbyIdResponse {
  id: string;
  price: number;
  rooms: number;
  baths: number;
  area: number;
  title: string;
  coverPhoto: {
        url: string;
  };
  location: {
        name: string;
  }[];
  score: number;
  externalID: string;
  purpose: string;
  contactName: string;
  phoneNumber: {
    phone: number;
    mobile: number;
    whatsapp: number;
  };
  type: string;
  product: string;
  category: {
    name: string
  }[];
}