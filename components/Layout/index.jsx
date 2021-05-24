import Header from "../Header";
import Head from "next/head"

function Layout( {children, home, maps, animals, facts, games, memory, quiz} ) {

    let title = "";

    if (maps) {
        title = "Kart over regnskogen"
    } else if (animals) {
        title = "Dyr i regnskogen"
    } else if (facts) {
        title = "Fakta om regnskogen"
    } else if (memory) {
        title = "Memory"
    } else if (quiz) {
        title = "Regnskogsquiz"
    } else if (games) {
        title = "Regnskogspill"
    } else {
        title = "Den fantastiske regnskogen"
    }

    return(
        <>  
        <Head>
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
