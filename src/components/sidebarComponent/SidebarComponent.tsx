
import React, { useState } from 'react';
import { Sidebar } from 'primereact/sidebar';
import { Button } from 'primereact/button';
import { GiHamburgerMenu } from 'react-icons/gi';

export default function SidebarComponent() {
    const [visibleRight, setVisibleRight] = useState(false);

    return (
        <div className="card flex justify-center items-center lg:hidden">
            <div className="flex gap-2 justify-center">
                <Button onClick={() => setVisibleRight(true)} className='text-4xl'>
                    <GiHamburgerMenu />
                </Button>
            </div>
            <Sidebar visible={visibleRight} position="right" onHide={() => setVisibleRight(false)}>
                <h2>Right Sidebar</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            </Sidebar>
        </div>
    )
}
