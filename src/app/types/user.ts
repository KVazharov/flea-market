

export interface User {
    username: string;
    email: string;
    password: string;
    secretQuestion: string;
    answer: string;
    addedProducts: AddedProducts[];
    wishList: string[]
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