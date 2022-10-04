import React from "react";
import styles from "./FAQsCard.module.css";
import FAQCard from "./FAQCard";
import FAQToggle from "./FAQToggle";
import Form from "../Form/Form";

// FAQ Toggle Handler
// const cardToggleHandler = () => {
//   alert("FAQToggle");
// };

export default function FAQsCard() {
  return (
    <div className={`${styles.Card} ${styles.FAQsCard}`}>
      <div className={styles.h2Container}>
        <h2>Frequently Asked Questions</h2>
      </div>
      <div className={styles.FAQContainer}>
        <FAQCard
          heading="What is Netflix?"
          // onClick={cardToggleHandler}
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
        <FAQCard
          heading="How much does Netflix cost?"
          // onClick={cardToggleHandler}
        />
        <FAQToggle
          id="FAQCard2Toggle"
          firstPara=" Watch Netflix on your smartphone, tablet, Smart TV, laptop, or
            streaming device, all for one fixed monthly fee. Plans range from ₹
            149 to ₹ 649 a month. No extra costs, no contracts."
          secondPara=""
        />
        <FAQCard
          heading="Where can i watch?"
          // onClick={cardToggleHandler}
        />
        <FAQToggle
          id="FAQCard3Toggle"
          firstPara=" Watch anywhere, anytime. Sign in with your Netflix account to watch
            instantly on the web at netflix.com from your personal computer or
            on any internet-connected device that offers the Netflix app,
            including smart TVs, smartphones, tablets, streaming media players
            and game consoles."
          secondPara="You can also download your favourite shows with the iOS, Android, or
            Windows 10 app. Use downloads to watch while you're on the go and
            without an internet connection. Take Netflix with you anywhere."
        />
        <FAQCard
          heading="How do i cancel?"
          // onClick={cardToggleHandler}
        />
        <FAQToggle
          id="FAQCard4Toggle"
          firstPara=" Netflix is flexible. There are no annoying contracts and no
            commitments. You can easily cancel your account online in two
            clicks. There are no cancellation fees – start or stop your account
            anytime."
          secondPara=""
        />
        <FAQCard
          heading="What can i watch on Netflix?"
          // onClick={cardToggleHandler}
        />
        <FAQToggle
          id="FAQCard5Toggle"
          firstPara="Netflix has an extensive library of feature films, documentaries, TV
            shows, anime, award-winning Netflix originals, and more. Watch as
            much as you want, anytime you want."
          secondPara=""
        />
        <FAQCard
          heading="Is Netflix good for kids?"
          // onClick={cardToggleHandler}
        />
        <FAQToggle
          id="FAQCard6Toggle"
          firstPara="The Netflix Kids experience is included in your membership to give
            parents control while kids enjoy family-friendly TV shows and films
            in their own space."
          secondPara="Kids profiles come with PIN-protected parental controls that let you
            restrict the maturity rating of content kids can watch and block
            specific titles you don’t want kids to see."
        />
      </div>
      <Form />
    </div>
  );
}
