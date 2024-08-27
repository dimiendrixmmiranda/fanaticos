import Navbar from "./Navbar";

export default function Main(props: any){
    return (
        <main className="min-h-screen">
            {props.children}
        </main>
    )
}