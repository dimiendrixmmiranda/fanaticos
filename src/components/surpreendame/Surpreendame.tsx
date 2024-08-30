export default function Surpreendame() {
    return (
        <div className="bg-[--cor-vermelho] max-w-[95%] xl:max-w-[65%] xl:mx-9 xl:my-8 xl:py-6 mx-auto p-2 flex flex-col md:flex-row">
            <div className="flex flex-col flex-1">
                <h3 className="text-2xl font-black text-center md:text-3xl">Não consegue decidir?</h3>
                <div className="h-[280px] flex justify-center items-center overflow-hidden">
                    <img src="vetorCamisa.png" alt="" className="h-full" />
                </div>
            </div>
            <div className="flex flex-col flex-1 justify-center items-center gap-4 xl:p-4">
                <p className="text-center leading-5 md:leading-6 md:text-xl md:tracking-[3px] xl:text-2xl xl:font-bold xl:leading-6">Clique em "Surpreenda-me" e descubra sua nova camisa favorita! Deixe o destino escolher por você!</p>
                <button className="uppercase bg-[--cor-azul] w-full font-black tracking-[2px] text-2xl py-2 mt-2">Surpreenda-me!</button>
                <div className="h-20 w-full flex justify-around">
                    <img src="bola.png" alt="" className="h-full"/>
                    <img src="bola.png" alt="" className="h-full"/>
                    <img src="bola.png" alt="" className="h-full"/>
                    <img src="bola.png" alt="" className="h-full hidden sm:block"/>
                    <img src="bola.png" alt="" className="h-full hidden sm:block md:hidden xl:block"/>
                </div>
            </div>
        </div>
    )
}