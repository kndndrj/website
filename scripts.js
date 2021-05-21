function openPopup(itemToShow) {
    var popup = document.querySelector(itemToShow);
    if (popup.style.display === "block") {
      popup.style.display = "none";
    } else {
      popup.style.display = "block";
    }
}
