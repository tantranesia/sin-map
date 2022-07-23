import { Box, Stack, SvgIcon, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { withStyles } from '@mui/styles';
import { iconMarker } from './Icon';
import merlion from '../assets/image/Image_Merlion.jpg';
import { ReactComponent as Globe } from '../assets/svg/Icon_Browse.svg';
import { ReactComponent as Pin } from '../assets/svg/Icon_Marker.svg';

// Custom Header Typography
const CardsTextTypography = withStyles({
  root: {
    color: '#FFFFFF',
    fontSize: '25px',
    fontWeight: 600,
  },
})(Typography);

// Custom Body Typography
const BodyTextTypography = withStyles({
  root: {
    color: '#909496',
    fontSize: '16px',
    margin: '20px',
  },
})(Typography);

function Map() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/map')
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        setData(result);
      })
      .catch((err) => console.log(err));
  }, []);

  //Handle Open
  const [open, SetOpen] = useState(false);
  const handleClose = () => {
    SetOpen(!open);
  };
  return (
    <div>
      <MapContainer
        center={[1.3521, 103.8198]}
        zoom={15}
        scrollWheelZoom={false}
        id="map"
        style={{ height: '876px' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {data.map((marker, idx) => {
          return (
            <Marker
              position={[marker.lat, marker.long]}
              eventHandlers={{
                click: (e) => {
                  SetOpen(!open);
                },
              }}
            >
              <Popup>{marker.name}</Popup>
            </Marker>
          );
        })}
      </MapContainer>

      {open && (
        <>
          <Box
            sx={{
              width: '350px',
              height: '880px',
              backgroundColor: '#313541',
              position: 'absolute',
              right: 0,
              top: '14.5%',
              zIndex: 'tooltip',
            }}
          >
            <img src={merlion} alt="Merlion" />
            <Stack
              sx={{
                backgroundColor: '#72cdd2',
                height: '50px',
                paddingX: '30px',
                justifyContent: 'center',
              }}
            >
              <CardsTextTypography>Merlion</CardsTextTypography>
            </Stack>
            <BodyTextTypography>
              The Merlion is the national nersonitication.of singapore.
            </BodyTextTypography>
            <BodyTextTypography>
              Its name combines "mer" meaning the sea and "lion". The fish body
              represents Singapore's origin as a fishing village when it was
              called Temasek, which means "sea town" in Javanese. The lion head
              represents Singapore's original name-Singapura-meaning"lion city"
              or "kota singa"
            </BodyTextTypography>
            <Stack
              direction={'row'}
              spacing={3}
              sx={{
                alignItems: 'center',
                paddingX: '16px',
                marginBottom: '5px',
              }}
            >
              <SvgIcon
                component={Pin}
                inheritViewBox
                sx={{ fontSize: 15, color: '#72c9cf' }}
              />
              <BodyTextTypography>
                10 Bayfront Avenue, Singapore
              </BodyTextTypography>
            </Stack>
            <Stack
              direction={'row'}
              spacing={3}
              sx={{ alignItems: 'center', paddingX: '16px' }}
            >
              <SvgIcon component={Globe} inheritViewBox sx={{ fontSize: 15 }} />
              <BodyTextTypography>
                https://id.marinabaysands.com
              </BodyTextTypography>
            </Stack>
          </Box>
        </>
      )}
    </div>
  );
}

export default Map;
