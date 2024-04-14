'use client'
import styles from './style.module.css'
import { useState } from 'react'
import Project from './components/project'
import Modal from './components/modal'

export default function Home(){
    const projects = [
        {
            title: "Project1",
            src: "p1.jpg",
            color: '#457427'
        },
        {
            title: "Project1",
            src: "p2.jpg",
            color: '#862445'
        },
        {
            title: "Project1",
            src: "p3.jpg",
            color: '#ea447e'
        },
        {
            title: "Project1",
            src: "p4.png",
            color: '#000000'
        },
    ]

    const [modal, setModal] = useState({active: false, index: 0})
    return(
        <main className={styles.main}>
            <div className={styles.body}>
                {
                    projects.map((project, index) => {
                        return <Project key={index} index={index} title={project.title} setModal={setModal}/>
                    })
                }
            </div>
            <Modal modal={modal} projects={projects}/>
        </main>
    )
}