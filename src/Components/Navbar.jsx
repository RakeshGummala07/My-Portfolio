import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, useMotionValueEvent, useScroll } from "motion/react";
import { AnimatedThemeToggler } from "./AnimatedThemeToggler";

export default function Navbar() {
  const navItems = [
    {
      title : 'About',
      href : '/about'
    },
    {
      title : 'Projects',
      href : '/projects'
    },
    {
      title : 'Contact',
      href : '/contact',
    },
    {
      title : 'Blog',
      href : '/blog'
    },
  ]

  const [hovered, setHovered] = useState(null);
  const {scrollY} = useScroll();

  const [scrolled, setScrolled] = useState(false);


  useMotionValueEvent(scrollY, "change", (latest) => {
    if(latest > 20) {
      setScrolled(true);
      
    }else{
      setScrolled(false);
      
    }
  })
  return (

      <>
        <motion.nav 
        animate={{
            // boxShadow : scrolled ? "0px 2px 3px -1px rgba(0,0,0,0.1), 0px 1px 0px rgba(25,28,33,0.02), 0px 0px 0px 1px rgba(25,28, 33, 0.08)" : "none",
            maxWidth : scrolled ? "80%" : "100%",
            y : scrolled ? 10 : 0,
            borderRadius : scrolled ? "24px" : "0px",
            backgroundColor : scrolled ? "rgba(255, 255, 255, 0.1)" : "transparent",
            backdropFilter : scrolled ? "blur(10px)" : "none",
            transition : {type : "spring", stiffness : 400, damping : 40},
            borderBottom : scrolled ?  "none" : "1px solid gray"
          }
        }
        className={`flex sticky top-0 inset-x-0 items-center justify-between py-2 my-2 z-50 ${scrolled ? "mx-auto" : "max-w-4xl"}`}>
          <p
           style={{
            visibility : scrolled ? "visible" : "hidden",
            opacity : scrolled ? 1 : 0,
            transition : {duration : 0.5}
           }}
           className=" px-3 text-neutral-900 dark:text-neutral-100"
          >Rk</p>

          <div className="flex items-center gap-3">
            <AnimatedThemeToggler />
            {
              navItems.map((items,idx) => (
                <Link
                key={idx}
                to={items.href}
                className="text-sm md:text-base relative px-2 py-1 text-neutral-900 dark:text-neutral-100 transition-colors"
                onMouseEnter={() => setHovered(idx)}
                onMouseLeave={() => setHovered(null)}
                >
                  {
                    hovered === idx && (
                  <motion.span layoutId="hovered-span"
                  className="h-full w-full absolute inset-0 bg-neutral-100 dark:bg-neutral-800 rounded-md transition ease-in duration-300"/>
              )}
                  <span className="relative z-10 font-san">{items.title}</span>
                </Link>
              ))
            }
          </div>
        </motion.nav>
      </>
  );
}
