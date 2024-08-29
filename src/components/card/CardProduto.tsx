import { FaStar } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";

// CardProduto vai receber um link como props
export default function CardProduto() {
    const imgs: string[] = [
        'https://static.vecteezy.com/ti/vetor-gratis/t2/9287681-vector-black-tecido-textura-fundo-vetor.jpg',
        'https://imagens.usp.br/wp-content/uploads/Campus-15-Foto-Marcos-Santos20101220_066.jpg',
        'https://static-cse.canva.com/blob/612127/bancodeimagensgratis1.png'
    ];
    return (
        <div className="bg-zinc-200 text-black p-2 overflow-hidden flex flex-col max-w-[240px]">
            <div className="w-full h-[210px] overflow-hidden flex justify-center items-center">
                <img src="foto.jpg" alt="" className="object-contain" />
            </div>
            <div className="card-description w-full mt-2">
                <h2 className="leading-4 font-bold uppercase col-[1/3] text-lg">Camisa Celtics 24/25</h2>
                <p className="text-[.75em] leading-3 col-[1/3] mt-1">Camisa número 1 do Celtics para a temporada 24/25</p>
                <div className="flex col-[1/3] my-2">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                </div>
                <div className="flex justify-center flex-col gap-1 col-[1/2]">
                    <span className="line-through text-[.7rem] leading-3">R$159,90</span>
                    <span className="leading-4 text-xl font-bold">R$139,90</span>
                    <span className="leading-4 text-[.8rem]">ou 6x R$24,75</span>
                </div>
                <div className="flex flex-col items-center gap-1">
                    <button className="p-2 rounded-full text-sm border border-black bg-red-500 text-white"><FaHeart className="hover:text-red-800"/></button>
                    <button className="p-2 rounded-full text-sm border border-black bg-green-800 text-white"><FaCartPlus className="hover:text-green-200"/></button>
                </div>
            </div>
        </div>
    )
}