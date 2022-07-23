import React, { useState } from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Box } from '@mui/material';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Collapse from '@mui/material/Collapse';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';

// Custom Menu
const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'bottom',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'bottom',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    padding: '20px',
    marginTop: theme.spacing(1),
    minWidth: 160,
    backgroundColor: theme.palette.secondary.black,
    color: theme.palette.secondary.white,
    '& .MuiMenuItem-root': {
      marginTop: '30px',
      fontSize: 14,
      '& .MuiSvgIcon-root': {
        fontSize: 14,
        backgroundColor: theme.palette.background.default,
        color: theme.palette.secondary.white,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: theme.palette.background.default,
      },
    },
  },
}));

function Menus() {
  // Handle Menu
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  // Handle Collapse
  const [openCol, setOpenCol] = useState(true);
  const handleClickCol = () => {
    setOpenCol(!openCol);
  };
  return (
    <Box sx={{ backgroundColor: '#282c37', width: '330px' }}>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
      >
        Filter By Favourite
      </Button>
      <StyledMenu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Merlion</MenuItem>
        <MenuItem onClick={handleClose}>
          {' '}
          <ListItemText onClick={handleClickCol}>Marina Bay Sand</ListItemText>
          <ListItemIcon>
            <KeyboardArrowDownIcon />
          </ListItemIcon>
        </MenuItem>
        {/* Collapse Items */}
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding sx={{ color: '#6c7f89' }}>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary="ArtScience Museum" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary="Marina Bay Sands Park" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }}>
              <ListItemText primary="Double Helix Bridge" />
            </ListItemButton>
          </List>
          {/* Collapse Items */}
        </Collapse>
        <MenuItem onClick={handleClose}>
          <ListItemText>Garden By the Bay</ListItemText>
          <ListItemIcon>
            <KeyboardArrowDownIcon />
          </ListItemIcon>
        </MenuItem>
        <MenuItem onClick={handleClose}>
          <ListItemText>China Town</ListItemText>
          <ListItemIcon>
            <KeyboardArrowDownIcon />
          </ListItemIcon>
        </MenuItem>
        <MenuItem onClick={handleClose}>Asian Civilisation Museum</MenuItem>
        <MenuItem onClick={handleClose}>Clarke Quay</MenuItem>
        <MenuItem onClick={handleClose}>Fort Canning Park</MenuItem>
        <MenuItem onClick={handleClose}>Singapore Flyer</MenuItem>
        <MenuItem onClick={handleClose}>Orchard Road</MenuItem>
      </StyledMenu>
    </Box>
  );
}

export default Menus;
