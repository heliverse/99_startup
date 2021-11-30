let topics = ["mobile apps ", "website ", "product "];
let slideIndex = 1;
let slideIndexWork = 1;
let slideIndexMember = 1;
const featureImg = document.querySelector(".feature-img");
const featureTitle = document.querySelector(".feature-title");
const featureDesc = document.querySelector(".feature-desc");
const featureContainer = document.querySelector(".feature-container");
const featuresHeading = document.getElementsByClassName("feature-heading");
const companies = document.getElementsByClassName("companies")
// The index of the currently selected letter from each word
let index = 0;
// The index of the currently selected word from topics
let currentIndex = 0;
// Typing text element
const typingText = document.querySelector(".typing-text");

const typingTextMob = document.querySelector(".typing-text-mob");

//delay function 
function waitforme(ms) {
  
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}



//Typing text function



// var typed = new Typed('#typed',{
// strings:["First sentence","Second sentence"],
// });



// setTimeout(() => {
//   setInterval(() => {
//     if (index === topics[currentIndex].length - 1) {
//       index = 0;
//       currentIndex++;
//     }
//     if (currentIndex === topics.length) {
//       currentIndex = 0;
//     }

//     typingText.textContent = topics[currentIndex].slice(0, ++index);
   
//   }, 800);
// }, 4000);
// for mobile view
// setTimeout(() => {
//   setInterval(() => {
//     if (index === topics[currentIndex].length - 1) {
//       index = 0;
//       currentIndex++;
//     }
//     if (currentIndex === topics.length) {
//       currentIndex = 0;
//     }

//     typingTextMob.textContent = topics[currentIndex].slice(0, ++index);
//   }, 600);
// }, 4000);

//Moving the footer slideshow
showSlidesQuestion(slideIndex);
showSlidesWork(slideIndexWork);
showSlidesMember(slideIndexMember);
// Next/previous controls
function plusSlidesWork(n) {
  showSlidesWork((slideIndexWork += n));
}

// Thumbnail image controls
function currentSlide(n) {
  showSlidesQuestion((slideIndex = n));
}
function currentSlideQuestion(n) {
  showSlidesQuestion((slideIndex = n));
}

function currentSlidMember(n) {
  showSlidesMember((slideIndexMember = n));
}

function showSlidesMember(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides-member");
  var dots = document.getElementsByClassName("dot-member");
  if (n > slides.length) {
    slideIndexMember = 1;
  }
  if (n < 1) {
    slideIndexMember = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndexMember - 1].style.display = "block";
}

function showSlidesQuestion(n) {
console.log("show slider question");

  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot-nav");
  console.log(dots);
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "flex";
  dots[slideIndex - 1].className += " active";
}
function showSlidesWork(n) {
  console.log("slide")
  console.log(n);
  var i;
  var slides = document.getElementsByClassName("mySlides-work");
  var dots = document.getElementsByClassName("dot-work");
  if (n > slides.length) {
    slideIndexWork = 1;
  }
  if (n < 1) {
    slideIndexWork = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndexWork - 1].style.display = "block";
}

function changeFeature(n) {
  console.log(n);
  switch (n) {
    case 1:
      featuresHeading[0].classList.remove("black");
      featuresHeading[1].classList.add("black");
      featuresHeading[2].classList.add("black");
      featuresHeading[3].classList.add("black");
      featuresHeading[4].classList.add("black");
      featureImg.src = "/images/features-image/img-1.png";
      featureTitle.textContent = "A Professional Team at your fingertips";
      featureDesc.textContent =
        "Quickly sign up for the services you need. We take care of the quality & the delivery of the work. Sitback relax and get the best talents and services with ease.";
      document.querySelector(".companies-container").style.display = "flex";
      document.querySelector(
        ".companies-container"
      ).children[1].children[0].src = "/images/company-images/fiverr.png";
      document.querySelector(
        ".companies-container"
      ).children[1].children[1].src = "/images/company-images/upwork.png";
      document.querySelector(
        ".companies-container"
      ).children[2].children[2].src = "/images/company-images/toptal.png";
      break;
    case 2:
      featuresHeading[1].classList.remove("black");
      featuresHeading[0].classList.add("black");
      featuresHeading[2].classList.add("black");
      featuresHeading[4].classList.add("black");
      featuresHeading[3].classList.add("black");
      featureImg.src = "/images/features-image/img-2.png";
      featureTitle.textContent = "Everything from Digital to Design to Tech";
      featureDesc.textContent =
        "Say goodbye to the limitations. Whether you’re an early Stage Startup or an Enterprise, we cater to services across categories. Plug & Play subscriptions on the fly.";
      document.querySelector(".companies-container").style.display = "flex";
      document.querySelector(
        ".companies-container"
      ).children[1].children[0].src = "/images/company-images/fiverr.png";
      document.querySelector(
        ".companies-container"
      ).children[1].children[1].src = "/images/company-images/upwork.png";
      document.querySelector(
        ".companies-container"
      ).children[2].children[2].src = "/images/company-images/toptal.png";

      break;
    case 3:
      featuresHeading[2].classList.remove("black");
      featuresHeading[0].classList.add("black");
      featuresHeading[1].classList.add("black");
      featuresHeading[4].classList.add("black");
      featuresHeading[3].classList.add("black");
      featureImg.src = "/images/features-image/img-3.png";
      featureTitle.textContent = "Collaboration, Team & Project Management";
      featureDesc.textContent =
        "Say goodbye to the limitations. Whether you’re an early Stage Startup or an Enterprise, we cater to services across categories. Plug & Play subscriptions on the fly.";
      document.querySelector(
        ".companies-container"
      ).children[1].children[0].src = "/images/company-images/asana.svg";
      document.querySelector(
        ".companies-container"
      ).children[1].children[1].src = "/images/company-images/trello.svg";
      document.querySelector(
        ".companies-container"
      ).children[2].children[2].src = "/images/company-images/jira.svg";
      document.querySelector(".companies-container").style.display = "flex";
      break;
    case 4:
      featuresHeading[3].classList.remove("black");
      featuresHeading[1].classList.add("black");
      featuresHeading[2].classList.add("black");
      featuresHeading[4].classList.add("black");
      featuresHeading[0].classList.add("black");
      featureImg.src = "/images/features-image/img-4.png";
      featureTitle.textContent = "Collaboration, Team & Project Management";
      featureDesc.textContent =
        "We’d love to solve your problems, in fact, we insist. Our support team is personable, friendly, and always available to help. You can always expect a real human to answer all your questions.";
      document.querySelector(".companies-container").style.display = "none";
      break;
    case 5:
      featuresHeading[3].classList.add("black");
      featuresHeading[1].classList.add("black");
      featuresHeading[2].classList.add("black");
      featuresHeading[4].classList.remove("black");
      featuresHeading[0].classList.add("black");
      featureImg.src = "/images/features-image/img-5.png";
      featureTitle.textContent = "Free-Trials & No-questions asked refunds";
      featureDesc.textContent =
        "You’ll fall in love with us. But, If you don’t and you’re not  100% satisfied after a trial, we’ll refund your money back, No questions asked whatsoever. Tryus out now risk-free.";
      document.querySelector(".companies-container").style.display = "none";
      break;
    default:
      featuresHeading[1].classList.remove("black");
      featuresHeading[1].classList.add("black");
      featuresHeading[2].classList.add("black");
      featuresHeading[3].classList.add("black");
      featureImg.src = "/images/features-image/img-1.png";
      document.querySelector(".companies-container").style.display = "flex";
      break;
  }
}







// function companieSlider(){
// let companies = document.getElementsByClassName('companies');
// var div1 = document.createElement("div");
// div1.add.classList('marquee-container')
// var img = document.createElement("img");
// img.src="./99 Startup_files/Expertrons _ Website 1.png"
// var img1 = document.createElement("img");
// img1.src="./99 Startup_files/Expertrons _ Website 1.png"
// var img2 = document.createElement("img");
// img2.src="./99 Startup_files/Expertrons _ Website 1.png"
// var img3 = document.createElement("img");
// img3.src="./99 Startup_files/Expertrons _ Website 1.png"
// var img4 = document.createElement("img");
// img4.src="./99 Startup_files/Expertrons _ Website 1.png"
// var img5 = document.createElement("img");
// img5.src="./99 Startup_files/Expertrons _ Website 1.png"
// div1.appendChild(img)
// div1.appendChild(img1)
// div1.appendChild(img2)
// div1.appendChild(img3)
// div1.appendChild(img4)
// div1.appendChild(img5)

// }


var typed = new Typed('#typed',{
  stringsElement:'#type-strings',
  backSpeed: 90,
  typeSpeed: 90,
  loop: true,
  shuffle: true,
  showCursor: false
});
console.log(typed)