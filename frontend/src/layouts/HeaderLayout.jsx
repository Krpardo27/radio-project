import { useEffect, useRef, useState } from "react";
import Header from "../components/Header";

const HeaderLayout = () => {
  const [compact, setCompact] = useState(false);
  const [showNav, setShowNav] = useState(true);

  const lastY = useRef(0);
  const ticking = useRef(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;

      if (ticking.current) return;
      ticking.current = true;

      requestAnimationFrame(() => {
        const prev = lastY.current;
        const diff = y - prev;

        setCompact(y > 80);

        if (y < 120) {
          setShowNav(true);
        } else if (diff > 10) {
          // scrolling down
          setShowNav(false);
        } else if (diff < -10) {
          // scrolling up
          setShowNav(true);
        }

        lastY.current = y;
        ticking.current = false;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return <Header compact={compact} showNav={showNav} />;
};

export default HeaderLayout;
