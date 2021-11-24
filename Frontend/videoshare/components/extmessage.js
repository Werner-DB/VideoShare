import styles from '../styles/Ext_Message.module.css'
export default function Ext_Message(props) {
    return(
        <div className={styles.card}>
            {props.message}
            
            
        </div>
    )
    
}