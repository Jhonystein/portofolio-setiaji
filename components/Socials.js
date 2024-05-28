import Link from "next/link";
import {
  RiYoutubeLine,
  RiInstagramLine,
  RiFacebookLine,
  RiLinkedinLine,
  RiTwitterLine,
} from "react-icons/ri";

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link href={"https://www.youtube.com/channel/UCnWLfeW8ILrIF4E4JVqCftA"} className="hover:text-accent transition-all duration-300">
        <RiYoutubeLine />
      </Link>
      <Link href={"https://www.instagram.com/jhonysteinn?igsh=a3R5cmtoYXE2b3Mz"} className="hover:text-accent transition-all duration-300">
        <RiInstagramLine />
      </Link>
      <Link href={"https://www.facebook.com/share/L9AJQJ3tGqSu7cxv/?mibextid=qi2Omg"} className="hover:text-accent transition-all duration-300">
        <RiFacebookLine />
      </Link>
      <Link href={"https://x.com/jhonysteinn?t=eh3eIbJIbDSXrCBzKsQsqA&s=09"} className="hover:text-accent transition-all duration-300">
        <RiTwitterLine />
      </Link>
      <Link href={"https://www.linkedin.com/in/setiaji-alif-5528b6155?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"} className="hover:text-accent transition-all duration-300">
        <RiLinkedinLine/>
      </Link>
    </div>
  );
};

export default Socials;
