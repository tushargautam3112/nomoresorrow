import styles from './style.module.css'

export default function index({index, title, setModal}){
    return (
        <div className={styles.project}
         onMouseEnter={()=>{setModal({active: true,index: index})}}
         onMouseLeave={()=>{setModal({active: false,index: index})}}
         >
            <h2>{title}</h2>
            <p>design and technology</p>
        </div>
    )
}