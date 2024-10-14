'use client'
import React, { useState } from "react";
import { Paginator, PaginatorPageChangeEvent  } from 'primereact/paginator';
import { listaDeProdutos } from "@/core/constants";
import Card from "../card/Card";
import ElementoFiltro from "../filtro/ElementoFiltro";
import style from './vitrine.module.css'

export default function Vitrine() {
    const [first, setFirst] = useState(0);
    const [rows, setRows] = useState(12);
    const [filtros, setFiltros] = useState(
        {
            clube: false,
            selecao: false,
            nike: false,
            adidas: false,
            puma: false,
            umbro: false,
            newBalance: false,
            brasil: false,
            alemanha: false,
            inglaterra: false,
            espanha: false,
            italia: false,
            franca: false,
            outros: false,
        });
    const [produtosFiltrados, setProdutosFiltrados] = useState(listaDeProdutos);

    const onPageChange = (event: PaginatorPageChangeEvent ) => {
        setFirst(event.first);
        setRows(event.rows);
    };

    // Captura os filtros selecionados e atualiza o estado
    const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFiltros({
            ...filtros,
            [e.target.id]: e.target.checked // Atualiza o estado dos filtros quando os checkboxes são clicados
        });
    };

    // Função chamada ao clicar no botão de Filtrar
    const aplicarFiltros = (e: React.FormEvent) => {
        e.preventDefault(); // Impede o comportamento padrão de envio do formulário
        // Aplica os filtros baseados no estado atual dos checkboxes
        const produtosFiltradosAtualizados = listaDeProdutos.filter(produto => {
            if (filtros.clube && produto.tipo.toLowerCase() === 'clube') return true;
            if (filtros.selecao && produto.tipo.toLowerCase() === 'selecao') return true;
            if (filtros.nike && produto.marca.toLowerCase() === 'nike') return true;
            if (filtros.puma && produto.marca.toLowerCase() === 'puma') return true;
            if (filtros.adidas && produto.marca.toLowerCase() === 'adidas') return true;
            if (filtros.brasil && produto.pais.toLowerCase() === 'brasil') return true;
            if (filtros.alemanha && produto.pais.toLowerCase() === 'alemanha') return true;
            if (filtros.inglaterra && produto.pais.toLowerCase() === 'inglaterra') return true;
            if (filtros.espanha && produto.pais.toLowerCase() === 'espanha') return true;
            if (filtros.italia && produto.pais.toLowerCase() === 'italia') return true;
            if (filtros.franca && produto.pais.toLowerCase() === 'franca') return true;
            if (filtros.outros && produto.pais.toLowerCase() === 'outros') return true;
            return !filtros.clube && !filtros.selecao && !filtros.nike && !filtros.puma && !filtros.adidas && !filtros.brasil && !filtros.inglaterra && !filtros.alemanha && !filtros.franca && !filtros.italia && !filtros.espanha && !filtros.outros // Se nenhum filtro estiver ativo, mostra todos os produtos
        });
        // Atualiza o estado dos produtos filtrados
        setProdutosFiltrados(produtosFiltradosAtualizados);
        setFirst(0); // Volta para a primeira página ao filtrar
    };

    const produtosExibidos = produtosFiltrados.slice(first, first + rows);

    return (
        <div className={`${style.vitrine}`}>
            <h2 data-estilo="titulo" className="text-center w-full uppercase text-xl font-bold py-1 bg-[--primaria] lg:text-3xl">Nossa Vitrine Virtual</h2>

            {/* Formulário de filtros */}
            <div data-estilo="formulario" className="text-black flex flex-col">
                <h3 className="w-full text-center uppercase font-bold bg-[--secundaria] text-white mb-3 text-xl py-1">Filtros:</h3>
                <form onSubmit={aplicarFiltros}>
                    <fieldset className="flex flex-col flex-wrap gap-2">
                        <h3>Tipo:</h3>
                        <div className="grid gap-2 grid-cols-2 md:grid-cols-4 lg:grid-cols-2 g:grid-cols-3">
                            <ElementoFiltro id="selecao" filtro={filtros.selecao} onchange={handleFilterChange}></ElementoFiltro>
                            <ElementoFiltro id="clube" filtro={filtros.clube} onchange={handleFilterChange}></ElementoFiltro>
                        </div>
                    </fieldset>
                    <fieldset className="flex flex-col flex-wrap gap-2">
                        <h3>Marca:</h3>
                        <div className="grid gap-2 grid-cols-2 md:grid-cols-4 lg:grid-cols-2 g:grid-cols-3">
                            <ElementoFiltro id="nike" filtro={filtros.nike} onchange={handleFilterChange}></ElementoFiltro>
                            <ElementoFiltro id="adidas" filtro={filtros.adidas} onchange={handleFilterChange}></ElementoFiltro>
                            <ElementoFiltro id="puma" filtro={filtros.puma} onchange={handleFilterChange}></ElementoFiltro>
                            <ElementoFiltro id="umbro" filtro={filtros.umbro} onchange={handleFilterChange}></ElementoFiltro>
                            <ElementoFiltro id="newBalance" filtro={filtros.newBalance} onchange={handleFilterChange}></ElementoFiltro>
                        </div>
                    </fieldset>
                    <fieldset className="flex flex-col flex-wrap gap-2">
                        <h3>Competição:</h3>
                        <div className="grid gap-2 grid-cols-2 md:grid-cols-4 lg:grid-cols-2 g:grid-cols-3">
                            <ElementoFiltro id="brasil" filtro={filtros.brasil} onchange={handleFilterChange}></ElementoFiltro>
                            <ElementoFiltro id="franca" filtro={filtros.franca} onchange={handleFilterChange}></ElementoFiltro>
                            <ElementoFiltro id="alemanha" filtro={filtros.alemanha} onchange={handleFilterChange}></ElementoFiltro>
                            <ElementoFiltro id="espanha" filtro={filtros.espanha} onchange={handleFilterChange}></ElementoFiltro>
                            <ElementoFiltro id="italia" filtro={filtros.italia} onchange={handleFilterChange}></ElementoFiltro>
                            <ElementoFiltro id="inglaterra" filtro={filtros.inglaterra} onchange={handleFilterChange}></ElementoFiltro>
                        </div>
                    </fieldset>
                    <button type="submit" className="w-full uppercase font-bold bg-[--primaria] text-white text-2xl py-1 mt-2">Buscar</button> {/* Botão que ativa os filtros */}
                </form>
            </div>

            {/* Lista de produtos exibidos */}
            <ul data-estilo="produtos" className="flex flex-wrap justify-center gap-1 max-w-[900px] xl:justify-start xl:gap-5">
                {
                    produtosExibidos.length > 0 ? produtosExibidos.map(produto => (
                        <Card produto={produto} key={produto.id} estilo="md:w-[175px] lg:w-[165px] g:w-[180px] xl:w-[200px] xl:h-[315px]" estiloImg="xl:h-[170px]"></Card>
                    )) :
                        <h1 className="text-black">Produto não encontrado</h1>
                }
            </ul>
            {/* Paginação */}
            <div data-estilo="paginacao" className="card w-full">
                <Paginator first={first} rows={rows} totalRecords={produtosFiltrados.length} rowsPerPageOptions={[8, 16, 24]} onPageChange={onPageChange} />
            </div>
        </div>
    );
}
