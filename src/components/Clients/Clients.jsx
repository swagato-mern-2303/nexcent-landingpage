import clientsLogo1 from "../../assets/clients-logo-1.png";
import clientsLogo2 from "../../assets/clients-logo-2.png";
import clientsLogo3 from "../../assets/clients-logo-3.png";
import clientsLogo4 from "../../assets/clients-logo-4.png";
import clientsLogo5 from "../../assets/clients-logo-5.png";
import clientsLogo6 from "../../assets/clients-logo-6.png";

function Clients() {
  return (
    <section className="py-10">
      <div className="main-container">
        <div className="mb-12 text-center">
          <h2 className="mb-2 text-4xl font-semibold text-dark-400">
            Our Clients
          </h2>
          <p className="text-base text-dark-300">
            We have been working with some Fortune 500+ clients
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-x-10 gap-y-6">
          <img src={clientsLogo1} alt="Clients Logo 1" />
          <img src={clientsLogo2} alt="Clients Logo 2" />
          <img src={clientsLogo3} alt="Clients Logo 3" />
          <img src={clientsLogo4} alt="Clients Logo 4" />
          <img src={clientsLogo5} alt="Clients Logo 5" />
          <img src={clientsLogo6} alt="Clients Logo 6" />
          <img src={clientsLogo3} alt="Clients Logo 7" />
        </div>
      </div>
    </section>
  );
}

export default Clients;
