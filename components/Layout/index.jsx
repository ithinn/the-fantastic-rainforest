import Header from "../Header";
import Head from "next/head"

function Layout( {children, page} ) {

    return(
        <>  
        <Head>
            <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
            <link rel="shortcut icon" type="image/svg" href="./img/icons/home_home.svg"/>
            <link href='https://api.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.css' rel='stylesheet' />
            <link href='https://api.tiles.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.css' rel='stylesheet' />
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />      
        </Head>

        <Header page={page}/>

        <main id="main">{children}</main>
        </>
    )
}

export default Layout;
