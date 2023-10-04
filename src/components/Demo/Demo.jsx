import Button from "../Buttons/Button";

import { BsArrowRight } from "react-icons/bs";

function Demo() {
  return (
    <section className="bg-light-400 py-8">
      <div className="main-container">
        <div className="text-center">
          <h2 className="mx-auto mb-8 max-w-[887px] text-[44px] font-semibold leading-[56px] text-dark-500 md:text-[64px] md:leading-[76px]">
            Pellentesque suscipit fringilla libero eu.
          </h2>
          <Button>
            <div className="flex items-center gap-x-2">
              Get a Demo <BsArrowRight />
            </div>
          </Button>
        </div>
      </div>
    </section>
  );
}

export default Demo;
