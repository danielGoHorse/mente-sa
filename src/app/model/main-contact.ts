export class MainContact{
    id?: number;
    nome?: string;
    email?: string;
    telefone?: string;
    grauParentesto?: GrauParentesco;
    expertise?: Expertise;
    tipo?: string;
}

export enum Expertise {
   'PSIQUIATRIA' = 1,
   'PSICOLOGIA' = 2,
   'MENTORIA' = 3,
   'COACH' = 4,
   'LIDER_RELIGIOSO' = 5,
}

export enum GrauParentesco {
    'FAMILIAR' = 1,
    'CONJUGE' = 2,
    'AMIGO' = 3,
    'NAMORADO' = 4
 }