import L from 'leaflet';

const iconMarker = new L.Icon({
    iconUrl: require("../assets/svg/Icon_Marker.svg"),
    iconAnchor: [32, 64],
    popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(60, 75),
});

export { iconMarker };