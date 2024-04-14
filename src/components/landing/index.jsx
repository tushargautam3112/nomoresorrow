'use client'
import Image from "next/image";
import styles from "./style.module.css";
import { useEffect,useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

export default function Home() {
  const firsText = useRef(null)
  const secText = useRef(null)
  const slider = useRef(null)

  let xPercent =0, direction = -1

  useEffect(()=>{
    gsap.registerPlugin(ScrollTrigger)
    requestAnimationFrame(animation)

    gsap.to(slider.current,{
      scrollTrigger:{
        trigger: document.documentElement,
        start: 0,
        end: window.innerHeight,
        scrub: 0.25,
        onUpdate: e => direction = e.direction * -1
      },
      x:"-300px",
    })
  },[])

  const animation = () => {
    if(xPercent <= -100) xPercent=0
    if(xPercent > 0) xPercent= -100

    gsap.set(firsText.current,{xPercent: xPercent})
    gsap.set(secText.current,{xPercent: xPercent})
    xPercent += 0.06 * direction
    requestAnimationFrame(animation)
  }

  return (
    <main className={styles.main}>
      <Image
        fill={true}
        src='/images/oreo.jpg'
        alt='image'
      />
      <div className={styles.sliderContainer}>
        <div className={styles.slider}>
          <p ref={firsText} > Tushar Gautam -- </p>
          <p ref={secText}> Tushar Gautam -- </p>
        </div>
      </div>
    </main>
  );
}
