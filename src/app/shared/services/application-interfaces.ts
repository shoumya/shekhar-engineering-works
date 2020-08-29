export interface Feedback {
    title: string;
    description: string;
    feedback: string;
}

export interface ContactUs {
    firstName: string;
    lastName: string;
    email: string;
    phone: number;
}

export interface Info {
    id: string;
    data: string;
}

export interface HomeComponentParams {
    id: string;
    user: string;
}
