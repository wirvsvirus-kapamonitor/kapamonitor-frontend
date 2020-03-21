import React, { Component } from 'react';
import { render } from 'react-dom';
import { Map, GeoJSON, Popup, Marker, TileLayer } from 'react-leaflet';
//import worldGeoJSON from 'geojson-world-map';


const stamenTonerTiles = 'http://stamen-tiles-{s}.a.ssl.fastly.net/toner-background/{z}/{x}/{y}.png';
const stamenTonerAttr = 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>';
const mapCenter = [52.520, 13.404];
const zoomLevel = 12;

export default class App extends Component {
    render() {
        return (
            <div>
                <Map
                    center={mapCenter}
                    zoom={zoomLevel}
                    maxZoom={10}
                    scrollWheelZoom={true}
                    doubleClickZoom={true}
                    easeLinearity={0.35}

                >
                    
                    <TileLayer
                        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                <Marker position={[52.520, 13.404]}>
                 <Popup>
                    Popup for any custom information.
                </Popup>
                {/* <GeoJSON
                    data={worldGeoJSON}
                    style={() => ({
                    color: '#4a83ec',
                    weight: 0.5,
                    fillColor: "#1a1d62",
                    fillOpacity: 1, */}
                  })}
                />
                </Marker>
                </Map>
            </div>
        );
    }
}
