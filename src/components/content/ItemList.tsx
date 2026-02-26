
import type { Item } from "./types";

export const  ItemsList = ({ items }: { items: Item[] }) => (
    <ul className="grid grid-cols-1 gap-3">
        {items.map((element, iIndex) => (
            <li
                key={iIndex}
                className="border-l-4 border-blue-900 pl-4 py-2 bg-gray-50/50 flex items-center gap-4"
            >
                {element?.image && (
                    <div className="itemImageCont">
                        <img
                            className={`itemImage ${element.image.border ? 'with-border' : ''}`}
                            src={`${import.meta.env.BASE_URL}images/${element.image.name}`}
                            alt="icon"
                        />
                    </div>
                )}
                <div className="flex flex-col gap-4">
                    <strong className="text-gray-800 leading-tight">
                        {element.header}
                    </strong>
                    <span className="text-gray-800 leading-tight">
                        {element.text}
                    </span>
                </div>
            </li>
        ))}
    </ul>
);