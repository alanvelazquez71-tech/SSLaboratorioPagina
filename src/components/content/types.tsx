
export interface Item {
    header?: string;
    text: string;
    image?: ImageConfig;
}

export interface CardData {
    contenido: string; 
    descripcion: string;
    image?: ImageConfig;
}

export interface Contenido {
    contenido: string;
    image?: ImageConfig;
    items?: Item[];
    personas?: Persona[];
    accordion?: AccordionItem[];
    card?: CardData[]; 
}

export interface Persona {
    foto: string;
    nombre: string;
    rol: string;
    proyecto: string;
    extra?: string[];
}

export interface ImageConfig {
    name: string;
    border: boolean;
}

export interface Alumno {
    nombre: string;
    cargo: string;
    asignacion: string;
    linkedif: string;
    periodoAsignacion: string;
    git: string;
    image?: ImageConfig;
}
export interface AccordionItem {
    anio: string;
    alumnos: Alumno[];
}

export interface Contenido {
    contenido: string;
    image?: ImageConfig;
    items?: Item[];
    personas?: Persona[];
    accordion?: AccordionItem[];
}

export interface Section {
    id: string;
    nombre: string;
    contenidos: Contenido[];
    image?: ImageConfig;
}

export interface SectionsProps {
    sections: Section[];
}
