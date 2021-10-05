import React, { useState } from 'react'

import Menu from './Menu'

import '../../styles/components/template/header.scss'

export default function Header() {

    return (
        <div className="container-header">
            <div>
                Header
            </div>

            <div id="container-variety">
                <Menu />
            </div>
        </div>
    )
}
