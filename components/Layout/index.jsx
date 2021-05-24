import Header from "../Header";
import Head from "next/head"

function Layout( {children, home, maps, animals, facts, games, memory, quiz} ) {

    let title = "";
    let content = "";

    if (maps) {
        title = "Kart over regnskogen"
        content = "Informative kart som viser hvor det fins regnskog i dag, og grunnene til at regnskogen blir borte."
    } else if (animals) {
        title = "Dyr i regnskogen"
        content = "Les og lær om de rare dyrene i regnskogen."
    } else if (facts) {
        title = "Fakta om regnskogen"
        content = "Faktaartikler om tropisk regnskog, avskogning, urfolk og menneskene i regnskogen."
    } else if (memory) {
        title = "Memory"
        content= "Spill det klassiske memory-spillet med motiver fra regnskogen."
    } else if (quiz) {
        title = "Regnskogsquiz";
        content = "Quiz-spill der du skal hjelpe apen Nyani med å klatre til toppen av treet ved å svare riktig på spørsmål"
    } else if (games) {
        title = "Regnskogspill"
        content = "Quiz og memory-spill med regnskog som tema."
    } else {
        title = "Den fantastiske regnskogen"
        content = "Utforsk regnskogen ved hjelp av kart, spill og faktaartikler. Passer best for barn mellom 6-10 år, og dekker flere læreplanmål."
    }

    return(
        <>  
        <Head>
            <meta name="description" content={content}/>
            <meta name="viewport" lang="no" content="minimum-scale=1, initial-scale=1, width=device-width" />
            <title>{title}</title>
            <link rel="shortcut icon" type="image/svg" href="./img/icons/home_home.svg"/>
            <link href='https://api.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.css' rel='stylesheet' />
            <link href='https://api.tiles.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.css' rel='stylesheet' />
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />      
        </Head>

            {home ? 
                <Header page="home"/> 
            : maps ? 
                <Header page="maps" />
            : animals ? 
                <Header page="animals"/> 
            : facts ? 
                <Header page="facts"/>
            : memory ? 
                <Header page="memory"/>
            :
                <Header page="games"/>
            }
            
            <main id="main">{children}</main>
        </>
    )
}

export default Layout;
