export interface User {
    _id: string;
    name: {
      first: string;
      middle?: string; // Some records have an empty middle name
      last: string;
      _id?: string; // Optional if not present in all records
    };
    phone: string;
    email: string;
    image?: {
      url: string;
      alt: string;
      _id?: string; // Optional if not present in all records
    };
    address?: {
      state?: string; // Some records use "not defined"
      country: string;
      city: string;
      street: string;
      houseNumber: number;
      zip?: number; // Some records have a zip of 0 or missing
      _id?: string; // Optional if not present in all records
    };
    isAdmin: boolean;
    isBusiness: boolean;
    classCode?: string; // Some records might lack this property
    createdAt: string;
  }
  
  