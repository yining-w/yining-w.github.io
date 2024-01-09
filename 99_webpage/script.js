console.log("JavaScript file is loaded and running");

window.addEventListener('scroll', () => {
  const scrollyContainer = document.querySelector('.scrollytelling-container');
  const scrollyContainerBottom = scrollyContainer.offsetTop + scrollyContainer.offsetHeight - window.innerHeight;
  const scrollPosition = window.pageYOffset;

  const sections = document.querySelectorAll('.story-section');

  // Check if the scroll position is beyond the scrollytelling container
  if (scrollPosition > scrollyContainerBottom) {
      console.log("Reached the end of the storytelling container");

      sections.forEach((section) => {
        const image = section.querySelector('img');
        image.style.opacity = 1;
        image.style.position = 'absolute';

      });

} else {

  sections.forEach((section, index) => {
      const image = section.querySelector('img');
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionBottom = sectionTop + sectionHeight;

      // Check if the scroll position is past the top of the section
      if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          image.style.opacity = 1; // Show the image
          image.style.position = 'fixed';


          // Show all previous images
          for (let j = 0; j <= index; j++) {
              const previousImage = sections[j].querySelector('img');
              previousImage.style.opacity = 1;

          }
      } else {
          image.style.opacity = 0; // Hide the image
          image.style.position = 'fixed';

      }
  });
};
});



// progress bar
function move() {
  var elem = document.getElementById("myBar");
  var width = 1;
  var id = setInterval(frame, 10);
  function frame() {
    if (width >= 100) {
      clearInterval(id);
    } else {
      width++;
      elem.style.width = width + '%';
    }
  }
}

window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}