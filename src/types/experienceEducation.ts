export interface Experience {
    start_date: string;
    end_date: string;
    title: string;
    description: string;
    company: string;
    details: string[];
    technologies: string[];
}

export interface Education {
    start_date: string;
    end_date: string;
    title: string;
    description: string;
    institution: string;
    details: string[];
}

export interface ExperienceEducation {
    experience: {
        title: string;
        experience: Experience[];
    };
    education:  {
        title: string;
        education: Education[];
    };
}