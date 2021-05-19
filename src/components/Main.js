import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Tab from './Tab';
import Control from './Control';
import Control2 from './Control2';
import Table from './Table';
import AccordionTable from './AccordionTable';


export default function Main() {
    return (
        <div>
            <Tab />
            <Route exact path="/">
                <Control />
                <Table />
            </Route>
            <Route exact path="/:id">
                <Control2 />
                <AccordionTable />
            </Route>
        </div>
    );
}