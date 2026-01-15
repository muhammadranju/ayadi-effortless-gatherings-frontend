import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  path: string;
}
const LogoComponent: React.FC<LogoProps> = ({ path }) => {
  return (
    <Link href={"/"}>
      <Image
        width={500}
        height={600}
        src={path}
        className="lg:w-40 md:w-32 w-28 object-cover"
        alt="logo"
      />
    </Link>
  );
};

export default LogoComponent;
