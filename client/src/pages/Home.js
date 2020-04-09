import React from "react";
import Header from "../components/Header";
import Jumbotron from "../components/Jumbotron";
import Wrapper from "../components/Wrapper";
import ContentCard from "../components/ContentCard";
import Footer from "../components/Footer";

function Home() {
    return (
        <Wrapper addClasses="row god">
            <Header />
            <Wrapper addClasses="row content">
                <Jumbotron />
                <ContentCard subtitle="My List"
                    search="false"
                />
            </Wrapper>
            <Footer />
        </Wrapper>
    );
}

export default Home;
