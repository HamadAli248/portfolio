import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { Link } from "react-router-dom";
import CV from "../../Pages/HamadAliCV.pdf";
import styles from "./Navbar.module.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className={classes.root}>
      <AppBar position="relative" className={styles.headerColor}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon onClick={handleClick} />
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>
                <Link to="/aboutme">About Me</Link>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Link to="/projects">Projects</Link>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <Link to={CV} target="_blank">
                  Resume
                </Link>
              </MenuItem>
            </Menu>
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to="/portfolio/"
            >
              Hamad Ali
            </Link>
          </Typography>
          <div>
            <Button color="inherit">
              <Link to="/aboutme">About Me</Link>
            </Button>
            <Button color="inherit">
              <Link to="/projects">Projects</Link>
            </Button>
            <Button color="inherit">
              <Link to={CV} target="_blank">
                Resume
              </Link>
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
