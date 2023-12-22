import Image from "next/image";
import styles from "./aboutMe.module.css";

type Info = {
  title: string;
  description: string;
  image: string;
};

const aboutMeInfo: Info[] = [
  {
    title: "Beginning",
    description:
      "I was born in the city of New Delhi to a Math teacher and an engineer. I’ll leave it upto you to guess, who’s who.",
    image: "/images/me-avatar.png",
  },
];

const AboutMe = () => {
  return (
    <div>
      <h2>About Me</h2>
      {aboutMeInfo.map((info: Info, index: number) => (
        <InfoCard key={index} info={info} card_index={index} />
      ))}
    </div>
  );
};

const InfoCard = ({ info, card_index }: { info: Info; card_index: number }) => {
  return (
    <div className={styles.tile}>
      <div className={styles.tile_info}>
        <h3>{info.title}</h3>
        <p>{info.description}</p>
        <button>Test Button</button>
      </div>
      <div className={styles.tile_image_container}>
        <Image
          width={140}
          height={140}
          src={"/images/me-avatar.png"}
          alt="test"
        />
      </div>
    </div>
  );
};

export default AboutMe;
