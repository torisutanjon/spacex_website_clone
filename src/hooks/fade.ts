const Fades = {
  reveal: () => {
    const reveals = Array.from(
      document.querySelectorAll(".reveal")
    ) as HTMLDivElement[];
    reveals.forEach((element) => {
      const windowHeight = window.innerHeight;
      const element_top = element.getBoundingClientRect().top;
      const element_visible = -20;

      if (element_top < windowHeight - element_visible) {
        element.classList.add("active");
      } else {
        element.classList.remove("active");
      }
    });
  },
};
window.addEventListener("scroll", Fades.reveal);

export default Fades;
