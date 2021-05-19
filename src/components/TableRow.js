import { Link } from 'react-router-dom';

import styles from './styles/Table.module.css';
import eye from '../assets/remove_red_eye_24px.png';

export default function TableRow({ title, access, no, time }) {
    return (
        <tr>
            <td>
                <input type="radio"></input>
                <Link to="/Management Team" style={{ textDecoration: 'none', color: '#000' }} >{title}</Link>
            </td>
            <td><span class={ access === 'All Access' ? styles.access : styles.restricted}>{access}</span></td>
            <td>{no}</td>
            <td>{time} min ago</td>
            <td><img src={eye} /></td>
        </tr>
    );
}