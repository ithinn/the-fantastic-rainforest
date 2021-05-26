import IconWithText from "./IconWithText";
import { usePageContext } from "../../context/PageContext"
import { Flex, Box } from "reflexbox";
import Audio from "../Audio";

const InfoBox = ({ data }) => {
    const { activePage } = usePageContext();

    const renderAnimalInfobox = () => {
        return (
            <Flex 
                flexWrap="wrap" 
                justifyContent="center">
                <Flex 
                    justifyContent="center" 
                    flexWrap="wrap">
                    <IconWithText
                        ariaLabel="Geografisk område"
                        imgSrc="/img/icons/globe-02.svg"
                        imgAlt="Ikon: En jordklode"
                        text={data.metadata.area}
                    />
                    <IconWithText
                        ariaLabel="Spiser"
                        imgSrc="/img/icons/diet.svg"
                        imgAlt="Ikon: Kniv, gaffel og tallerken"
                        text={data.metadata.food}
                    />
                </Flex>
                

                {data.metadata.sound_url !== "" && 
                    <Flex alignItems="center" m={3}>
                        <Audio audioFile={data.metadata.sound_url}/>
                    </Flex>
                }
            </Flex>
        )
    }

    const renderMapInfobox = () => {
        return (
            <Flex 
                flexWrap="wrap" 
                justifyContent="center" 
                alignItems="flex-start">
                
                <Box>
                    <IconWithText
                    ariaLabel="Geografisk område"
                    imgSrc="/img/icons/globe-02.svg"
                    imgAlt="Ikon: En jordklode"
                    text={data.area}
                    />
                    <IconWithText
                        ariaLabel="Størrelse"
                        imgSrc="/img/icons/ICONS_size.svg"
                        imgAlt="Ikon: To trær, ett stort og ett lite"
                        text={data.size}
                    />
                </Box>

                <Box>
                    <IconWithText
                        ariaLabel="Folkegrupper"
                        imgSrc="/img/icons/ICONS_people.svg"
                        imgAlt="Ikon: En gruppe mennesker"
                        text={data.people}
                    />
                    <IconWithText
                        ariaLabel="Trusler"
                        imgSrc="/img/icons/ICONS_threats.svg"
                        imgAlt="Ikon: Et tørt og ødelagt tre"
                        text={data.threats}
                    />
                </Box>
            </Flex>
        )
    }
    return (
        <>
        {activePage.metadata.id === "maps" ? renderMapInfobox() : renderAnimalInfobox()}
        </>
    )
}

export default InfoBox;