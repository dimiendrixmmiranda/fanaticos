interface ContainerFiltro {
    valor: string;
    categoria: string;
    onchange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    filtro: boolean;
    id?: number;
}

export default function ContainerFiltro({ valor, categoria, filtro, onchange }: ContainerFiltro) {
    return (
        <li className="flex items-center gap-1">
            <input
                type="checkbox"
                data-categoria={categoria}
                name={valor}
                id={valor}
                onChange={onchange}
                checked={filtro}
            />
            <label htmlFor={valor}>{valor}</label>
        </li>
    );
}
