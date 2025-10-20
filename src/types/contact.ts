export interface Info {
    address: {
        title: string;
        description: string;
        status: boolean;
    };
    phone: {
        title: string;
        description: string;
        status: boolean;
    };
    email: {
        title: string;
        description: string;
        status: boolean;
    };
    linkedin: {
        title: string;
        description: string;
        status: boolean;
    };
}

export interface Form {
    name: string;
    email: string;
    subject: string;
    message: string;
    button: string;
}

export interface Contact {
    title: string;
    description: string;
    info: Info;
    form: Form;
}