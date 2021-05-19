import headerLogo from '../assets/Subtract.png';
import headerText from '../assets/mYSITE.png';
import oval from '../assets/Oval.png';
import bell from '../assets/notifications_24px.png';
import help from '../assets/help_outline_24px.png';

import styles from './styles/Header.module.css';

export default function Header() {
    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <img className={styles.headerLogoImg} src={headerLogo} />
                <img className={styles.headerTextImg} src={headerText} />
            </div>
            <div>
                <div>
                    <img src={oval} />
                    <p>Kishore</p>
                </div>
                <div>
                    <img src={bell} />
                    <img src={help} />
                </div>
            </div>
        </div>
    );
}