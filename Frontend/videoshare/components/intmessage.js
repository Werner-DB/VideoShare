import styles from '../styles/Int_Message.module.css'
export default function Int_Message(props) {
    return (
        <div className={styles.card}>
            <div className={styles.clock}>
                {props.time}

            </div>
            <div className={styles.message}>
                <div className={styles.id}>You :</div>
                <div className={styles.msg}>{props.message}
                    <div className={styles.state}>{props.state?"✔":"✖"}</div>
                </div>




            </div>



        </div>
    )

}