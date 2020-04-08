import React from "react";
import Header from "../Header";
import Jumbotron from "../Jumbotron";
import Wrapper from "../Wrapper";
import ContentCard from "../ContentCard";
import Footer from "../Footer";

function Home() {
    return (
        <Wrapper addClass="row god">
            <Header />
            <Wrapper addClass="row">
                <Jumbotron />
                <ContentCard />
            </Wrapper>
            <Footer />
        </Wrapper>
    );
}

export default Home;
