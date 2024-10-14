'use client'
import { useEffect, useState } from "react";

export default function useCardSlide3d() {
    const [qtdeSlide, setQtdeSlide] = useState(2);

    useEffect(() => {
        function renderHeight() {
            if (window.innerWidth < 425) {
                setQtdeSlide(1);
            } else if (window.innerWidth < 768) {
                setQtdeSlide(2);
            } else if (window.innerWidth < 1024) {
                setQtdeSlide(4);
            } else if (window.innerWidth < 1440) {
                setQtdeSlide(5);
            } else {
                setQtdeSlide(7);
            }
        }

        renderHeight();

        window.addEventListener('resize', renderHeight);

        return () => {
            window.removeEventListener('resize', renderHeight);
        };
    }, []);

    return {
        qtdeSlide,
    }
}