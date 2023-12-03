export interface IGetPost {
    body: string
    id: number
    title: string
    userId: number
}

export interface IUser {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string;
        };
    };
    phone: string;
    website: string;
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    };
}


export interface IComments {
    postId: number
    id: number
    name: string
    email: string
    body: string
}