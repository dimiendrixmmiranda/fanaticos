import React from "react";

interface PrincipalProps {
    children: React.ReactNode;
}

export default function Principal(props: PrincipalProps) {
    return (
        <main className="bg-[--default]">
            {props.children}
        </main>
    );
}
