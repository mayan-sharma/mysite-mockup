import styles from './styles/Sidebar.module.css';
import dashboard from '../assets/dashboard_24px.png';
import bag from '../assets/business_center_24px.png';
import shield from '../assets/security_24px.png';

export default function SideBar() {
    return (
        <div className={styles.container}>
            <ul>
                <li>
                    <img src={dashboard} />
                    <p>Projects</p>
                </li>
                <li>
                    <img src={bag} />
                    <p>Organization Profile</p>
                </li>
                <li>
                    <img src={shield} />
                    <p active={true}>Access Control</p>
                </li>
            </ul>
        </div>
    );
}