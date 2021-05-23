import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import { Box } from "reflexbox";
import { useEffect, useState } from "react";
import MenuIcon from '@material-ui/icons/Menu';
import { useRouter } from "next/router"

const MobileNav = ( { data }) => {
    const [anchorEl, setAnchorEl] = useState(false);
    const router = useRouter();

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    }

    const handleClose = () => {
        setAnchorEl(null);
    }

    return(
        <Box>
            <IconButton 
                size="medium" 
                variant="outlined"
                color="secondary"
                aria-controls="menu" 
                aria-haspopup="true" 
                onClick={handleClick}>
            
                <MenuIcon color="secondary"/>
                        
            </IconButton>

            <Menu
                id="menu"
                anchorEl={anchorEl}
                keepMounted
                open={anchorEl}
                onClose={handleClose}>

                {data !== null && data !== undefined &&(
                    <div>
                    {data.map((item, index) => {
                        return(
                                
                            <MenuItem key={item, index} onClick={() => {router.push(`/${item.metadata.id}`)}}>
                                {item.title}
                            </MenuItem>
                                 
                        )
                    })}
                    </div>
                )}  
                
            </Menu>
        </Box>
    )
}

export default MobileNav;