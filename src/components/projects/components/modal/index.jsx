import { useEffect, useRef } from 'react'
import style from './style.module.css'
import Image from "next/image"
import { motion } from 'framer-motion'
import gsap from 'gsap'


const scaleAnimation = {
  intial: { scale: 0, x: "-50%", y: "-50%" },
  open: { scale: 1, x: "-50%", y: "-50%", transition: { duration: 0.4, ease: [0.75, 0, 0.24, 1] } },
  closed: { scale: 0, x: "-50%", y: "-50%", transition: { duration: 0.4, ease: [0.30, 0, 0.65, 1] } },
}

export default function index({ modal, projects }) {
  const { active, index } = modal
  const container = useRef(null)
  const cursor = useRef(null)
  const cursorLabel = useRef(null)

  useEffect(() => {

    const moveContainerX = gsap.quickTo(container.current, "left", { duration: 0.8, ease: "power3" })
    const moveContainerY = gsap.quickTo(container.current, "top", { duration: 0.8, ease: "power3" })

    const moveCursorX = gsap.quickTo(cursor.current, "left", { duration: 0.5, ease: "power3" })
    const moveCursorY = gsap.quickTo(cursor.current, "top", { duration: 0.5, ease: "power3" })

    const moveCursorLabelX = gsap.quickTo(cursorLabel.current, "left", { duration: 0.45, ease: "power3" })
    const moveCursorLabelY = gsap.quickTo(cursorLabel.current, "top", { duration: 0.45, ease: "power3" })

    window.addEventListener("mousemove", (e) => {
      const { clientX, clientY } = e
      moveContainerX(clientX)
      moveContainerY(clientY)
      moveCursorX(clientX)
      moveCursorY(clientY)
      moveCursorLabelX(clientX)
      moveCursorLabelY(clientY)
    })
  }, [])

  return (
    <>
      <motion.div
        ref={container}
        variants={scaleAnimation}
        intial={'initial'}
        animate={active ? "open" : "closed"}
        className={style.modalContainer}>
        <div style={{ top: index * -100 + "%" }} className={style.modalSlider}>
          {
            projects.map((project, index) => {
              const { src, color } = project
              return <div
                key={`modal_${index}`}
                style={{ backgroundColor: color }}
                className={style.modal}>
                <Image
                  src={`/images/${src}`}
                  width={300}
                  height={300}
                  alt=''
                />
              </div>
            })
          }
        </div>
      </motion.div>
      <motion.div variants={scaleAnimation} animate={active ? "open" : "closed"} ref={cursor} className={style.cursor}></motion.div>
      <motion.div variants={scaleAnimation} animate={active ? "open" : "closed"} ref={cursorLabel} className={style.cursorLabel}>View</motion.div>
    </>
  )
}
