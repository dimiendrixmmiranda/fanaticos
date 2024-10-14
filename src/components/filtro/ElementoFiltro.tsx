import { Filtro } from "@/core/filtro/filtro";

export default function ElementoFiltro({ filtro, onchange, id }: Filtro) {
    return (
        <div className="flex flex-nowrap whitespace-nowrap gap-1 items-center leading-4">
            <input
                type="checkbox"
                id={id}
                checked={filtro}
                onChange={onchange}
            />
            <label htmlFor={id}>{id.toUpperCase()}</label>
        </div>
    )
}