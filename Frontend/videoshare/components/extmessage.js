import styles from '../styles/Ext_Message.module.css'
export default function Ext_Message(props) {
    return (
        <div className={styles.card}>
            <div className={styles.clock}>
                <h7> {props.time}</h7>

            </div>
            <div className={styles.message}>
                <div className={styles.id}>{props.sender} :</div>
                <div className={styles.msg}>{props.message}</div>

                

            </div>
            


        </div>
    )

}