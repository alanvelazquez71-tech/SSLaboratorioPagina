import type { AccordionItem } from "./types";
import React from "react";

export const Accordion = ({ items }: { items: AccordionItem[] }) => {
    const [openIndex, setOpenIndex] = React.useState<number | null>(0);

    return (
        <div className="w-full space-y-3 my-6">
            {items.map((item, index) => (
                <div key={index} className="border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                    <button
                        className="w-full flex justify-between items-center p-4 bg-slate-50 hover:bg-slate-100 transition-all"
                        onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    >
                        <span className="font-bold text-blue-900 text-lg uppercase tracking-wider">
                            Generación {item.anio}
                        </span>
                        <span className={`transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                        </span>
                    </button>

                    {openIndex === index && (
                        <div className="p-5 bg-white grid grid-cols-1 md:grid-cols-2 gap-6 animate-fadeIn">
                            {item.alumnos.map((alumno, aIdx) => (
                                <div key={aIdx} className="flex flex-col sm:flex-row gap-4 p-4 border border-gray-100 rounded-lg hover:shadow-md transition-shadow bg-white">
                                    {/* Imagen del Alumno */}

                                    {alumno?.image &&
                                        <div className="shrink-0 mx-auto sm:mx-0">
                                            <img
                                                src={alumno.image?.name ? `${import.meta.env.BASE_URL}images/${alumno.image.name}` : '/default-avatar.png'}
                                                alt={alumno.nombre}
                                                className="w-20 h-20 rounded-lg object-cover border-2 border-blue-50"
                                            />
                                        </div>
                                    }


                                    {/* Información Detallada */}
                                    <div className="flex-1 text-center sm:text-left">
                                        <h4 className="font-bold text-gray-900 leading-tight mb-1 uppercase text-sm">{alumno.nombre}</h4>
                                        <div className="flex flex-wrap gap-2 mb-3">
                                            {alumno.cargo && (
                                                <span className="flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold  text-blue-800 uppercase tracking-wider ">
                                                    <span className="mr-1 opacity-70">Cargo:</span>
                                                    {alumno.cargo}
                                                </span>
                                            )}
                                            {alumno.periodoAsignacion && (
                                                <span className="flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold  text-slate-700 uppercase tracking-wider ">
                                                    <svg className="w-3 h-3 mr-1 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                                    </svg>
                                                    <span className="mr-1 opacity-70">Periodo:</span>
                                                    {alumno.periodoAsignacion}
                                                </span>
                                            )}
                                        </div>
                                        {alumno.asignacion && <p className="text-gray-500 text-xs italic mb-3">Proyecto: {alumno.asignacion}</p>}

                                        {/* Redes Sociales con Logos */}
                                        <div className="flex justify-center sm:justify-start gap-4">
                                            {alumno.git && (
                                                <a href={alumno.git} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-black transition-colors">
                                                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.041-1.412-4.041-1.412-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                                                </a>
                                            )}
                                            {alumno.linkedif && (
                                                <a href={alumno.linkedif.startsWith('http') ? alumno.linkedif : `https://linkedin.com/in/${alumno.linkedif}`} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600 transition-colors">
                                                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};
