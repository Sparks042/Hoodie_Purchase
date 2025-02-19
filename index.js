// get the elements from the DOM
const decrementButton = document.querySelector(".minus-btn")
const incrementButton = document.querySelector(".plus-btn")
const quantityValue = document.querySelector(".quantity-value")

// add the event listener to the decrementButton
decrementButton.addEventListener("click", () => {
   if(quantityValue.value <= 1){
    quantityValue = 1;
   }
   else {
    quantityValue.value = parseInt(quantityValue.value) - 1;
   }
})
// add the event listener to the incrementButton

incrementButton.addEventListener("click", () => {
   quantityValue.value = parseInt(quantityValue.value) + 1;
})







// get the elements from the DOM
const questionContainer = document.querySelectorAll(".faq-questions-content");
const answerContainer = document.querySelectorAll(".faq-answer");
const arrowRotate = document.querySelectorAll(".arrow-rotate");
// console.log(arrowRotate);

// select all the "questionContainer" elements

for(let i = 0; i<questionContainer.length; i++){
    // add the click event to all the "questionContainer"elements
    questionContainer[i].addEventListener("click", () =>{
    // open the 'answerContainer' element with the same 'i' as the clicked 'questionContainer' element
        answerContainer[i].classList.toggle("faq-answer-opened")
    // rotate the arrowRotate element with the same "i" as the clicked 'q' element
        arrowRotate[i].classList.toggle("arrow-rotation")
    })
}

// FOR THE NAVIGATION BAR AND ITS INDIVIDUAL CONTENT
// Get all the navigation link
const overviewTab = document.getElementById("overview-tab");
const sizingTab = document.getElementById("sizing-tab");
const packagingTab = document.getElementById("packaging-tab");
const shippingAndReturnTab = document.getElementById("shipping-return-tap");
// Get all the content sections
const overviewSection = document.querySelector(".overview-content");
const sizingSection = document.querySelector(".sizing-section");
const shippingAndReturnSection = document.querySelector(".shipping-and-return-container");
const packagingSection = document.querySelector(".packaging-container")
// Function to hide all sections
function hideAllSections() {
    overviewSection.classList.remove("active");
    sizingSection.classList.remove("active");
    shippingAndReturnSection.classList.remove("active");
    packagingSection.classList.remove("active");

    overviewTab.classList.remove("active");
    sizingTab.classList.remove("active");
    packagingTab.classList.remove("active");
    shippingAndReturnTab.classList.remove("active");
}

// Event listeners for the tabs
overviewTab.addEventListener("click", function(event) {
    event.preventDefault();
    hideAllSections();
    overviewSection.classList.add("active");
    overviewTab.classList.add("active");  // Add 'active' class to the clicked tab

});

sizingTab.addEventListener("click", function(event) {
    event.preventDefault();
    hideAllSections();
    sizingSection.classList.add("active");
    sizingTab.classList.add("active");  // Add 'active' class to the clicked tab

});

packagingTab.addEventListener("click", function(event) {
    event.preventDefault();
    hideAllSections();
    packagingSection.classList.add("active");
    packagingTab.classList.add("active");  // Add 'active' class to the clicked tab

});

shippingAndReturnTab.addEventListener("click", function(event) {
    event.preventDefault();
    hideAllSections();
    shippingAndReturnSection.classList.add("active");
    shippingAndReturnTab.classList.add("active");  // Add 'active' class to the clicked tab
});

// to display image on click of any image
// Get all images in the "hoddie-images" div
let hoodieImages = document.querySelectorAll('.hoddie-images img');
hoodieImages = [...hoodieImages]
// Get the product image container
const productImage = document.getElementById('active-image');


// Loop through each image and add a click event listener
hoodieImages.forEach((image) => {
    image.addEventListener('click', function() {
        // Change the source of the product image to the clicked image's source
        productImage.src = image.src;
    });
});


