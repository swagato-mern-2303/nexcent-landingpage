import footerLogo from "../../assets/logo-footer.png";
import { FaInstagram, FaDribbble, FaTwitter, FaYoutube } from "react-icons/fa";
import { BsSend } from "react-icons/bs";

const socialMedias = [
  <FaInstagram key={0} />,
  <FaDribbble key={1} />,
  <FaTwitter key={2} />,
  <FaYoutube key={3} />,
];

const companyLinks = [
  "About us",
  "Blog",
  "Contact us",
  "Pricing",
  "Testimonials",
];

const supportLinks = [
  "Help center",
  "Terms of service",
  "Legal",
  "Privacy policy",
  "Status",
];

function Footer() {
  return (
    <footer className="bg-dark-500 py-16">
      <div className="main-container">
        <div className="flex flex-col items-center justify-between gap-y-20 lg:flex-row">
          <div>
            <img
              className="mx-auto lg:mx-0"
              src={footerLogo}
              alt="Footer logo"
            />
            <div className="my-10 gap-x-3 text-light-400 sm:max-lg:flex">
              <p className="mb-2">Copyright © 2020 Nexcent ltd.</p>
              <p>All rights reserved</p>
            </div>
            <div className="flex justify-center gap-x-4 lg:justify-normal">
              {socialMedias.map((item, index) => (
                <SocialMedias key={index}>{item}</SocialMedias>
              ))}
            </div>
          </div>
          <div className="flex flex-wrap justify-center gap-x-20 gap-y-20">
            <div>
              <h4 className="mb-6 text-xl font-semibold text-white">Company</h4>
              <ul className="flex flex-col gap-y-3">
                {companyLinks.map((item, index) => (
                  <FooterLinks key={index}>{item}</FooterLinks>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="mb-6 text-xl font-semibold text-white">Support</h4>
              <ul className="flex flex-col gap-y-3">
                {supportLinks.map((item, index) => (
                  <FooterLinks key={index}>{item}</FooterLinks>
                ))}
              </ul>
            </div>
            <div className="text-center sm:text-start">
              <h4 className="mb-6 text-xl font-semibold text-white">Support</h4>
              <form className="flex items-center">
                <input
                  className="rounded-lg bg-light-400 bg-opacity-20 px-3 py-2 text-white"
                  type="email"
                  placeholder="Your email address"
                />
                <button className="translate-x-[-200%] text-xl text-white">
                  <BsSend />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialMedias({ children }) {
  return (
    <a
      className="inline-block rounded-full bg-white/20 p-3 text-2xl text-white duration-200 hover:bg-light-400 hover:text-dark-500"
      href=""
    >
      {children}
    </a>
  );
}

function FooterLinks({ children }) {
  return (
    <li>
      <a
        className="text-sm text-light-400 duration-100 hover:text-slate-400"
        href=""
      >
        {children}
      </a>
    </li>
  );
}

export default Footer;
