import styles from './styles/AccordionTable.module.css';
import AccordionTableRow from './AccordionTableRow';

export default function AccordionTable() {
    return (
        <table className={styles.container}>            
            <tr>    
                <td>
                    Department/Role Name
                </td>
                <td>Access Level</td>
                <td>Summary</td>
                <td>Last Updated</td>
                <td></td>
            </tr>
            <AccordionTableRow title="Budget" access="All Access" summary="View | Create | Edit | Delete" time="1" />
            <AccordionTableRow title="Bidding" access="All Access" summary="-" time="1" />
            <AccordionTableRow title="Vendor Portal" access="Restricted Access" summary="View | Create" time="1" />
            <AccordionTableRow title="Purchase Order/Work Order" access="Restricted Access" summary="View | Create" time="1" />
            <AccordionTableRow title="Organisational Profile" access="All Access" summary="View | Create | Edit | Delete" time="1" />
            <AccordionTableRow title="Permissions & Access Control" access="All Access" summary="-" time="1" />
        </table>
    );
}