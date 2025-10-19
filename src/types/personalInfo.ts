// src/types/personalInfo.ts

export interface HeroInfo {
    name: string;
    description: string;
    linkedin: string;
    github: string;
}

export interface FreelanceStatus {
    status: boolean;
    label: string;
}

export interface CVButton {
    url: string;
    label: string;
}

export interface Summary {
    greeting: string;
    description: string;
    cv_button: CVButton;
    available_to_freelance: FreelanceStatus;
}

export interface Company {
    image: string;
    description: string;
}

export interface CompanyInfo {
    title: string;
    companies: Company[];
}

export interface PersonalInfo {
    hero: HeroInfo;
    summary: Summary;
    company: CompanyInfo;
}
