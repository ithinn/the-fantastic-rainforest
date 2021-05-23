import Header from "../Header";

function Layout( {children, home, maps, animals, facts, games, memory} ) {

    return(
        <>  
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
