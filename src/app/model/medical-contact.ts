export interface MedicalContact{
     id?: number;
     name?: string;
     email?: string;
     phoneNumber?: string;
     expertise?: string;
}

export enum Expertise {
    'PSIQUIATRIA' = 1,
    'PSICOLOGIA' = 2,
    'MENTORIA' = 3,
    'COACH' = 4,
    'LIDER_RELIGIOSO' = 5,
}