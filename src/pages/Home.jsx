import React, { useState } from 'react';
import { createContext } from 'react'
import { withStyles } from '@mui/styles';
import Box from '@mui/material/Box';
import { ReactComponent as Globe } from '../assets/svg/Icon_Browse.svg';
import { ReactComponent as Marion } from '../assets/svg/Icon_SuggestAttraction.svg';
import { ReactComponent as Videos } from '../assets/svg/Icon_Videos.svg';
import { ReactComponent as Blog } from '../assets/svg/Icon_Blog.svg';
import { ReactComponent as About } from '../assets/svg/Icon_About.svg';
import { Stack, SvgIcon, Typography } from '@mui/material';


// Components
import Menus from '../components/Menu';
import Header from '../components/Header';
import Map from '../components/Map';

let ModalContext
let { Provider } = (ModalContext = React.createContext())

// Custom White Typography
const WhiteTextTypography = withStyles({
  root: {
    color: '#FFFFFF',
    fontSize: '16px',
    fontWeight: 600
  },
})(Typography);

// Custom Green Typography
const GreenTextTypography = withStyles({
  root: {
    color: '#7cb3bd',
    fontSize: '16px',
    textAlign: 'center',
    fontWeight: 600

  },
})(Typography);

function Home() {
  return (
    <Stack direction={'row'} sx={{ height: '100%' }}>
      <Box sx={{ width: '170px', height: '100%' }}>
        <Stack spacing={10}>
          <Stack
            spacing={1}
            sx={{
              background: '#7cb3bd',
              height: '91px',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <SvgIcon
              component={Globe}
              inheritViewBox
              sx={{ fontSize: 35 }}
            ></SvgIcon>
            <WhiteTextTypography>Browse</WhiteTextTypography>
          </Stack>
          <Stack
            spacing={1}
            sx={{
              height: '91px',
              alignItems: 'center',
              justifyContent: 'center',
              paddingX: '30px'
            }}
          >
            <SvgIcon
              component={Marion}
              inheritViewBox
              sx={{ fontSize: 35 }}
            ></SvgIcon>
            <GreenTextTypography>Suggest Attraction</GreenTextTypography>
          </Stack>
          <Stack
            spacing={1}
            sx={{
              height: '91px',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <SvgIcon
              component={Videos}
              inheritViewBox
              sx={{ fontSize: 35 }}
            ></SvgIcon>
            <GreenTextTypography>Video</GreenTextTypography>
          </Stack>
          <Stack
            spacing={1}
            sx={{
              height: '91px',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <SvgIcon
              component={Blog}
              inheritViewBox
              sx={{ fontSize: 35 }}
            ></SvgIcon>
            <GreenTextTypography>Blog</GreenTextTypography>
          </Stack>

          <Stack
            sx={{
              height: '91px',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <SvgIcon
              component={About}
              inheritViewBox
              sx={{ fontSize: 35 }}
            ></SvgIcon>
            <GreenTextTypography>About</GreenTextTypography>
          </Stack>
        </Stack>
      </Box>
      <Menus />
      <Stack sx={{width: 1}}>
        <Header />
        <Map />
      </Stack>
    </Stack>
  );
}

export default Home;
