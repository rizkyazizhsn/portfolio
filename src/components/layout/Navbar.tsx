import Logo from "./Logo";
import { useEffect, useRef } from "react";
import NavbarList from "./NavbarList";
import { motion, Variants } from "motion/react";
import HumbergerButton from "./HumbergerButton";
import { useToggle } from "@/hooks/useToggle";
import NavbarListMobile from "./NavbarListMobile";

const Navbar = () => {
  const headerRef = useRef<HTMLHeadingElement>(null);
  const [isOpen, setIsOpen] = useToggle(false);

  useEffect(() => {
    const handler = () => {
      if (window.innerWidth >= 640) {
        setIsOpen(false);
      }
    };

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("resize", handler);
    window.addEventListener("keydown", handleEsc);
    return () => {
      window.removeEventListener("resize", handler);
      window.removeEventListener("keydown", handleEsc);
    };
  }, []);

  const hideNavItemsVariant: Variants = {
    open: {
      opacity: 0,
      y: "-100%",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    close: {
      opacity: 1,
      y: "0%",
      transition: {
        delay: .7,
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  return (
    <>
      <motion.header
        ref={headerRef}
        initial={{ y: "-100%" }}
        animate={{ y: 0 }}
        transition={{ ease: "easeOut", duration: 0.3 }}
        className="bg-black"
      >
        <div className="container">
          <motion.div
            variants={hideNavItemsVariant}
            animate={isOpen ? "open" : "close"}
            className="flex items-center justify-between py-4"
          >
            {/* Logo */}
            <Logo />
            {/* Humberger Button */}
            <HumbergerButton
              className="block sm:hidden"
              isOpen={isOpen}
              onToggle={setIsOpen}
            />
            {/* Navbar List */}
            <NavbarList className="hidden sm:inline-block" />
          </motion.div>
        </div>
      </motion.header>
      <NavbarListMobile
        isOpen={isOpen}
        onToggle={setIsOpen}
        className="block sm:hidden"
      />
    </>
  );
};

export default Navbar;
