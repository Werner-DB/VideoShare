import styles from '../styles/Chat.module.css'
import MsgList from '../utils/socket_client'

export default function Chat() {
    return(
        <div className={styles.card}>
            <MsgList/>

        </div>
    )
    
}