import React, { useState } from 'react';
import { Map, TileLayer } from 'react-leaflet';
import MarkerCluster from './MarkerCluster';
import { makeStyles } from '@material-ui/core/styles';

const position = [52.520, 13.404];
const mapStyle = { height: '90vh' };

var myCustomArray = [
    {
        position: { lng: 13.380171, lat: 52.516101 },
        text: 'Hotel Adlon',
        workload: 60
    },
    {
        position: { lng: 13.388807, lat: 52.519568 },
        text: 'Hotel NH Collection',
        workload: 80
    },
    {
        position: { lng: 13.389649, lat: 52.520456 },
        text: 'Hotel Euro Star',
        workload: 40
    },
    {
        position: { lng: 13.394174, lat: 52.515826 },
        text: 'Hotel de Rome',
        workload: 20
    }
];
const useStyles = makeStyles(theme => ({
    root: {
        margin: 0,
        padding: 0
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    wrapper: {
        marginTop: 20,
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
    },
}));

const Leaflet = () => {
    const classes = useStyles();
    const [markers, setMarkers] = useState(myCustomArray);

    return (
        <div className={classes.root}>
            <Map center={position} zoom={10} style={mapStyle} maxZoom={20}>
                <TileLayer
                    url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
                <MarkerCluster markers={markers}/>
            </Map>
        </div>
    );
};

export default Leaflet;
