import communityIcon1 from "../../assets/community-icon-1.png";
import communityIcon2 from "../../assets/community-icon-2.png";
import communityIcon3 from "../../assets/community-icon-3.png";

const communityCard = [
  {
    icon: communityIcon1,
    title: "Membership Organisations",
    content:
      "Our membership management software provides full automation of membership renewals and payments",
  },
  {
    icon: communityIcon2,
    title: "National Associations",
    content:
      "Our membership management software provides full automation of membership renewals and payments",
  },
  {
    icon: communityIcon3,
    title: "Clubs And Groups",
    content:
      "Our membership management software provides full automation of membership renewals and payments",
  },
];

function Community() {
  return (
    <section className="py-10">
      <div className="main-container">
        <div className="mb-10 text-center">
          <h1 className="mx-auto mb-2 max-w-[542px] text-4xl font-semibold text-dark-400">
            Manage your entire community in a single system
          </h1>
          <p className="text-base text-dark-300">
            Who is Nextcent suitable for?
          </p>
        </div>
        <div className="grid grid-cols-1 justify-items-center gap-x-[40px] gap-y-10 md:grid-cols-3 lg:gap-x-[110px]">
          {communityCard.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              content={card.content}
              icon={card.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function Card({ icon, title, content }) {
  return (
    <div className="max-w-[310px] rounded-lg px-8 py-6 text-center shadow-[0_2px_4px_0_rgba(171,190,209,0.20)] duration-200 hover:shadow-[0_4px_8px_0_rgba(171,190,209,0.60)]">
      <img className="mx-auto" src={icon} alt="Icon" />
      <h3 className="mx-auto mb-2 mt-4 max-w-[250px] text-[28px] font-bold text-dark-400">
        {title}
      </h3>
      <p className="text-sm text-dark-300">{content}</p>
    </div>
  );
}

export default Community;
