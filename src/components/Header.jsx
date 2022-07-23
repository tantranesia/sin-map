import React from 'react';
import { Stack, SvgIcon, Typography } from '@mui/material';
import { ReactComponent as Settings } from '../assets/svg/Icon_Setting.svg';
import { ReactComponent as Questions } from '../assets/svg/Icon_Question.svg';
import { ReactComponent as Close } from '../assets/svg/Icon_Close.svg';
import { withStyles } from '@mui/styles';
// Custom Header Typography
const HeaderTextTypography = withStyles({
    root: {
      color: '#282c37',
      fontSize: '26px',
      fontWeight: 600
    },
  })(Typography);

function Header() {
  return (
    <Stack
      direction={'row'}
      sx={{ backgroundColor: '#FFFFFF', height: '127px', width: 1, justifyContent: 'space-between', alignItems: 'center', paddingX: '30px' }}
    >
      <HeaderTextTypography>TOP-RATED TOURIST ATTRACTION IN SINGAPORE</HeaderTextTypography>
      <Stack spacing={2} direction={'row'}>
        <SvgIcon component={Settings} inheritViewBox />
        <SvgIcon component={Questions} inheritViewBox />
        <SvgIcon component={Close} inheritViewBox />
      </Stack>
    </Stack>
  );
}

export default Header;
