import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Link from "next/link";
import { makeStyles } from "@material-ui/core/styles"
import { Box } from "reflexbox";

const ContentCard = ({ data, id, isCardLink, handleOpen }) => {
    
    const classes = useStyles();

    const renderCard = () => {
        return(
            <Card
                className={classes.card}
                onClick={isCardLink ? null : event => handleOpen(event)}>
                
                <CardActionArea>
                    <CardMedia
                        component="img"
                        alt={data.metadata.image_alt}
                        className={classes.media}
                        image={data.metadata.image.url}
                        title={data.title}
                        id={id}/>
                    
                    <CardContent>
                        <Typography 
                            className={classes.cardTitle}
                            gutterBottom 
                            id={"text" + id}
                            variant="h5" 
                            component="h2">{data.title}</Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        )    
    }

    return (
        <Box>
        {isCardLink ?
            <Link href={data.metadata.path} passHref>
                {renderCard()}   
            </Link>
        :
            renderCard()
        }
        </Box>  
    )
}

export default ContentCard;

const useStyles = makeStyles(theme => ({
    card: {
        [theme.breakpoints.down("xs")]: {
            width: 260
        },
        [theme.breakpoints.up("sm")]: {
            width: 300
        },
        [theme.breakpoints.up("md")]: {
            width: 200
        },
        margin: theme.spacing(3)
    },
    media: {
        height: 200,
    },
    cardTitle: {
        textAlign: "center"
    }
}));