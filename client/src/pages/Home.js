import React from "react";
import Header from "../components/Header";
import Jumbotron from "../components/Jumbotron";
import Wrapper from "../components/Wrapper";
import ContentCard from "../components/ContentCard";
import Footer from "../components/Footer";

function Home() {
    return (
        <Wrapper addClass="row god">
            <Header />
            <Wrapper addClass="row content">
                <Jumbotron />
                <ContentCard />
            </Wrapper>
            <Footer />
        </Wrapper>
    );
}

export default Home;
