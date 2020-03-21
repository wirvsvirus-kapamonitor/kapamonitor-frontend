import React from "react";
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import {TableCell} from "@material-ui/core";
import TableRow from "@material-ui/core/TableRow";
import TableHead from "@material-ui/core/TableHead";
import makeStyles from "@material-ui/core/styles/makeStyles";
import LinearProgress from "@material-ui/core/LinearProgress";
import {getAllLocations} from "../__MOCK__/mockData"

const headCells = [
    {id: "name", label: "Name", numberic: false},
    {id: "street", label: "Strasse", numberic: false},
    {id: "streetNr", label: "Hausnummer", numberic: false},
    {id: "zipCode", label: "PLZ", numberic: true},
    {id: "city", label: "Stadt", numberic: false},
    {id: "numberOfBeds", label: "Anzahl Betten", numberic: true},
    {id: "freeBeds", label: "Verfügbare Betten", numberic: true},
];

const calcCapacity = row => (1 - row.freeBeds / row.numberOfBeds); // 0=all beds free, 1=all beds full

const capacityColor = capacity => {
    // TODO: the progress indicator only knows primary/secondary as colors. Need to write custom css for capacity states
    if (capacity <= 0.1) return "secondary"; // critical capactiy (red)
    if (capacity <= 0.5) return "secondary"; // medium capacity (yellow)
    return "primary"
};

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

const Dashboard = props => {
    const classes = useStyles();

    // TODO: rows should be fetched from server and put in via props
    const rows = getAllLocations();

    return (<div>
        <TableContainer component={Paper}>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        {headCells.map(cell => (
                            <TableCell><strong>{cell.label}</strong></TableCell>
                        ))}
                        <TableCell><strong>Auslastung</strong></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map(row => (
                        <TableRow key={row.id}>
                            {headCells.map(cell => (
                                <TableCell>{row[cell.id]}</TableCell>
                            ))}
                            <TableCell>
                                <LinearProgress
                                    variant="determinate"
                                    color={capacityColor(calcCapacity(row))}
                                    value={calcCapacity(row) * 100}></LinearProgress>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    </div>)
};

export default Dashboard;