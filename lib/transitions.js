export const pageAnimation = {
  name: "pageTransition",
  initial: {
    x: "-200%",
  },
  animate: {
    x: 0,
  },
  exit: {
    x: "200%",
  },
  transition: {
    duration: 0.2,
  }
}

export const cardAnimation = {
  initial: {
    x: "-400%",
  },
  animate: {
    x: 0,
  },
  transition: {
    delay: 0.2,
    duration: 0.1,
  }
}

export const navbarAnimation = {
  open: {
    clipPath: `circle(200% at 25px 25px)`,
    transition: {
      type: "spring",
      stiffness: 50,
      restDelta: 1,
    }
  },
  closed: {
    clipPath: "circle(25px at 25px 25px)",
    transition: {
      type: "spring",
      stiffness: 400,
      damping: 40,
    }
  }
}

