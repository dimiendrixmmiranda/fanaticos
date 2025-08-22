import { create } from "zustand"
import { persist } from "zustand/middleware"
import { ProductType } from "./types/ProductType"

type FavoritesState = {
    favorites: ProductType[]
    isOpen: boolean
    addFavorite: (product: ProductType) => void
    removeFavorite: (product: ProductType) => void
    toggleFavorite: (product: ProductType) => void
    toggleBtnFavorite: () => void

}

export const useFavoritesStore = create<FavoritesState>()(
    persist(
        (set, get) => ({
            favorites: [],
            addFavorite: (product) =>
                set((state) => {
                    if (state.favorites.some((p) => p.id === product.id)) {
                        return state
                    }
                    return { favorites: [...state.favorites, product] }
                }),
            isOpen: false,
            removeFavorite: (product: ProductType) =>
                set((state) => ({
                    favorites: state.favorites.filter((p) => p.id !== product.id),
                })),
            toggleFavorite: (product) => {
                const { favorites } = get()
                if (favorites.some((p) => p.id === product.id)) {
                    set({ favorites: favorites.filter((p) => p.id !== product.id) })
                } else {
                    set({ favorites: [...favorites, product] })
                }
            },
            toggleBtnFavorite: () => set((state) => ({ isOpen: !state.isOpen })),

        }),
        { name: "favorites-storage" }
    )
)
