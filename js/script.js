const main = document.querySelector('main'),
  starIcon = main.querySelector('.star-icon i'),
  ratingBtn = main.querySelectorAll('.rating-btn'),
  submitBtn = main.querySelector('#submitBtn'),
  thankYouSection = document.querySelector('.thank-you-section'),
  feedbackResult = thankYouSection.querySelector('.feedback-result');

let ratingValue = 0;
const toggleStarIcon = () => {
  if (starIcon.classList.contains('fa-solid')) {
    starIcon.classList.remove('fa-solid');
    starIcon.classList.add('fa-regular');
  } else {
    starIcon.classList.remove('fa-regular');
    starIcon.classList.add('fa-solid');
  }
};
// event linsteners
//toggling star-icon
starIcon.addEventListener('click', toggleStarIcon);

// getting rating
ratingBtn.forEach((btn) => {
  btn.addEventListener('click', () => {
    ratingValue = btn.innerHTML;
  });
});

// when Submit

submitBtn.addEventListener('click', (event) => {
  event.preventDefault(); // prevent form submission
  // redirect to another HTML page
  if (ratingValue === 0) {
    window.alert('Please Select number from 1 to 5');
  } else {
    main.classList.add('hidden');
    thankYouSection.classList.add('show');
    feedbackResult.innerHTML = `You Selected ${ratingValue} out of 5`;
  }
});
