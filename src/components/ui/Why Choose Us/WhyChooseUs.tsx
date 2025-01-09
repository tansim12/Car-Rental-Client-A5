import { useEffect, useRef } from "react";
import { animate, scroll, spring } from "motion";
import { ReactLenis } from "lenis/react";
import working from "../../../assets/Image/working2.jpg";
import flexab from "../../../assets/Image/flexablity.jpg";
import afford from "../../../assets/Image/afford.jpg";
import variety from "../../../assets/Image/Variety.jpg";
import Reliability from "../../../assets/Image/Reliability.webp";

const WhyChooseUs = () => {
  const ulRef = useRef<HTMLUListElement | null>(null);

  useEffect(() => {
    const ulElement = ulRef.current;
    if (!ulElement) {
      console.error("ulRef.current is null");
      return;
    }

    const items = ulElement.querySelectorAll("li");
    if (items.length === 0) {
      console.error("No list items found");
      return;
    }

    const section = document.querySelector("section");
    if (!section) {
      console.error("Section element not found");
      return;
    }

    const controls = animate(
      ulElement,
      {
        transform: [`none`, `translateX(-${(items.length - 1) * 100}vw)`],
      },
      { easing: spring() }
    );

    scroll(controls, { target: section });

    const segmentLength = 1 / items.length;
    items.forEach((item, i) => {
      const header = item.querySelector("h2");

      if (header) {
        const animation = animate([header], { x: [800, -800] });
        scroll(animation, {
          target: section,
          offset: [
            [i * segmentLength, 1],
            [(i + 1) * segmentLength, 0],
          ],
        });
      } else {
        console.error(`Header not found in item ${i}`);
      }
    });
  }, []);

  return (
    <div>
      <ReactLenis root>
        <main>
          <article>
            <header className="text-white relative w-full mb-16 place-content-center  ">
              <h1 className="text-6xl font-bold text-center tracking-tight">
                Why Choose Us for <br />
                <span className="text-secondary">Car Rentals </span>
              </h1>
            </header>
            <section className="h-[500vh] relative   ">
              <ul ref={ulRef} className="flex sticky top-0">
                <li className="h-screen w-screen flex-shrink-0 bg-red-400 flex flex-col justify-center overflow-hidden items-center">
                  <h2 className="text-[20vw] font-semibold relative bottom-5 inline-block text-black">
                    Flexibility
                  </h2>
                  <img
                    src={flexab}
                    className="2xl:w-[550px] w-[380px] absolute bottom-0"
                    width={500}
                    height={500}
                    alt="image"
                  />
                </li>
                <li className="h-screen w-screen flex-shrink-0 bg-blue-400 flex flex-col justify-center overflow-hidden items-center">
                  <h2 className="text-[20vw] font-semibold relative bottom-5 inline-block text-black">
                    WORK
                  </h2>
                  <img
                    src={working}
                    className="2xl:w-[550px] w-[380px] absolute bottom-0"
                    width={500}
                    height={500}
                    alt="image"
                  />
                </li>
                <li className="h-screen w-screen flex-shrink-0 bg-orange-400 flex flex-col justify-center overflow-hidden items-center">
                  <h2 className="text-[20vw] font-semibold relative bottom-5 inline-block text-black">
                    Affordability
                  </h2>
                  <img
                    src={afford}
                    className="2xl:w-[550px] w-[380px] absolute bottom-0"
                    width={500}
                    height={500}
                    alt="image"
                  />
                </li>
                <li className="h-screen w-screen  flex-shrink-0 bg-yellow-400 flex flex-col justify-center overflow-hidden items-center">
                  <h2 className="text-[20vw] font-semibold relative bottom-5 inline-block text-black">
                    Variety
                  </h2>
                  <img
                    src={variety}
                    className="2xl:w-[550px] w-[380px] absolute bottom-0"
                    width={500}
                    height={500}
                    alt="image"
                  />
                </li>
                <li className="h-screen w-screen flex-shrink-0 bg-green-400 flex flex-col justify-center overflow-hidden items-center">
                  <h2 className="text-[20vw] font-semibold relative bottom-5 inline-block text-black">
                    Reliability
                  </h2>
                  <img
                    src={Reliability}
                    className="2xl:w-[550px] w-[380px] absolute bottom-0"
                    width={500}
                    height={500}
                    alt="image"
                  />
                </li>
              </ul>
            </section>
          </article>
          <div className="progress fixed left-0 right-0 h-2 rounded-full bg-red-600 bottom-[50px] scale-x-0"></div>
        </main>
      </ReactLenis>
    </div>
  );
};

export default WhyChooseUs;
