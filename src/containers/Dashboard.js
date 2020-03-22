import React, { useEffect } from 'react';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import { TableCell } from '@material-ui/core';
import TableRow from '@material-ui/core/TableRow';
import TableHead from '@material-ui/core/TableHead';
import makeStyles from '@material-ui/core/styles/makeStyles';
import LinearProgress from '@material-ui/core/LinearProgress';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import HotelIcon from '@material-ui/icons/Hotel';
import { getAllLocations } from '../services/backend-rest-service';
import PaddingLayout from '../components/PaddingLayout';
import { HospitalDetail } from '../components/HospitalDetail';
import { setRawLocations } from '../store/leaflet/actions';
import { connect } from 'react-redux';

export const headCells = [
    { id: 'type', label: 'Typ', numberic: false },
    { id: 'title', label: 'Name', numberic: false },
    { id: 'street', label: 'Strasse', numberic: false },
    { id: 'postCode', label: 'PLZ', numberic: true },
    { id: 'city', label: 'Stadt', numberic: false },
    { id: 'numberOfBeds', label: 'Anzahl Betten', numberic: true },
    { id: 'freeBeds', label: 'Auslastung', numberic: true },
];

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
    tableRow: {
        cursor: 'pointer',
    }
});

const getIconForType = type => {
    switch (type) {
        case 'Hotel':
            return (<HotelIcon alt="Hotel"></HotelIcon>);
            break;
        case 'Hospital':
            return (<LocalHospitalIcon alt="Krankenhaus"></LocalHospitalIcon>);
            break;
    }
}

const getNumberOfBedsForType = (row) => {
    switch (row.type) {
        case 'Hotel':
            return row.hotel.bedsWithVentilatorWithCarpet + row.hotel.bedsWithoutVentilatorWithCarpet + row.hotel.bedsWithVentilatorOtherFLoor;
            break;
        case 'Hospital':
            return row.hospital.bedsWithVentilator + row.hospital.bedsWithoutVentilator;
            break;
    }
}
const getCellContent = (row, cellId) => {
    switch (cellId) {
        case 'street':
            return `${row.street} ${row.houseNumber}`;
            break;
        case 'type':
            return getIconForType(row.type);
            break;
        case 'numberOfBeds':
            return getNumberOfBedsForType(row);
            break;
        case 'freeBeds':
            return <LinearProgress
                variant="determinate"
                value={row.capacity}></LinearProgress>;
        default:
            return row[cellId];
    }
};

const Dashboard = props => {
    const classes = useStyles();

    const [open, setOpen] = React.useState(false);
    const [selectedRow, setSelectedRow] = React.useState(null);

    useEffect(() => {
        async function fetchRows() {
            const res = await getAllLocations();

            if (res.status === 200) {
                if (res.data.length > 0) {
                    const mockCapacity = res.data.map(location => ({
                        ...location,
                        capacity: Math.floor(Math.random() * 100)
                    }));
                    props.setRawLocations(mockCapacity);
                }
            }
        }

        fetchRows();
    }, []);

    function handleClickOpen(index) {
        setOpen(true);
        setSelectedRow(index)
    };
    const handleClose = () => {
        setOpen(false);
    };
    return (<PaddingLayout>
        <TableContainer component={Paper}>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        {headCells.map(cell => (
                            <TableCell><strong>{cell.label}</strong></TableCell>
                        ))}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.rawLocations ? props.rawLocations.map((row, index) => (
                        <TableRow key={row.id} onClick={() => handleClickOpen(index)} hover={true}
                                  className={classes.tableRow}>
                            {headCells.map(cell => (
                                <TableCell>{getCellContent(row, cell.id)}</TableCell>
                            ))}
                        </TableRow>
                    )) : null}
                </TableBody>
            </Table>
        </TableContainer>
        <Dialog
            open={open}
            onClose={handleClose}
            fullWidth={true}
            maxWidth="md"
        >
            {props.rawLocations ?
                <>
                    <DialogTitle>{props.rawLocations[selectedRow] && props.rawLocations[selectedRow].title}</DialogTitle>
                    <HospitalDetail location={props.rawLocations[selectedRow]}></HospitalDetail>
                    <DialogActions>
                        <Button onClick={handleClose} color="primary">
                            Ok
                        </Button>
                    </DialogActions></> : null}

        </Dialog>
    </PaddingLayout>)
};


const mapStateToProps = state => ({
    rawLocations: state.leaflet.rawLocations,
})

const mapDispatchToProps = {
    setRawLocations
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);

