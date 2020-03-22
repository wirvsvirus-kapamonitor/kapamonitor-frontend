import React, {useEffect} from "react";
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import {TableCell} from "@material-ui/core";
import TableRow from "@material-ui/core/TableRow";
import TableHead from "@material-ui/core/TableHead";
import makeStyles from "@material-ui/core/styles/makeStyles";
import LinearProgress from "@material-ui/core/LinearProgress";
// import {getAllLocations} from "../__MOCK__/mockData"
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import HotelIcon from '@material-ui/icons/Hotel';
import {getAllLocations} from "../services/backend-rest-service";


const headCells = [
    {id: "type", label: "Typ", numberic: false},
    {id: "title", label: "Name", numberic: false},
    {id: "street", label: "Strasse", numberic: false},
    {id: "postCode", label: "PLZ", numberic: true},
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

const getIconForType = type => {
    switch (type) {
        case "Hotel":
            return (<HotelIcon alt="Hotel"></HotelIcon>);
            break;
        case "Hospital":
            return (<LocalHospitalIcon alt="Krankenhaus"></LocalHospitalIcon>);
            break;
    }
}

const getNumberOfBedsForType = (row) => {
    switch (row.type) {
        case "Hotel":
            return row.hotel.bedsWithVentilatorWithCarpet + row.hotel.bedsWithoutVentilatorWithCarpet + row.hotel.bedsWithVentilatorOtherFLoor;
            break;
        case "Hospital":
            return row.hospital.bedsWithVentilator + row.hospital.bedsWithoutVentilator;
            break;
    }
}

const getCellContent = (row, cellId) => {
    switch (cellId) {
        case "street":
            return `${row.street} ${row.houseNumber}`;
            break;
        case "type":
            return getIconForType(row.type);
            break;
        case "numberOfBeds":
            return getNumberOfBedsForType(row);
            break;
        default:
            return row[cellId];
    }
};

const Dashboard = props => {
    const classes = useStyles();

    const [rows, setRows] = React.useState([]);
    const [open, setOpen] = React.useState(false);
    const [selectedRow, setSelectedRow] = React.useState(null);

    useEffect(() => {
        async function fetchRows() {
            const res = await getAllLocations();
            setRows(res.data);
        }

        fetchRows();
    }, []);

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
                        <TableRow key={row.id} onClick={() => handleClickOpen(index)} hover={true}>
                            {headCells.map(cell => (
                                <TableCell>{getCellContent(row,  cell.id)}</TableCell>
                            ))}
                            <TableCell>
                                {row.type !== "unknown" && <LinearProgress
                                    variant="determinate"
                                    color={capacityColor(calcCapacity(row))}
                                    value={calcCapacity(row) * 100}></LinearProgress>}
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