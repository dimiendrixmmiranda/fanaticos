import { Submenu } from "@/core/menu/submenu"
import Image from "next/image";
import Link from "next/link";

export function renderizarSubmenu(submenu: Submenu[]) {
    return submenu?.map((submenuItem, i) => (
        <li key={i} className="p-1 lg:px-2">
            <Link href={'/'} className="gap-2 items-center py-1" style={{ display: 'grid', gridTemplateColumns: '20px 1fr' }}>
                <div className="relative h-3">
                    {submenuItem.icone != '' ? <Image alt={submenuItem.texto} src={`${submenuItem.icone}`} fill className="object-cover"></Image> : ''}
                </div>
                <p className="text-[.7em] leading-4 lg:text-[.9em] lg:leading-6">{submenuItem.texto}</p>
            </Link>
        </li>
    ));
}