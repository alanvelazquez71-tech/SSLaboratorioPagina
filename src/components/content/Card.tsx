import type {CardData} from "./types.js"

export const Cards = ({ cards }: { cards: CardData[] }) => (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 my-8">
        {cards.map((card, index) => (
            <div
                key={index}
                className="flex flex-col md:flex-row bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
            >
                {/* Imagen de la Card */}
                {card.image && (
                    <div className="md:w-1/3 h-48 md:h-auto overflow-hidden">
                        <img
                            src={`${import.meta.env.BASE_URL}images/${card.image.name}`}
                            alt={card.contenido}
                            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                        />
                    </div>
                )}

                {/* Texto de la Card */}
                <div className="p-5 flex-1 flex flex-col justify-center">
                    <h4 className="text-blue-900 font-bold text-lg leading-tight mb-2 uppercase tracking-tight">
                        {card.contenido}
                    </h4>
                    <div className="w-12 h-1 bg-blue-600 mb-3 rounded-full"></div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                        {card.descripcion}
                    </p>
                </div>
            </div>
        ))}
    </div>
);