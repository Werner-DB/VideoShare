import styles from '../styles/Chat.module.css'
import Socket from '../utils/socket_client'

export default function Chat() {
    return(
        <div className={styles.card}>
            <Socket/>

        </div>
    )
    
}