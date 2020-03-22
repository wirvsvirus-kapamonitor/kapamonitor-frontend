import { useEffect } from "react";
import PropTypes from "prop-types";
import L from "leaflet";
import "leaflet.markercluster/dist/leaflet.markercluster";
import "leaflet.markercluster/dist/MarkerCluster.css";
import "leaflet.markercluster/dist/MarkerCluster.Default.css";
import { useLeaflet } from "react-leaflet";
import { customMarkerGreen, customMarkerYellow, customMarkerRed } from "./constants";

const mcg = L.markerClusterGroup({iconCreateFunction: function (cluster) {
          var childCount = cluster.getChildCount();
          var allChildren = cluster.getAllChildMarkers();
          var c = ' marker-cluster-';

          var totalSumWorkload = 0.0;

          allChildren.forEach(element => {totalSumWorkload += parseFloat(element.options.title)});

          var averageWorkload = totalSumWorkload / childCount;

          if (averageWorkload < 50) {
            c += 'small';
          } else if (averageWorkload < 75) {
            c += 'medium';
          } else {
            c += 'large';
          }
      
          return new L.DivIcon({ html: '<div><span>' + childCount + '</span></div>', className: 'marker-cluster' + c, iconSize: new L.Point(40, 40) });
        }});

const MarkerCluster = ({ markers }) => {
  const { map } = useLeaflet();

  useEffect(() => {
    mcg.clearLayers();
    markers.forEach(({ position, text, workload }) => {
      var popuptext = text + "<br> Auslastung: " + String(workload) + "%"
      var actualIcon = customMarkerGreen
      if(workload < 50){
        actualIcon = customMarkerGreen
      }else if(workload < 75){
        actualIcon = customMarkerYellow
      }else{
        actualIcon = customMarkerRed
      }
      L.marker(new L.LatLng(position.lat, position.lng), {
      icon: actualIcon, 
      title: String(workload)
      })
        .addTo(mcg)
        .bindPopup(popuptext)
    });

    // optionally center the map around the markers
    // map.fitBounds(mcg.getBounds());
    // // add the marker cluster group to the map
    map.addLayer(mcg);
  }, [markers, map]);

  return null;
};

MarkerCluster.propTypes = {
  markers: PropTypes.arrayOf(
    PropTypes.shape({
      position: PropTypes.objectOf(PropTypes.number).isRequired,
      text: PropTypes.string.isRequired,
      workload: PropTypes.number.isRequired
    }).isRequired
  ).isRequired
};

export default MarkerCluster;
