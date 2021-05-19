import { useState } from 'react';
import plus from '../assets/add_circle_outline_24px.png';
import styles from './styles/AccordionTable.module.css';


export default function AccordionTableRow({ title, access, summary, time }) {
    
    const [visible, setVisible] = useState(false);
    const [accessVal, setAccessVal] = useState(access);

    const accordionHandler = () => {
        setVisible(!visible);
    }

    const accessHandler = (e) => {
        setAccessVal(e.target.value);
    }
    
    return (
        <>
            <tr>
                <td>
                    <img onClick={accordionHandler} src={plus} />
                    {title}                
                </td>
                <td><span className={accessVal === 'All Access' ? styles.access : styles.restricted}>{accessVal}</span></td>
                <td>{summary}</td>
                <td>{time} min ago</td>
                <td>
                    <label class={styles.switch}>
                        <input type="checkbox" />
                        <span class={styles.slider}></span>
                    </label>
                </td>
            </tr>
            { visible && 
                <tr>
                    <p className={styles.accordionHead}>All aspects in the {title} mode</p>
                    <div className={styles.accordionData}>
                        <div>
                            <p>Access Control</p>
                            <input type="radio" onChange={accessHandler} value="All Access" name="access" /> All Access
                            <br></br>
                            <p className={styles.light}>Can access all items</p>
                            <input type="radio" onChange={accessHandler} value="Restricted" name="access" /> Restricted
                            <p className={styles.light}>Can access only assigned or created items</p>
                        </div>
                    </div>
                </tr>
            }
        </>
    );
}