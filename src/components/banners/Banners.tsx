export default function Banners(){
    return (
        <div className="p-4 flex flex-col items-center gap-4 md:grid md:grid-cols-2 lg:gap-2">
            <div className="w-[280px] h-[280px] bg-zinc-400 p-2 lg:w-[240px] lg:h-[240px] xl:w-full">Banner 1</div>
            <div className="w-[280px] h-[280px] bg-zinc-400 p-2 lg:w-[240px] lg:h-[240px] xl:w-full">Banner 2</div>
            <div className="w-[280px] h-[280px] bg-zinc-400 p-2 col-start-1 col-end-3 lg:h-[230px] lg:w-full">Banner 3</div>
        </div>
    )
}