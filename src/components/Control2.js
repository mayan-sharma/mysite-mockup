import { Link, useLocation } from 'react-router-dom'

import back from '../assets/arrow_back_24px.png';
import edit from '../assets/edit_24px.png';
import styles from './styles/Control2.module.css';

export default function Control2() {
    
    const { pathname } = useLocation();
    
    return (
        <div className={styles.container}>
            <Link to="/"><img src={back} /></Link>
            <p>{pathname.substring(1)}</p>
            <img src={edit} />
        </div>
    );
}