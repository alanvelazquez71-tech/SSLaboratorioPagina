import "./Content.css"


interface Section {
    id: String,
    nombre: String,
    contenido: String,
    items: string[]
}

interface Sections {
    sections: Section[]
}


export default function Content({ sections }: Sections) {
    return (
        <div id="sections" >

            {sections.map((item: Section, index: number) =>
                <section key={index} id={`${item.id}`} className={`${item.id}`}>
                    <h2>{item.nombre}</h2>
                    <p>{item.contenido}</p>
                    {item.items ?
                        <ul>
                            {item.items.map((element: string, index: number) => (
                                <li key={index}>{element}</li>
                            ))}
                        </ul>
                        :
                        null
                    }
                </section>
            )}

        </div>
    )
}