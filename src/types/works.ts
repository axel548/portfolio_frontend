export interface Projects {
    image: string;
    categories: string[];
    title: string;
    description: string;
}

export interface Works {
    title: string;
    description: string;
    categories: string[];
    projects: Projects[];
}