import { Fragment } from "react";
import { motion } from "motion/react";
import { MENU_LIST } from "@/app/constants/navigation-constant";

const NavbarList = ({className} : { className?: string }) => {
  return (
    <nav className={className}>
      <ul className="flex items-center gap-x-7">
        {MENU_LIST.map(({ title, href, disabled }, index) => (
          <Fragment key={title}>
            {!disabled && (
              <motion.li
                initial={{ opacity: 0, y: "-30%" }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: index * 0.1,
                  ease: "easeOut",
                  duration: 0.3,
                }}
              >
                <a
                  href={href}
                  className="relative text-white text-sm after:h-[1px] after:bg-white after:absolute after:left-0 after:w-full after:-bottom-1.5 after:origin-bottom-right after:scale-x-0 hover:after:scale-x-100 hover:after:origin-bottom-left after:transition-transform after:duration-300"
                >
                  {title}
                </a>
              </motion.li>
            )}
          </Fragment>
        ))}
      </ul>
    </nav>
  );
};

export default NavbarList;
