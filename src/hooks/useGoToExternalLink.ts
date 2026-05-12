export function useGoToExternalLink() {
  const goToExternalLink = (url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return { goToExternalLink };
}
