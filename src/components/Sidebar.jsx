import { PencilSimpleLine } from '@phosphor-icons/react'

import styles from './Sidebar.module.css'


export function Sidebar(){
    return(
        <aside className={styles.sidebar}>
            <img 
                src="https://images.unsplash.com/photo-1604964432806-254d07c11f32?auto=format&fit=crop&q=50&w=500&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                className={styles.cover}    
            />

            <div className={styles.profile}>

                <img src="https://github.com/gabrielpramalho.png" />

                <strong>Gabriel Ramalho</strong>
                <span>Web Developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilSimpleLine size={20} />
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}