import styles from './styles/Tab.module.css';
import wifi from '../assets/rss_feed_24px.png';
import matrix from '../assets/view_module_24px.png';
import refresh from '../assets/sync_24px.png';

export default function Tab() {
    return (
        <div className={styles.container}>
            <div>
                <div className={styles.tab}>
                    <img src={wifi} />
                    <p>Permissions</p>
                </div>
                <div className={styles.tab}>
                    <img src={matrix} />
                    <p>Apporval Matrix</p>
                </div>
               </div>
            <div>
                <img src={refresh} />
                <p>Last synced 15 mins ago</p>
            </div>
        </div>
    );
}