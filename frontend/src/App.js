import "./App.css";
import Card from "./Components/Card/Card";
import AltCard from "./Components/Card/AltCard";
import tvImage from "../src/Assets/tv.png";
import mobileImage from "../src/Assets/mobile-0819.jpg";
import devicesImage from "../src/Assets/device-pile-in.png";
import childrenImage from "../src/Assets/AAAABYjXrxZKtrzxQRVQNn2aIByoomnlbXmJ-uBy7du8a5Si3xqIsgerTlwJZG1vMpqer2kvcILy0UJQnjfRUQ5cEr7gQlYqXfxUg7bz.png";
import FAQsCard from "../src/Components/Card/FAQsCard";
import LandingContainer from "./Components/Landing Container/LandingContainer";
import ImageContainer from "./Components/Landing Container/ImageContainer";
import Navbar from "./Components/Navbar/Navbar";
import { Fragment } from "react";
import LandingContentContainer from "./Components/Landing Container/LandingContentContainer";

function App() {
  return (
    <Fragment>
      <LandingContainer>
        <ImageContainer>
          <Navbar />
          <LandingContentContainer />
        </ImageContainer>
      </LandingContainer>
      <Card
        heading="Enjoy on your TV."
        desc="Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more."
        src={tvImage}
        alt="tv"
      />
      <AltCard
        heading="Download your shows to watch offline."
        desc="Save your favourites easily and always have something to watch."
        src={mobileImage}
        alt="mobile"
      />
      <Card
        heading="Watch everywhere."
        desc="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV."
        src={devicesImage}
        alt="devices-pile-in"
      />
      <AltCard
        heading="Create profiles for children."
        desc="Send children on adventures with their favourite characters in a space made just for them—free with your membership."
        src={childrenImage}
        alt="children"
      />
      <FAQsCard />
    </Fragment>
  );
}

export default App;
