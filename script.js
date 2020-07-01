const shareTab = document.querySelector(".preview-share-tab");
const shareButton = document.querySelector(".share-button");

const toggleTab = () => {
  shareTab.classList.toggle("active");
  shareButton.classList.toggle("active");
};

shareButton.addEventListener("click", toggleTab);
