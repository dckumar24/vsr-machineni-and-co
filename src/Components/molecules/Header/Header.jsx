import { useState } from 'react';
import { styled } from '@mui/material/styles';
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const StyledAppBar = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
}));

const StyledToolbar = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
});

const StyledLogo = styled('img')({
  width: 40,
  height: 40,
});

const StyledDrawer = styled(Drawer)(({ theme }) => ({
  '& .MuiDrawer-paper': {
    backgroundColor: theme.palette.grey[900],
    color: theme.palette.common.white,
    width: '60vw',
  },
}));

const StyledListItem = styled(ListItem)({
  display: 'block',
  textAlign: 'center',
padding:'0px'
});

const Header = () => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setOpenDrawer(open);
  };

  return (
    <StyledAppBar position="static">
      <StyledToolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
          onClick={toggleDrawer(true)}
          sx={{ display: isMobile ? 'block' : 'none' }}
        >
          <MenuIcon />
        </IconButton>
        <StyledLogo src="https://picsum.photos/id/237/800/400" alt="logo" />
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, margin:'0px'}}>
          My Website
        </Typography>
        
        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
          <List sx={{ display: 'flex' }}>
            <StyledListItem Button sx={{ display: 'flex', margin:'0rem 1rem' }}>
              <ListItemText primary="Home" />
            </StyledListItem>
            <StyledListItem Button sx={{ display: 'flex', margin:'0rem 1rem' }}>
              <ListItemText primary="About" />
            </StyledListItem>
            <StyledListItem Button sx={{ display: 'flex', margin:'0rem 1rem' }}>
              <ListItemText primary="Contact" />
            </StyledListItem>
          </List>
        </Box>
        <StyledDrawer
          anchor="left"
          open={openDrawer}
          onClose={toggleDrawer(false)}
        >
          <Box
            sx={{ display: 'flex', justifyContent: 'flex-end', padding: '0.5rem' }}
          >
            <IconButton
              color="inherit"
              aria-label="close drawer"
              edge="end"
              onClick={toggleDrawer(false)}
            >
              <CloseIcon />
            </IconButton>
          </Box>
          <List>
            <StyledListItem Button>
              <ListItemText primary="Home" />
            </StyledListItem>
            <StyledListItem Button>
              <ListItemText primary="About" />
            </StyledListItem>
            <StyledListItem Button>
              <ListItemText primary="Contact" />
            </StyledListItem>
          </List>
        </StyledDrawer>
      </StyledToolbar>
    </StyledAppBar>
  );
};

export default Header;

