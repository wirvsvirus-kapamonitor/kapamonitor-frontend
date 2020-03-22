import React, { useEffect } from 'react';
import { Map, TileLayer } from 'react-leaflet';
import MarkerCluster from './MarkerCluster';
import { makeStyles } from '@material-ui/core/styles';
import 'leaflet/dist/leaflet.css';
import { getAllLocations } from '../../services/backend-rest-service';
import { setLocations } from '../../store/leaflet/actions';
import { connect } from 'react-redux';

const position = [52.520, 13.404];
const mapStyle = { height: '90vh', zIndex: 1 };

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
        flexGrow: 1,
        margin: 0,
        padding: 0,
        marginTop: theme.spacing.unit * 7
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

function Leaflet(props) {
    const classes = useStyles();

    useEffect(() => {
        async function fetchRows() {
            const res = await getAllLocations();
            const arr = []

            console.log(arr)

            if (res.status === 200) {
                if(res.data.length > 0){
                    res.data.map(item => {
                        arr.push(
                            {
                                position: { lng: item.geoLatitude, lat: item.geoLongitude },
                                text: item.title,
                                workload: item.hospital ? item.hospital.bedsWithVentilator : 60
                            }
                        )
                    })
                    props.setLocations(arr)
                }
            }


            console.log("res",res.status)


        }

        fetchRows();
    }, []);

    return (
        <div className={classes.root}>
            <Map center={position} zoom={10} style={mapStyle} maxZoom={20}>
                <TileLayer
                    url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
                <MarkerCluster markers={props.locations}/>
            </Map>
        </div>
    );
};
const mapStateToProps = state => ({
    locations: state.leaflet.locations,
})

const mapDispatchToProps = {
    setLocations
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Leaflet);

