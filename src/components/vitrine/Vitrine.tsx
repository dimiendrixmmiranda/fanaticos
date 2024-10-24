'use client'
import React, { useState } from "react";
import { Paginator, PaginatorPageChangeEvent  } from 'primereact/paginator';
import { listaDeProdutos } from "@/core/constants";
import Card from "../card/Card";
import style from './vitrine.module.css'
import ElementoFiltro from "../elementoFiltro/ElementoFiltro";

export default function Vitrine() {
    const [first, setFirst] = useState(0);
    const [rows, setRows] = useState(12);
    const [filtros, setFiltros] = useState(
        {
            clube: false,
            camisa: false,
            agasalho: false,
            chaveiro: false,
            box: false,
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
            if (filtros.camisa && produto.categoria.toLowerCase() === 'camisa') return true;
            if (filtros.agasalho && produto.categoria.toLowerCase() === 'agasalho') return true;
            if (filtros.chaveiro && produto.categoria.toLowerCase() === 'chaveiro') return true;
            if (filtros.box && produto.categoria.toLowerCase() === 'box') return true;
            if (filtros.clube && produto.tipoCamisa.toLowerCase() === 'clube') return true;
            if (filtros.selecao && produto.tipoCamisa.toLowerCase() === 'selecao') return true;
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
            return !filtros.chaveiro && !filtros.agasalho && !filtros.box && !filtros.camisa && !filtros.clube && !filtros.selecao && !filtros.nike && !filtros.puma && !filtros.adidas && !filtros.brasil && !filtros.inglaterra && !filtros.alemanha && !filtros.franca && !filtros.italia && !filtros.espanha && !filtros.outros // Se nenhum filtro estiver ativo, mostra todos os produtos
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
                <form onSubmit={aplicarFiltros} className="flex flex-col gap-8">
                    <fieldset className="flex flex-col flex-wrap gap-2">
                        <h3>Tipo do Produto:</h3>
                        <div className="grid gap-2 grid-cols-2 md:grid-cols-4 lg:grid-cols-2 g:grid-cols-3">
                            <ElementoFiltro id="camisa" filtro={filtros.camisa} onchange={handleFilterChange}></ElementoFiltro>
                            <ElementoFiltro id="agasalho" filtro={filtros.agasalho} onchange={handleFilterChange}></ElementoFiltro>
                            <ElementoFiltro id="chaveiro" filtro={filtros.chaveiro} onchange={handleFilterChange}></ElementoFiltro>
                            <ElementoFiltro id="box" filtro={filtros.box} onchange={handleFilterChange}></ElementoFiltro>
                        </div>
                    </fieldset>
                    <fieldset className="flex flex-col flex-wrap gap-2">
                        <h3>Tipo da Camisa:</h3>
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
                    <button type="submit" className="w-full uppercase font-bold bg-[--primaria] text-white text-2xl py-1">Buscar</button> {/* Botão que ativa os filtros */}
                </form>
            </div>

            {/* Lista de produtos exibidos */}
            <ul data-estilo="produtos" className="flex flex-wrap justify-center gap-1 max-w-[900px] xl:justify-start xl:gap-5">
                {
                    produtosExibidos.length > 0 ? produtosExibidos.map(produto => (
                        <Card produto={produto} key={produto.id} estilo="border border-2 border-[--secundaria] text-black flex flex-col p-2 w-[150px] sm:w-[190px] sm:h-[330px] lg:w-[220px] lg:h-[340px] xl:w-[205px] xl:h-[345px]" estiloImg="sm:h-[170px] lg:h-[180px]"></Card>
                    )) :
                        <h1 className="text-black text-4xl text-center mx-auto">Produto não encontrado</h1>
                }
            </ul>
            {/* Paginação */}
            <div data-estilo="paginacao" className="card w-full">
                <Paginator first={first} rows={rows} totalRecords={produtosFiltrados.length} rowsPerPageOptions={[8, 16, 24]} onPageChange={onPageChange} />
            </div>
        </div>
    );
}
