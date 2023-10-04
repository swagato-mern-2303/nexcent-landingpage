import membersIcon from "../../assets/achievements-members-icon.png";
import clubsIcon from "../../assets/achievements-clubs-icon.png";
import eventsIcon from "../../assets/achievements-events-icon.png";
import paymentsIcon from "../../assets/achievements-payments-icon.png";

const achievementsCardData = [
  { icon: membersIcon, title: "members", number: "2,245,341" },
  { icon: clubsIcon, title: "clubs", number: "46,328" },
  { icon: eventsIcon, title: "event bookings", number: "828,867" },
  { icon: paymentsIcon, title: "payments", number: "1,926,436" },
];

function Achievements() {
  return (
    <section className="my-12 bg-light-400 py-16">
      <div className="main-container">
        <div className="items-center gap-x-[72px] lg:flex">
          <div className="flex-1 text-center lg:text-start">
            <h2 className="mb-2 text-3xl font-semibold text-dark-400 md:text-4xl lg:max-w-[408px]">
              Helping a local
              <span className="text-accent"> business reinvent itself</span>
            </h2>
            <p className="text-dark-600">
              We reached here with our hard work and dedication
            </p>
          </div>
          <div className="mt-16 flex-1 lg:mt-0">
            <div className="grid grid-cols-1 gap-x-[30px] gap-y-10 sm:grid-cols-2">
              {achievementsCardData.map((card, index) => (
                <AchievementsCard
                  key={index}
                  icon={card.icon}
                  title={card.title}
                  number={card.number}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AchievementsCard({ icon, title, number }) {
  return (
    <div className="mx-auto w-[230px] lg:mx-0">
      <div className="flex items-center gap-x-4">
        <img src={icon} alt={`${title} icon`} />
        <div>
          <h3 className="text-[28px] font-bold leading-[36px] text-dark-400">
            {number}
          </h3>
          <p className="capitalize leading-[24px] text-dark-300">{title}</p>
        </div>
      </div>
    </div>
  );
}

export default Achievements;
