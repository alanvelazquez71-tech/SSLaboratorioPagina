import logoFES from "../../assets/logotipo_FESAragon.png"
import logoICO from "../../assets/logotipo_ICO.png"
import logoLab from "../../assets/logotipo_LaboratorioMacro.png"
import logoCIMA from "../../assets/logo_CIMA.png"

import { useState } from "react";

interface Tag {
    texto: string,
    href: string,
    tipo: string
}


interface Headers {
    titulos: Tag[],
    botones: Tag[]
}



export default function Header({ titulos, botones }: Headers) {

    const [openMobile, setOpenMobile] = useState(false);

    return (
        <header className="relative">
            <aside id="imagenes" className="header-imagenes">
                <img src="https://images.seeklogo.com/logo-png/14/2/unam-logo-png_seeklogo-144764.png" height={50} width={50} />
                <img src={logoFES} height={50} width={50} />
                <img src={logoCIMA} height={50} width={50} />
                <img src={logoICO} height={50} width={50} />
                <img src={logoLab} height={50} width={50} />
            </aside>

            {/* CONTENEDOR DE TITULOS */}
            <div id="headers" className="header-titulos ">
                {titulos?.map((item: Tag, index: number) => {

                    const tipoClass =
                        item.tipo === "h1"
                            ? "text-base font-bold text-gray-900"
                            : item.tipo === "h2"
                                ? "text-sm font-medium text-gray-600"
                                : "text-sm text-gray-500";

                    return (
                        <p key={index} className={`leading-none ${tipoClass}`}>
                            {item.texto}
                        </p>
                    );
                })}
            </div>

            {/* BOTONES EN DESKTOP */}
            <div className="header-buttons ">
                {botones?.map((item: Tag, index: number) => {

                    const baseClass = "rounded-lg transition-all duration-200 flex items-center justify-center border";

                    const estiloDinamico =
                        item.tipo === "h1"
                            ? "bg-black text-white border-black hover:bg-gray-500 text-sm px-6 py-2.5 font-semibold shadow-md"
                            : item.tipo === "h2"
                                ? "bg-white text-gray-700 border-gray-300 hover:border-black hover:text-black text-sm px-4 py-2 font-medium"
                                : "text-xs px-3 py-1";

                    return (
                        <a key={index} href={item.href} className={` ${baseClass} ${estiloDinamico} whitespace-nowrap`}>
                            {item.texto}
                        </a>
                    );
                })}
            </div>

            {/* BOTÓN HAMBURGUESA (solo móvil) */}
            <button
                className="lg:hidden p-2"
                onClick={() => setOpenMobile(!openMobile)}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="26"
                    height="26"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                >
                    <line x1="3" y1="6" x2="21" y2="6" />
                    <line x1="3" y1="12" x2="21" y2="12" />
                    <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
            </button>

            {/* BOTONES DESPLEGABLES EN MÓVIL */}
            {openMobile && (
                <div className="absolute left-0 top-full w-full bg-white shadow-md flex flex-col p-4 gap-3 lg:hidden">

                    {/* TÍTULOS colapsados */}
                    {titulos?.map((item: Tag, index: number) => (
                        <p key={index} className="text-sm text-gray-700">
                            {item.texto}
                        </p>
                    ))}

                    {/* BOTONES colapsados */}
                    {botones?.map((item: Tag, index: number) => {
                        const baseClass = "rounded-lg border p-2 text-center";
                        return (
                            <a key={index} href={item.href} className={baseClass}>
                                {item.texto}
                            </a>
                        );
                    })}
                </div>
            )}
        </header>
    );
}
