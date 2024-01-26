import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import NavItems from "./NavItems";
import { Menu } from "lucide-react";

const MobileNav = () => {
  return (
    <nav className="md:hidden block">
      <Sheet>
        <SheetTrigger className="align-middle h-full">
          <Menu className="my-auto mx-4" color="#FFFFFF" />
        </SheetTrigger>
        <SheetContent
          side="left"
          className="flex flex-col gap-6 bg-secondary-red md:hidden"
        >
          <NavItems />
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default MobileNav;
