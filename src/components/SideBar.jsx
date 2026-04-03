import React from "react";
import { env } from '../config'

function SideBar() {
    return (
        <div className="sidebar">
            <h3 className="sidebar-title">Recursos</h3>
            <ul className="sidebar-links">
                <li>
                    <a href={env.VITE_DOCS_URL} target="_blank" rel="noopener noreferrer">
                        Documentación de React

                    </a>
                </li>
                <li>    
                    <a href={env.VITE_USE_TEMPLATE_URL} target="_blank" rel="noopener noreferrer">
                        Utilizar plantilla
                    </a>            
                </li>
                <li>
                    <a href={env.VITE_CODESPACE_URL} target="_blank" rel="noopener noreferrer">     
                        Abrir en Codespaces
                    </a>
                </li>
            </ul>
        </div>
    )
}