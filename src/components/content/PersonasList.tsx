import type {Persona} from "./types";

export const PersonaList = ({ personas }: { personas: Persona[] }) => (
    <ul className="space-y-4 mb-6">
        {personas.map((element, pIndex) => (
            <li key={pIndex} className="flex items-center gap-4 border-b border-gray-200 pb-3">
                {element.foto && (
                    <img
                        src={element.foto}
                        alt={element.nombre}
                        className="w-14 h-14 rounded-full object-cover shadow-sm"
                    />
                )}
                <div>
                    <p className="font-bold text-gray-900">{element.nombre}</p>
                    <p className="text-sm text-blue-800 font-medium">{element.rol}</p>
                    {element.proyecto && <p className="text-xs text-gray-500">{element.proyecto}</p>}
                </div>
            </li>
        ))}
    </ul>
);