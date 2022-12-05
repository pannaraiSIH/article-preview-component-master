//grab elements
const shareBtn = document.querySelector(".share-icon")
const socialIcons = document.querySelector(".social-outer")

// display social icons when event 'click' on the element happen
shareBtn.addEventListener("click", () => {
    socialIcons.classList.toggle("active")
    shareBtn.classList.toggle("active")
})