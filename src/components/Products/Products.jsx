import React from 'react';
import { Outlet } from 'react-router-dom';
export default function Products() {

    return (
        <div>
            Products Component
            <Outlet/>
        </div>
    )
}
