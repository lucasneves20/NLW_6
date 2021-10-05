import React from 'react'
import { Link } from 'react-router-dom'
import "../../styles/components/template/menu.scss"

export default function Menu() {
    return (
        <aside>
            <div>
                <nav>
                    <ul>
                        <li className="Link">
                            <Link to="/" >Home</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </aside>
    )
}
