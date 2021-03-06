import React from "react";
import Header from "../components/Header";
import Wrapper from "../components/Wrapper";
// import SearchCard from "../components/SearchCard";
import Footer from "../components/Footer";
import ContentCard from "../components/ContentCard";

function Search() {
    return (
        <Wrapper addClasses="row god">
            <Header />
            <Wrapper addClasses="row content">
                {/* <SearchCard subtitle="Search Book Titles"
                /> */}
                <ContentCard subtitle="Search Book Titles" 
                    search="true"
                />
            </Wrapper>
            <Footer />
        </Wrapper>
    );
}

export default Search;
