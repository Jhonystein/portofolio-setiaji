import Image from "next/image";
import Link from "next/link";
import Sosials from "../components/Socials";

const Header = () => {
  return (
    <header className="absolute z-10 w-full flex items-center px-16 xl:px-0 xl:h-[90px]">
    <div className="container mx-auto flex justify-between items-center">
      <div className="flex flex-col lg:flex-row items-center justify-between w-full py-8 gap-y-6">
        <Link href={'/'}>
          <Image
            src={"/logo.png"}
            width={170}
            height={35}
            alt=""
            priority={true}
            className="mx-auto"
          />
        </Link>
  
        <div className="flex justify-center lg:justify-end w-full lg:w-auto">
          <Sosials />
        </div>
      </div>
    </div>
  </header>
  
  );
};

export default Header;
