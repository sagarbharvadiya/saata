import React from "react";
import Banner from "../Components/Banner";
import Contact from '../Components/Contact';
import BoardOfMembers from '../Components/Board_of_members';
import InfoSection from '../Components/InfoSection';

function Home(){
    return(
        <>
            <Banner></Banner>
            <InfoSection></InfoSection>
            <BoardOfMembers></BoardOfMembers>
            <Contact></Contact>
        </>
    )
}

export default Home;