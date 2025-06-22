'use client';

import { useRef, useState } from "react";
import Cursor from "../components/Cursor";
import Cursor2 from "../components/Cursor2";
import Hamburger from "../components/Hamburger";
import Logo from "../components/Logo";
import Menu from "../components/Menu";
import PageTransition from "../components/PageTransition";
import { AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { ReactLenis } from 'lenis/react'



export default function Layout({ children }) {
  const stickyElement = useRef(null);
  const logoElement = useRef(null);
  const pathname = usePathname();
  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  return (
    <ReactLenis root>
        <main id="app">
            <Cursor stickyElement={stickyElement} />
            <Cursor2 stickyElement={logoElement} />
            <Logo ref={logoElement} />
            <Hamburger ref={stickyElement} handleToggle={handleToggle} menuIsActive={isActive} />
            <Menu handleToggle={handleToggle} menuIsActive={isActive} />
            <AnimatePresence mode="wait">
                <PageTransition key={pathname}>
                    {children}
                </PageTransition>
            </AnimatePresence>
        </main>
    </ReactLenis>
  );
}
