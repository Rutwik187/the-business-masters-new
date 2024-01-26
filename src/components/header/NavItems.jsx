import { headerLinks } from "../../../constants";
import Link from "next/link";

const NavItems = () => {
  //   const navigate = useNavigate();
  return (
    <ul className="md:flex-between md:items-center  flex w-full h-full flex-col items-start gap-5 md:flex-row">
      {headerLinks.map((link) => {
        return (
          <li
            key={link.label}
            className="hover:bg-secondary-red uppercase text-white h-full p-4"
          >
            <Link href="/">{link.label}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default NavItems;
