import styles from './Tag.module.css'

function Tag({tagName}){
    return (
        <span className={styles.tags}>
            {tagName}
        </span>
    )
}

export default Tag