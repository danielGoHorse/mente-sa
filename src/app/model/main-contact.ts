export class MainContact{
    id?: number;
    nome?: string;
    email?: string;
    telefone?: string;
    grauParentesto?: string;
}

export enum Expertise {
   'PSIQUIATRIA' = 1,
   'PSICOLOGIA' = 2,
   'MENTORIA' = 3,
   'COACH' = 4,
   'LIDER_RELIGIOSO' = 5,
}