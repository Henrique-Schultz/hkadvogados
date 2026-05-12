export function useScrollToSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);

    if (element) {
      const isMobile = window.innerWidth < 768;

      element.scrollIntoView({
        behavior: "smooth",
        block: isMobile ? "start" : "center",
      });
    }
  };

  return { scrollToSection };
}
