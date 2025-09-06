export default function Banners(){
    return (
        <div className="p-4 flex flex-col items-center gap-4 md:grid md:grid-cols-2 lg:gap-4 lg:h-[700px]">
            <div className="w-[280px] h-[280px] bg-zinc-400 p-2 md:w-full lg:h-full">Banner 1</div>
            <div className="w-[280px] h-[280px] bg-zinc-400 p-2 md:w-full lg:h-full">Banner 2</div>
            <div className="w-[280px] h-[280px] bg-zinc-400 p-2 col-start-1 col-end-3 md:w-full lg:h-full">Banner 3</div>
        </div>
    )
}