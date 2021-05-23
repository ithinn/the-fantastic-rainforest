import { Box } from "reflexbox";
import Button from "@material-ui/core/Button";
import { makeStyles } from '@material-ui/core/styles';
import Popover from '@material-ui/core/Popover';
import { useState } from "react";
import Link from "next/link"
import MenuBookRoundedIcon from '@material-ui/icons/MenuBookRounded';

const SourceButton = ({ url, text }) => {

    const classes = useStyles();
    const [anchorEl, setAnchorEl] = useState(null);
    const open = anchorEl;
    const id = open ? "source-popover" : undefined;

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    }

    return(
        <Box className={classes.root}>
            <Button 
                startIcon={<MenuBookRoundedIcon/>}
                aria-describedby={id} 
                variant="text" 
                color="primary" 
                onClick={handleClick}>Kilde</Button>

            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                  }}>

                <Box className={classes.typography}>
                    <Link href={url}>
                        <a >{text}</a>  
                    </Link>
                </Box>
            </Popover>
        </Box>
    )
}

export default SourceButton;

const useStyles = makeStyles((theme) => ({
    root: {
        position: "absolute",
        right: 10,
        bottom: 0,
        zIndex: 4,
    },
    typography: {
        padding: theme.spacing(2)
    }
}));