import React from "react";
import { Cards } from "./Card";
import { ItemsList } from "./ItemList";
import { SectionImage } from "./SectionImage";
import { PersonaList } from "./PersonasList";
import { Accordion } from "./Accordion";
import type { Section, SectionsProps } from "./types";


export default function Content({ sections }: SectionsProps) {
    return (
        <div id="sectionsCont" className="w-full max-w-7xl mx-auto">
            {sections.map((element: Section, index: number) => {

                return (
                    <React.Fragment key={index}>
                        <section id={element.id} className="sections">
                            <h2 className="sectionTitle">{element.nombre}</h2>

                            <div className={`sectionContent md:flex-row`}>

                                {/* LADO DEL TEXTO */}
                                {
                                    element.contenidos.map((contenido,idx) => {
                                        return (
                                            <div className="sectionText flex-1" key={idx} >

                                                <div className="flex flex-row gap-8 mb-8 ">
                                                    <p className="text-lg leading-relaxed text-gray-800 my-auto">
                                                        {contenido.contenido}
                                                    </p>
                                                    {contenido.image && (
                                                        <div className="w-[250%] max-w-5xl">
                                                            <SectionImage
                                                                image={contenido.image}
                                                                alt={element.nombre}
                                                            />
                                                        </div>
                                                    )}
                                                </div>

                                                {contenido.personas && <PersonaList personas={contenido.personas} />}

                                                {contenido.items && <ItemsList items={contenido.items} />}

                                                {contenido.accordion && <Accordion items={contenido.accordion} />}

                                                {contenido.card && <Cards cards={contenido.card} />}

                                            </div>
                                        )

                                    })
                                }

                                {/* LADO DE LA IMAGEN */}
                                {element.image && (
                                    <SectionImage image={element.image} alt={element.nombre} />
                                )}
                            </div>
                        </section>

                        {index !== sections.length - 1 && <hr className="sectionsBorder" />}
                    </React.Fragment>
                );
            })}
        </div>
    );
}