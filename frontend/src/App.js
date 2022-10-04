import "./App.css";
import Card from "./Components/Card/Card";
import AltCard from "./Components/Card/AltCard";
import tvImage from "../src/Assets/tv.png";
import mobileImage from "../src/Assets/mobile-0819.jpg";
import devicesImage from "../src/Assets/device-pile-in.png";
import childrenImage from "../src/Assets/AAAABYjXrxZKtrzxQRVQNn2aIByoomnlbXmJ-uBy7du8a5Si3xqIsgerTlwJZG1vMpqer2kvcILy0UJQnjfRUQ5cEr7gQlYqXfxUg7bz.png";
import FAQToggle from "../src/Components/Card/FAQToggle";
import FAQsCard from "../src/Components/Card/FAQsCard";

function App() {
  return (
    <>
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
      <FAQToggle
        id="FAQCard1Toggle"
        firstPara="Netflix is a streaming service that offers a wide variety of
            award-winning TV shows, movies, anime, documentaries and more – on
            thousands of internet-connected devices."
        secondPara="You can watch as much as you want, whenever you want, without a
            single ad – all for one low monthly price. There's always something
            new to discover, and new TV shows and movies are added every week!"
      />
      <FAQsCard />
    </>
  );
}

export default App;
