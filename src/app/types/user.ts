

export type User = {
    username: string;
    email: string;
    password: string;
    secretQuestion: string;
    answer: string;
    addedProducts: AddedProducts[];
    wishList: string[]
}

export type NewUser = User & {
    confirmPassword: string,
}

export interface AddedProducts {
    productName :string,
    description: string;
    phoneNumber: string;
    productImages: string;
}

export interface LoginUser {
    email: string;
    password: string;
}

export interface AddProduct {
    imagesUrl: string[];
    userId: string;
    productName :string,
    category: string;
    description: string;
    phoneNumber: string;
}

export interface Product {
    imagesUrl: string[];
    id:string;
    userId: string;
    productName :string,
    category: string;
    description: string;
    phoneNumber: string;
}
export type FindProduct = {
    imagesUrl: string[];
    id:string;
    userId: string;
    productName :string,
    category: string;
    description: string;
    phoneNumber: string;
}