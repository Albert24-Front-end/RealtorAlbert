export interface IUser {
    mail: string;
    phone_number: string;
    user_id: number;
    name: string;
    reg_date: Date;
    city: string;
  }
  
  export interface IPost {
      main_text: string;
      user_id: number;
      id: number;
      reg_date: Date;
      user_fk: IUser;
      photos: [
        {
          photo_id: number
          photo_url: string;
        }
      ];
      comments: string[];
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
}