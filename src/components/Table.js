import styles from './styles/Table.module.css';
import TableRow from './TableRow';

export default function Table() {
    return (
        <table className={styles.container}>
            <tr>
                <td>
                    Department/Role Name
                </td>
                <td>Access Level</td>
                <td>No of members</td>
                <td>Last Updated</td>
                <td></td>
            </tr>
            <TableRow title="Management Teams" access="All Access" no="4" time="1" />
            <TableRow title="Procurement Team" access="Restricted Access" no="8" time="1" />
            <TableRow title="Project Team" access="Restricted Access" no="16" time="1" />
            <TableRow title="IT Team" access="Restricted Access" no="4" time="1" />
            <TableRow title="Super Admin" access="All Access" no="1" time="1" />
        </table>
    );
}