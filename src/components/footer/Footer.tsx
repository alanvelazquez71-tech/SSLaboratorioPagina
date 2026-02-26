


export default function Footer({ footer }:any) {

  return (
    <div id={footer.id} className={footer.id}>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {footer.secciones.map((section:any, index:any) => (
          <div key={index}>
            <h3 className="text-xl font-bold mb-4 border-b border-white/30 pb-2">
              {section.nombre || section.titulo}
            </h3>
            
            <ul className="flex flex-col gap-2 text-sm leading-relaxed">
              {section.items?.map((item:any, itemIndex:any) => {
                switch (item.tipo) {
                  case "correo":
                    return (
                      <li key={itemIndex}>
                        <span className="font-semibold">Correo:</span> {item.texto}
                      </li>
                    );


                  case "ubicacion":
                    return (
                      <li key={itemIndex}>
                        <span className="font-semibold">Ubicación:</span> {item.texto}
                      </li>
                    );


                  case "link":
                    return (
                      <li key={itemIndex}>
                        <a
                          href={item.href}
                          target="_blank"
                          className="text-blue-200 hover:underline"
                        >
                          {item.texto}
                        </a>
                      </li>
                    );


                  default:
                    return <li key={itemIndex}>{item.texto || item}</li>;
                }
              })}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}