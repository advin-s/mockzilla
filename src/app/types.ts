import { AuthData } from "./interfaces"

export type LoginState = {
    isLoading:boolean,
    data:AuthData | null,
    errorMessage:loginError | null
}

export type loginError = {
    message:string
}
export type LoginFailed = {
    errorMessage:Record<string,string | number>
    isLoading:boolean,
}

export type AppStateInterface = {
    login:LoginState,
    products:ProductState
} 

export type LoginData = {
    username:string | undefined,
    password:string | undefined
}

export type Token = {
    accessToken:string
}

export type ToastMessage = {
    heading:string | undefined,
    message:string | undefined
}

export type DashboardMenuItem = {
    name:string,
    count: number,
    redirectUrl: string,
    imgSrc:string
}

export type Reviews = {
    rating: number;
    comment: string;
    date: string; 
    reviewerName: string;
    reviewerEmail: string;
  }

export type Product = {
    id: number;
    title: string;
    description: string;
    category: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    tags: string[];
    brand: string;
    sku: string;
    weight: number;
    dimensions: {
      width: number;
      height: number;
      depth: number;
    };
    warrantyInformation: string;
    shippingInformation: string;
    availabilityStatus: string;
    reviews: Reviews[];
    returnPolicy: string;
    minimumOrderQuantity: number;
    meta: {
      createdAt: string;
      updatedAt: string;
      barcode: string;
      qrCode: string;
    };
    thumbnail: string;
    images: string[];
  };
  
  export type ProductState = {
    isLoading:boolean,
    products:Product[],
    error:{
        message:string
    }
  }