import React from "react";
import "./HomeScreen.css";
import Navbar from "../../Components/Navbar/Navbar";
import Banner from "../Banner/Banner";
import Row from "../../Components/Row/Row";
import request from "../../Request";

const Homescreen = () => {
  return (
    <div className="homescreen">
      <Navbar />
      <Banner />
      <Row
          title="NETFLIX ORIGINALS" 
          fetchurl={request.fetchNetflixOriginals}
          isLargeRow
      />
      <Row title="Trending now" fetchurl={request.fetchTrending} />
      <Row title="Top Rated" fetchurl={request.fetchTopRated} />
      <Row title="Action Movies" fetchurl={request.fetchActionMovies} />
      <Row title="Comady Movies" fetchurl={request.fetchComadyMovies} />
      <Row title="Horror Movies" fetchurl={request.fetchHorrorMovies} />
      <Row title="Romentic Movies" fetchurl={request.fetchRomanceMovies} />
      <Row title="Documentries" fetchurl={request.fetchDocumentaries} />
    </div>
  );
};

export default Homescreen;
