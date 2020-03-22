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
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";

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
    const [open, setOpen] = React.useState(false);
    const [selectedRow, setSelectedRow] = React.useState(null);

    function handleClickOpen(index) {
        setOpen(true);
        console.log(index)
        setSelectedRow(index)
    };
    const handleClose = () => {
        setOpen(false);
    };
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
                    {rows.map((row, index) => (
                        <TableRow key={row.id} onClick={() => handleClickOpen(index)}>
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
        <Dialog
            open={open}
            onClose={handleClose}
            fullWidth={true}
            maxWidth="md"
        >
            <PopupContent rows={rows} index={selectedRow}/>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Disagree
                </Button>
                <Button onClick={handleClose} color="primary">
                    Agree
                </Button>
            </DialogActions>
        </Dialog>
    </div>)
};

const PopupContent = props => {
    const row = props.rows[props.index];
    return row ? (
        <React.Fragment>
            <DialogTitle>{row.name}</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    <Grid container direction="column" spacing={3}>
                        {headCells.map(cell => (
                            <Grid item>
                                <TextField
                                    label={cell.label}
                                    defaultValue={row[cell.id]}
                                    InputProps={{
                                        readOnly: true,
                                    }}
                                />
                            </Grid>
                        ))}
                    </Grid>
                </DialogContentText>
            </DialogContent>
        </React.Fragment>
    ) : (<div>error loading</div>)
}

export default Dashboard;