import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';
import { Box } from "reflexbox";
import { useEffect, useState } from "react";
import MenuIcon from '@material-ui/icons/Menu';
import { useRouter } from "next/router"
import Image from "next/image"


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
            <Button 
                size="medium" 
                color="secondary"
                aria-controls="menu" 
                aria-haspopup="true" 
                onClick={handleClick}
                startIcon={
                    <Image 
                        src="/img/icons/ICONS_menu.svg" 
                        width={40}
                        alt="ikon: meny" 
                        height={40}/>
                }>
                Meny  
            </Button>

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