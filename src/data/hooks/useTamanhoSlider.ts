'use client'
import { useEffect, useState } from "react";

export default function useTamanhoSlider() {
    const [alturaSlider, setAlturaSlider] = useState(280);

    useEffect(() => {
        function renderHeight() {
            if (window.innerWidth < 425) {
                setAlturaSlider(270);
            } else if (window.innerWidth < 768) {
                setAlturaSlider(300);
            } else if (window.innerWidth < 1024) {
                setAlturaSlider(450);
            } else if (window.innerWidth < 1440) {
                setAlturaSlider(500);
            } else {
                setAlturaSlider(550);
            }
        }

        renderHeight();

        window.addEventListener('resize', renderHeight);

        return () => {
            window.removeEventListener('resize', renderHeight);
        };
    }, []);

    return {
        alturaSlider,
    }
}