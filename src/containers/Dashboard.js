import React from "react";
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import {TableCell} from "@material-ui/core";
import TableRow from "@material-ui/core/TableRow";
import TableHead from "@material-ui/core/TableHead";
import makeStyles from "@material-ui/core/styles/makeStyles";

const mockEntry = {
    name: "Hotel Adlon Kempinski",
    street: "Unter den Linden",
    streetNr: "77",
    zipCode: "10117",
    city: "Berlin",
    numberOfBeds: 250,
    freeBeds: 183
};

const headCells = [
    {id: "name", label: "Name", numberic: false},
    {id: "street", label: "Strasse", numberic: false},
    {id: "streetNr", label: "Hausnummer", numberic: false},
    {id: "zipCode", label: "PLZ", numberic: true},
    {id: "city", label: "Stadt", numberic: false},
    {id: "numberOfBeds", label: "Anzahl Betten", numberic: true},
    {id: "freeBeds", label: "Verfügbare Betten", numberic: true},
]

const rows = [
    mockEntry,
    mockEntry,
    mockEntry
];
const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});
const Dashboard = props => {
    const classes = useStyles();

    return (<div>
        <TableContainer component={Paper}>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        {headCells.map(cell=> (
                            <TableCell>{cell.label}</TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map(row => (
                        <TableRow key={row.name}>
                            {headCells.map(cell => (
                                <TableCell>{row[cell.id]}</TableCell>
                            ))}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    </div>)
}

export default Dashboard;