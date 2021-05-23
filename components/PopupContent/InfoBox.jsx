import IconWithText from "./IconWithText";
import { usePageContext } from "../../context/PageContext"
import { Flex } from "reflexbox";
import Audio from "../Audio";

const InfoBox = ({ data }) => {
    const { activePage } = usePageContext();

    const renderAnimalInfobox = () => {
        return (
            <Flex flexWrap="wrap" justifyContent="center">
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
                
                {data.metadata.sound_url !== "" && <Audio audioFile={data.metadata.sound_url}/>}
            </Flex>
        )
    }

    const renderMapInfobox = () => {
        return (
            <Flex flexWrap="wrap" justifyContent="center" alignItems="flex-start">
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