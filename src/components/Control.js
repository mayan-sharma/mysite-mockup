import editImg from '../assets/edit_24px.png';
import deleteImg from '../assets/delete_24px.png';
import styles from './styles/Control.module.css';

export default function Control() {
    return (
        <div className={styles.container}>
            <button> + Add Role</button>
            <img src={editImg} />
            <img src={deleteImg} />
        </div>
    );
}