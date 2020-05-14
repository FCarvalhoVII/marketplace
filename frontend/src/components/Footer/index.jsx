import React from 'react'
import { DiGithubBadge } from 'react-icons/di'

import './styles.css'

function Footer() {
    return (
        <footer>
            <p>© 2020 - Desenvolvido por Felipe Carvalho</p>
            <a href="https://github.com/FCarvalhoVII">
                <p><DiGithubBadge size={20} />- Dev. JavaScript FullStack</p>
            </a>
        </footer>
    )
}

export default Footer