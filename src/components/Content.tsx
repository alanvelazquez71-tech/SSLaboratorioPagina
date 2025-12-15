import React from "react"
import "./Content.css"


interface Section {
    id: String,
    nombre: String,
    contenido: String,
    items?: string[]
    personas?: string[]
}

interface Sections {
    sections: Section[]
}


export default function Content({ sections }: Sections) {
    return (
        <div id="sectionsCont" className="  " >
            {sections.map((item: Section, index: number) => {
                return (
                    <React.Fragment key={index} >
                        <section key={index} id={`${item.id}`} className={`sections`}>
                            <h2 className="" >{item.nombre}</h2>
                            <p className="mx-4  ">{item.contenido}</p>
                            {item.personas && (
                                <ul className="mx-8 space-y-4">
                                    {item.personas.map((element: any, index: number) => (
                                        <li
                                            key={index}
                                            className="flex flex-col md:flex-row md:items-center md:justify-between border-b pb-3"
                                        >
                                            {/* Foto opcional */}
                                            {element.foto && (
                                                <img
                                                    src={element.foto}
                                                    alt="Foto"
                                                    className="w-16 h-16 rounded-full object-cover mb-2 md:mb-0"
                                                />
                                            )}

                                            <div className="flex-1 md:ml-4">
                                                <p className="font-semibold">{element.nombre}</p>
                                                <p className="text-sm text-gray-700">{element.rol}</p>
                                                {element.proyecto && (
                                                    <p className="text-xs text-gray-500">
                                                        {element.proyecto}
                                                    </p>
                                                )}

                                                {/* Extras opcionales */}
                                                {element.extra && Array.isArray(element.extra) && (
                                                    <ul className="mt-2 ml-4 list-disc text-sm text-gray-600 space-y-1">
                                                        {element.extra.map((ex: string, exIndex: number) => (
                                                            <li key={exIndex}>{ex}</li>
                                                        ))}
                                                    </ul>
                                                )}
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            )}
                            {item.items && (
                                <ul className="mx-8 space-y-3 ">
                                    {item.items.map((element: any, index: number) => (
                                        <li
                                            key={index}
                                            className="text-gray-800 leading-relaxed border-l-4 border-gray-300 pl-4"
                                        >
                                            {element.text}
                                        </li>
                                    ))}
                                </ul>
                            )}


                        </section>
                        {index !== sections.length - 1 && <div className="sectionsBorder" />}
                    </React.Fragment>
                )
            }
            )}
        </div>
    )
}