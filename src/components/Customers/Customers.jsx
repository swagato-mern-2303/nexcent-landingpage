import customersImg from "../../assets/customers-img.png";

import { BsArrowRight } from "react-icons/bs";

import clientsLogo1 from "../../assets/clients-logo-1.png";
import clientsLogo2 from "../../assets/clients-logo-2.png";
import clientsLogo3 from "../../assets/clients-logo-3.png";
import clientsLogo4 from "../../assets/clients-logo-4.png";
import clientsLogo5 from "../../assets/clients-logo-5.png";
import clientsLogo6 from "../../assets/clients-logo-6.png";

function Customers() {
  return (
    <section className="my-12 bg-light-400 py-8">
      <div className="main-container">
        <div className="items-center justify-between lg:flex">
          <div>
            <picture>
              <img
                className="mx-auto min-w-[325px]"
                src={customersImg}
                alt="Customers section image"
              />
            </picture>
          </div>
          <div className="text-center lg:max-w-[748px] lg:text-start">
            <p className="font-medium text-dark-300">
              Maecenas dignissim justo eget nulla rutrum molestie. Maecenas
              lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu
              enim metus. Vivamus sed libero ornare, tristique quam in, gravida
              enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet
              elit at ligula molestie, nec molestie mi blandit. Suspendisse
              cursus tellus sed augue ultrices, quis tristique nulla sodales.
              Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse
              potenti. Quisque malesuada enim sapien, vitae placerat ante
              feugiat eget. Quisque vulputate odio neque, eget efficitur libero
              condimentum id. Curabitur id nibh id sem dignissim finibus ac sit
              amet magna.
            </p>
            <h3 className="mb-2 mt-4 text-xl font-semibold text-accent">
              Tim Smith
            </h3>
            <p className="text-dark-200">
              British Dragon Boat Racing Association
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-between gap-y-4">
              <img src={clientsLogo1} alt="Clients Logo" />
              <img src={clientsLogo2} alt="Clients Logo" />
              <img src={clientsLogo3} alt="Clients Logo" />
              <img src={clientsLogo4} alt="Clients Logo" />
              <img src={clientsLogo5} alt="Clients Logo" />
              <img src={clientsLogo6} alt="Clients Logo" />
              <a href="">
                <div className="group flex items-center gap-x-2 pr-3 text-xl font-semibold text-accent duration-200 hover:text-green-700">
                  Meet all customers
                  <span className="duration-200 group-hover:translate-x-3">
                    <BsArrowRight />
                  </span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Customers;
