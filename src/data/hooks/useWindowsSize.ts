// hooks/useWindowSize.ts
'use client'

import { useEffect, useRef, useState } from 'react'

type Size = { width: number; height: number }
type Options = {
    debounce?: number
    persistent?: boolean
    storageKey?: string
    initial?: Size
}

export default function useWindowSize(options: Options = {}) {
    const { debounce = 0, persistent = false, storageKey = 'window_size', initial } = options

    const getInitial = (): Size => {
        if (typeof window === 'undefined') {
            return initial ?? { width: 0, height: 0 }
        }

        if (persistent) {
            const raw = localStorage.getItem(storageKey)
            if (raw) {
                try {
                    const parsed = JSON.parse(raw)
                    return { width: parsed.width ?? window.innerWidth, height: parsed.height ?? window.innerHeight }
                } catch {
                    /* ..... */
                }
            }
        }

        return { width: window.innerWidth, height: window.innerHeight }
    }

    const [size, setSize] = useState<Size>(getInitial)
    const timeoutRef = useRef<number | null>(null)
    const rafRef = useRef<number | null>(null)

    useEffect(() => {
        if (typeof window === 'undefined') return

        function updateSize() {
            const next = { width: window.innerWidth, height: window.innerHeight }

            if (debounce > 0) {
                if (timeoutRef.current) window.clearTimeout(timeoutRef.current)
                timeoutRef.current = window.setTimeout(() => {
                    setSize(next)
                    if (persistent) localStorage.setItem(storageKey, JSON.stringify(next))
                }, debounce)
            } else {
                if (rafRef.current) cancelAnimationFrame(rafRef.current)
                rafRef.current = requestAnimationFrame(() => {
                    setSize(next)
                    if (persistent) localStorage.setItem(storageKey, JSON.stringify(next))
                })
            }
        }

        window.addEventListener('resize', updateSize)
        window.addEventListener('orientationchange', updateSize)

        updateSize()

        return () => {
            window.removeEventListener('resize', updateSize)
            window.removeEventListener('orientationchange', updateSize)
            if (timeoutRef.current) window.clearTimeout(timeoutRef.current)
            if (rafRef.current) cancelAnimationFrame(rafRef.current)
        }
    }, [debounce, persistent, storageKey])

    const isMobile = size.width < 768
    const isTablet = size.width >= 768 && size.width < 1024
    const isDesktop = size.width >= 1024

    return { ...size, isMobile, isTablet, isDesktop }
}
