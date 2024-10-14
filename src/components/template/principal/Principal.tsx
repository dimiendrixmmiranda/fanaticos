import React from "react";

interface PrincipalProps {
    children: React.ReactNode;
}

export default function Principal(props: PrincipalProps) {
    return (
        <main className="min-h-[100vh] bg-[--default]">
            {props.children}
        </main>
    );
}
