import React from 'react';
import { Menu } from '../components/Menu/Menu';
import { renderRoutes } from 'react-router-config';

export const MainLayout = (props) => {
    return (
        <div>
            <aside>
                <nav>
                    <Menu />
                </nav>
            </aside>
            <main>
                {renderRoutes(props.route.routes)}
            </main>
        </div>
    )
}