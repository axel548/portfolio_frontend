export interface ServiceItem {
    title: string;
    description: string;
    icon: string;
    price: string;
}

export interface Service {
    title:string;
    description:string;
    services: ServiceItem[];
}