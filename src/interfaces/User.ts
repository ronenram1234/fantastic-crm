export interface User {
    _id: string;
    name: {
      first: string;
      middle?: string; 
      last: string;
      _id?: string; 
    };
    phone: string;
    email: string;
    image?: {
      url: string;
      alt: string;
      _id?: string; 
    };
    address?: {
      state?: string;
      country: string;
      city: string;
      street: string;
      houseNumber: number;
      zip?: number; 
      _id?: string; 
    };
    isAdmin: boolean;
    isBusiness: boolean;
    classCode?: string; 
    createdAt: string;
  }
  
  export interface UserLoginFormValues {
    email: string;
    password: string;
  }