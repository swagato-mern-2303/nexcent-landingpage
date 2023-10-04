import blogImg1 from "../../assets/blog-img-1.png";
import blogImg2 from "../../assets/blog-img-2.png";
import blogImg3 from "../../assets/blog-img-3.png";

import { BsArrowRight } from "react-icons/bs";

const blogCardsData = [
  {
    image: blogImg1,
    content: "Creating Streamlined Safeguarding Processes with OneRen",
  },
  {
    image: blogImg2,
    content:
      "What are your safeguarding responsibilities and how can you manage them?",
  },
  {
    image: blogImg3,
    content: "Revamping the Membership Model with Triathlon Australia",
  },
];

function Blog() {
  return (
    <section>
      <div className="main-container">
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-dark-400 md:text-4xl">
            Caring is the new marketing
          </h2>
          <p className="mx-auto mb-4 mt-2 max-w-[628px] text-dark-300">
            The Nexcent blog is the best place to read about the latest
            membership insights, trends and more. See who&apos;s joining the
            community, read about how our community are increasing their
            membership income and lots more.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-x-6 md:grid-cols-3">
          {blogCardsData.map((card, index) => (
            <BlogCard key={index} img={card.image} content={card.content} />
          ))}
        </div>
      </div>
    </section>
  );
}

function BlogCard({ img, content }) {
  return (
    <div className="mx-auto max-w-[450px]">
      <div>
        <img className="w-full" src={img} alt="blog card image" />
      </div>
      <div className="mx-auto w-[86%] translate-y-[-50%] rounded-lg bg-light-400 p-4 text-center text-xl font-semibold shadow-[0_8px_16px_0_rgba(171,190,209,0.40)]">
        <p className="mb-6 text-dark-300">{content}</p>
        <a
          className="group flex items-center justify-center gap-x-2 text-accent"
          href=""
        >
          Read more
          <span className="duration-150 group-hover:translate-x-2">
            <BsArrowRight />
          </span>
        </a>
      </div>
    </div>
  );
}

export default Blog;
