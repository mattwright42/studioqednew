import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import { useState } from "react";
import { createPortal } from "react-dom";
import granblue from "../img/GRANBLUE.png";
import tmntPackage from "../img/TMNT_PACKAGE.png";
import rf3sJournal from "../img/RF3S_journal.png";
import netAppRobot from "../img/NetAppRobot2.png";
import ldcPackage from "../img/LDC_package.png";
import skevCardset from "../img/SKEV_cardset.png";
import fateDiorama from "../img/FATE_DIORAMA.png";
import shantaeBook from "../img/Shantae_kickstarter_book.png";
import videos from "../img/Videos.png";
import jjPackage from "../img/JJ_PACKAGE2.png";
import hlSumoset from "../img/HL_Sumoset.png";
import qedLastStory from "../img/QED_LASTSTORY.png";
import retailShippers from "../img/Retail_shippers.png";

interface CaseStudyData {
  title: string;
  background: string;
  results: string | { image: string; alt?: string };
}

const caseStudies: CaseStudyData[] = [
  {
    title: "A Box Big Enough for a Dragon",
    background:
      "We created this oversized custom outer box with metallic foil accents to hold an exclusive resin dragon figure, along with an artbook, soundtrack, postcard set, and metal keychain.",
    results: { image: granblue, alt: "Results" },
  },
  {
    title: "Working with a Maker of Mutants",
    background:
      "We designed a collectible box and poster featuring stunning original illustrations by Turtles creator Kevin Eastman. Also part of the package is a massive artbook filled with decades of carefully-curated game developer drawings, a 3-D acrylic diorama, a metal pin set, and translucent plastic character cards.",
    results: { image: tmntPackage, alt: "Results" },
  },
  {
    title: "Planting Seeds for a Perfectly-Planned Product",
    background:
      "This hardcover planner includes an exclusive in-game calendar filled with critical info like game event dates, planting schedules, character birthdays, gift preferences, and gameplay tips. ",
    results: { image: rf3sJournal, alt: "Results" },
  },
  {
    title: "Building a Cybernetic Superhero",
    background:
      "Introducing a new company initiative required some promotional personality. Studio QED made the character drawings, 2D illustrations, and 3D models that became a fully animated transforming robot video.",
    results: { image: netAppRobot, alt: "Results" },
  },
  {
    title: "Starting from Scratch",
    background:
      "WWe directed and designed every element for this limited-edition release. Studio QED provided all the art direction to produce multiple original illustrations, custom window-box packaging, soundtrack and character cards, and even a custom-crafted nine-inch plush baby dragon!",
    results: { image: ldcPackage, alt: "Results" },
  },
  {
    title: "Oooh, So Shiny!",
    background:
      "We designed this stunning set of 60 holographic foil trading cards, divided into six color-coded competing ninja factions and randomly packed along with game software.",
    results: { image: skevCardset, alt: "Results" },
  },
  {
    title: "Fantastic Plastics",
    background:
      "Studio QED designed and produced this unique screen-printed 3D acrylic diorama. Pop out, assemble, and display this eye-catching collectible.",
    results: { image: fateDiorama, alt: "Results" },
  },
  {
    title: "Your Wish is Our Command",
    background:
      "We created this premium hardbound volume as a special reward for KickStarter donors. Our previous book layout was expanded with extra characters, costumes, levels, and enemy artwork.",
    results: { image: shantaeBook, alt: "Results" },
  },
  {
    title: "Moving Pictures",
    background:
      "Sometimes a photo or diagram isn\u2019t enough to clearly convey a complex subject. Studio QED has staff dedicated to animating and editing videos. We create commercials, show intros, game trailers, and anything else you can imagine.",
    results: { image: videos, alt: "Results" },
  },
  {
    title: "The Complete Package",
    background:
      "Studio QED produced this show-stopping limited-edition box with an oversized hardcover visual book, a set of metal pins, a custom-printed bandana, and a 3D acrylic character diorama. ",
    results: { image: jjPackage, alt: "Results" },
  },
  {
    title: "A Game Within a Game",
    background:
      "Studio QED adds value to packaging by including pack-in items to increase value and sales. We created this fun 'Tap Tap' Paper Sumo game with punch-out characters, an arena to compete in, and complete game instructions!",
    results: { image: hlSumoset, alt: "Results" },
  },
  {
    title: "Tell Your Best Story",
    background:
      "Studio QED created this custom box that simulated a hardback book, complete with detailed, hand-tooled embossing on the front illustration and logo. This unforgettable box contained the game, an exclusive artbook, and a soundtrack CD.",
    results: { image: qedLastStory, alt: "Results" },
  },
  {
    title: "Go Big",
    background:
      "Studio QED\u2019s award-winning, eye-catching displays increase impact and sales. We can handle every aspect of product launches from design, production, shipping, and retail setup.",
    results: { image: retailShippers, alt: "Results" },
  },
];

export const CaseStudies = () => {
  const { ref, isVisible } = useIntersectionObserver();

  const [selectedImage, setSelectedImage] = useState<{
    src: string;
    alt: string;
  } | null>(null);

  return (
    <>
      <section
        id="case-studies"
        ref={ref as React.RefObject<HTMLElement>}
        className={`py-24 bg-[#CBDB2A] fade-slide-up ${isVisible ? "visible" : ""}`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mb-16">
            <h2 className="font-sans text-4xl lg:text-5xl font-bold text-[#5F5644] mb-6">
              Case Studies
            </h2>
            <p className="text-lg text-[#5F5644] leading-relaxed">
              A closer look at how we approach challenges — and the results we
              deliver.
            </p>
          </div>

        <div className="space-y-20">
          {caseStudies.map((study, index) => {
            const result = study.results;

            return (
              <div
                key={index}
                className={`border-t-2 border-divider pt-12${index === caseStudies.length - 1 ? " pb-12 border-b-2" : ""}`}
              >
                <h3 className="font-sans text-3xl lg:text-4xl font-bold text-[#5F5644] mb-8">
                  {study.title}
                </h3>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    {/* <h4 className="font-sans text-lg font-bold text-[#5F5644] mb-3">
                    Background
                  </h4> */}
                    <p className="text-[#5F5644] leading-relaxed">
                      {study.background}
                    </p>
                  </div>

                  <div>
                    {/* <h4 className="font-sans text-lg font-bold text-[#5F5644] mb-3">
                    Results
                  </h4> */}
                    {typeof result === "string" ? (
                      <p className="text-[#5F5644] leading-relaxed">
                        {result}
                      </p>
                    ) : (
                      // <img
                      //   src={study.results.image}
                      //   alt={study.results.alt ?? "Results"}
                      //   className="w-full rounded-lg object-cover"
                      // />
                      <img
                        src={result.image}
                        alt={result.alt ?? "Results"}
                        className="w-full rounded-lg object-cover cursor-pointer transition-transform duration-200 hover:scale-[1.02]"
                        onClick={() =>
                          setSelectedImage({
                            src: result.image,
                            alt: result.alt ?? "Results",
                          })
                        }
                      />
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        </div>
      </section>

      {selectedImage &&
        createPortal(
          <div
            className="fixed inset-0 z-[100] bg-black/80 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="relative w-full max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-3 -right-3 z-10 w-10 h-10 rounded-full bg-white text-black text-2xl leading-none shadow-md"
                aria-label="Close enlarged image"
              >
                ×
              </button>

              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="block max-w-full max-h-[90vh] mx-auto rounded-lg shadow-2xl object-contain"
              />
            </div>
          </div>,
          document.body
        )}
    </>
  );
};
