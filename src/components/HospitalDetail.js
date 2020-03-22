import React from "react";
import TableCell from "@material-ui/core/TableCell";
import TableBody from "@material-ui/core/TableBody";
import Table from "@material-ui/core/Table";
import TableRow from "@material-ui/core/TableRow";
import {headCells, RandomProgressBar} from "../containers/Dashboard";
import CardMedia from "@material-ui/core/CardMedia";
import makeStyles from "@material-ui/core/styles/makeStyles";
import LinearProgress from "@material-ui/core/LinearProgress";

const hideCells = ["type", "freeBeds", "numberOfBeds"];

const hospitalProperties = [
    // {id: "isEmergencyHospital", label: "Notfallklinik"},
    {id: "bedsWithVentilator", label: "Betten (mit Ventilator)"},
    {id: "bedsWithoutVentilator", label: "Betten (ohne Ventilator)"},
    {id: "barrierFree", label: "Barrierefreiheit"},
    {id: "url", label: "Link"}
];
const useStyles = makeStyles({
    media: {
        height: 140,
    },
    label: {
        width: 240,
    },
    progress: {
        width: 140,
    }

});
export const HospitalDetail = ({location}) => {
    const classes = useStyles();
    const details = headCells.filter(cell => !hideCells.includes(cell.id));
    return (
        <div>
            <CardMedia
                image="/charite.jpg"
                className={classes.media}
                title="Hospital"
            />
            <Table>
                <TableBody>
                    {details.map(cell=> (<TableRow>
                        <TableCell className={classes.label}>{cell.label}</TableCell>
                        <TableCell>{location[cell.id]}</TableCell>
                    </TableRow>))}
                    {hospitalProperties.map(cell=> (<TableRow>
                        <TableCell>{cell.label}</TableCell>
                        <TableCell>{location.hospital[cell.id] || "nicht verfügbar"}</TableCell>
                    </TableRow>))}
                    <TableRow>
                        <TableCell>Auslastung</TableCell>
                        <TableCell><div className={classes.progress}>
                            <LinearProgress
                                variant="determinate"
                                value={location.capacity}></LinearProgress>
                            </div></TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>
    );
};
