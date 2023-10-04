import bannerImg from "../../assets/banner-img.png";
import Button from "../Buttons/Button";

function Banner() {
  return (
    <section className="bg-light-400 py-8 md:py-24">
      <div className="main-container">
        <div className="flex flex-col items-center gap-x-8 gap-y-10 md:flex-row lg:gap-x-[104px]">
          <div className="text-center md:text-start">
            <h1 className="text-4xl font-semibold leading-[46px] text-dark-400 md:text-[54px] md:leading-[76px] lg:max-w-[657px] lg:text-[64px]">
              Lessons and insights
              <span className="text-accent"> from 8 years</span>
            </h1>
            <p className="mb-8 mt-4 text-dark-300">
              Where to grow your business as a photographer: site or social
              media?
            </p>
            <Button>Register</Button>
          </div>
          <div className="md:min-w-[320px]">
            <picture>
              <img src={bannerImg} alt="Banner Image" />
            </picture>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
