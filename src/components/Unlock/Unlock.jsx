import unlockImg from "../../assets/unlock-img.png";
import Button from "../Buttons/Button";

function Unlock() {
  return (
    <section>
      <div className="main-container">
        <div className="items-center gap-x-14 text-center md:flex md:text-start">
          <div>
            <picture>
              <img
                className="mx-auto"
                src={unlockImg}
                alt="Unlock section image"
              />
            </picture>
          </div>
          <div className="mt-14 md:mt-0 md:max-w-[661px]">
            <div className="md:max-w-[601px]">
              <h2 className="text-3xl font-semibold text-dark-400 md:text-4xl">
                The unseen of spending three years at Pixelgrade
              </h2>
              <p className="mb-8 mt-4 text-sm text-dark-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
                amet justo ipsum. Sed accumsan quam vitae est varius fringilla.
                Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
                tristique iaculis. Nullam pulvinar sit amet risus pretium
                auctor. Etiam quis massa pulvinar, aliquam quam vitae, tempus
                sem. Donec elementum pulvinar odio.
              </p>
            </div>
            <Button>Learn More</Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Unlock;
