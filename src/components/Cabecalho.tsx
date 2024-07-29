import CarrinhoDeCompras from "./CarrinhoDeCompras";
import Favoritos from "./Favoritos";
import InputBuscar from "./InputBuscar";
import Login from "./Login";
import Logo from "./Logo";

export default function Cabecalho() {
    return (
        <header className="h-20 p-2 flex items-center" style={{ backgroundColor: 'var(--vermelho-1)' }}>
            <Logo />
            <InputBuscar />
            <Login />
            <Favoritos />
            <CarrinhoDeCompras />
        </header>

    )
}