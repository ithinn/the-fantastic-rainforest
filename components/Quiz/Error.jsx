import Popup from "../Popup"
import Button from "@material-ui/core/Button"
import Typography from "@material-ui/core/Typography"
import RefreshIcon from '@material-ui/icons/Refresh';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { Flex, Box } from "reflexbox";
import Image from "next/image";


const Error = ({ handleRefresh, handleBackToGames }) => {
    return (
        <Popup isOpen={true}>
            <Flex 
                justifyContent="center" 
                flexDirection="column" 
                textAlign="center" 
                alignItem="center" 
                height="100%" >
                
                <Image 
                    src="/img/quiz/sad.svg" 
                    width={70} 
                    height={130}
                    alt="Hodet til en ape som er trist"/>
                
                <Typography component="h2" variant="h5" color="error">
                    Det er ikke nok spørsmål igjen til at du kan komme til toppen.
                </Typography>
                
                <Flex width="100%" justifyContent="center">
                    <Box m={3}>
                        <Button 
                            variant="outlined"
                            color="primary"
                            startIcon={<RefreshIcon/>}
                            onClick={() => handleRefresh()}>Prøv igjen</Button>
                    </Box>

                    <Box m={3}>
                        <Button 
                            variant="outlined"
                            color="primary"
                            startIcon={<ExitToAppIcon/>}
                            onClick={() => handleBackToGames()}>Tilbake til "Spill"</Button>
                    </Box>
                </Flex>
            </Flex>
        </Popup>
    )
}

export default Error;