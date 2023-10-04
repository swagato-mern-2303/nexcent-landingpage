import calenderImg from "../../assets/calender-img.png";
import Button from "../Buttons/Button";

function Calender() {
  return (
    <section>
      <div className="main-container">
        <div className="items-center gap-x-14 text-center md:flex md:text-start">
          <div>
            <picture>
              <img
                className="mx-auto"
                src={calenderImg}
                alt="Unlock section image"
              />
            </picture>
          </div>
          <div className="mt-14 md:mt-0 md:max-w-[661px]">
            <div className="md:max-w-[601px]">
              <h2 className="text-3xl font-semibold text-dark-400 md:text-4xl">
                How to design your site footer like we did
              </h2>
              <p className="mb-8 mt-4 text-sm text-dark-300">
                Donec a eros justo. Fusce egestas tristique ultrices. Nam
                tempor, augue nec tincidunt molestie, massa nunc varius arcu, at
                scelerisque elit erat a magna. Donec quis erat at libero
                ultrices mollis. In hac habitasse platea dictumst. Vivamus
                vehicula leo dui, at porta nisi facilisis finibus. In euismod
                augue vitae nisi ultricies, non aliquet urna tincidunt. Integer
                in nisi eget nulla commodo faucibus efficitur quis massa.
                Praesent felis est, finibus et nisi ac, hendrerit venenatis
                libero. Donec consectetur faucibus ipsum id gravida.
              </p>
            </div>
            <Button>Learn More</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Calender;
