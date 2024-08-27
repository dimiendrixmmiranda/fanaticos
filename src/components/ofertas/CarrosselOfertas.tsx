'use client'
import { Carousel } from 'primereact/carousel';

import React, { useState, useEffect } from 'react';
import { Button } from 'primereact/button';
import { Tag } from 'primereact/tag';
import { ProductService } from '@/service/ProductService';
import CardProduto from '../card/CardProduto';
import Link from 'next/link';

export default function CarrosselOfertas() {
    const [products, setProducts] = useState([]);
    const responsiveOptions = [
        {
            breakpoint: '2560px',
            numVisible: 8,
            numScroll: 1
        },
        {
            breakpoint: '1700px',
            numVisible: 5,
            numScroll: 1
        },
        {
            breakpoint: '1200px',
            numVisible: 3,
            numScroll: 1
        },
        {
            breakpoint: '767px',
            numVisible: 2,
            numScroll: 1
        },
        {
            breakpoint: '575px',
            numVisible: 1,
            numScroll: 1
        }
    ];

    const getSeverity = (product: any) => {
        switch (product.inventoryStatus) {
            case 'INSTOCK':
                return 'success';

            case 'LOWSTOCK':
                return 'warning';

            case 'OUTOFSTOCK':
                return 'danger';

            default:
                return null;
        }
    };

    useEffect(() => {
        const productService = new ProductService();
        productService.getProductsSmall().then((data: any) => setProducts(data.slice(0, 9)));
    }, []);


    const productTemplate = (product: any) => {
        return (
            <div className='flex justify-center items-center h-full'>
                <CardProduto></CardProduto>
            </div>
        );
    };

    return (
        <div className="card mt-3">
            <h2 className='w-full bg-[--cor-azul] flex justify-center items-center uppercase text-xl xl:text-4xl font-black py-2 mb-4'>Confira as Ofertas do dia!</h2>
            <Carousel value={products} numVisible={3} numScroll={3} responsiveOptions={responsiveOptions} itemTemplate={productTemplate} autoplayInterval={6000} />
        </div>
    )
}
