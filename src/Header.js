import React from 'react';

export default function Header() {
    return (
        <nav>
            <div class="nav-wrapper indigo lighten-2">
                <a href="/" class="brand-logo">Casa do Código</a>
                <ul id="nav-mobile" class="right">
                    <li><a href="/autores">Autores</a></li>
                    <li><a href="/livros">Livros</a></li>
                    <li><a href="/sobre">Sobre</a></li>
                </ul>
            </div>
        </nav>
    );
}