"use client";

import React from "react";
import { WobbleCard } from "../ui/wobble-card";

export default function Banners() {
    return (
        <div className="p-4 h-[1000px] grid grid-cols-1 lg:grid-cols-4 gap-4 max-w-7xl mx-auto w-full lg:h-[700px]">
            <WobbleCard
                containerClassName="lg:col-start-1 lg:col-end-3"
            >
                <div className="flex justify-center items-center h-full w-full">
                    <h2>Banner 1</h2>
                </div>
            </WobbleCard>
            <WobbleCard containerClassName="lg:col-start-3 lg:col-end-5">
                <div className="flex justify-center items-center h-full w-full">
                    <h2>Banner 2</h2>
                </div>
            </WobbleCard>
            <WobbleCard containerClassName="col-span-1 lg:col-span-5 bg-blue-900">
                <div className="flex justify-center items-center h-full w-full">
                    <h2>Banner 3</h2>
                </div>
            </WobbleCard>
        </div>
    )
}