console.log("JavaScript file is loaded and running");

window.addEventListener('scroll', () => {
    const scrollPosition = window.pageYOffset;

    document.querySelectorAll('.container').forEach((container, index) => {
        // Existing logic for handling fixed positioning of divider blocks
    });

    document.querySelectorAll('.scrollytelling-container').forEach((scrollyContainer) => {
        const containerTop = scrollyContainer.offsetTop;
        const containerBottom = containerTop + scrollyContainer.offsetHeight;
        let isWithinContainer = scrollPosition + window.innerHeight > containerTop && scrollPosition < containerBottom;

        let highestActiveSectionTop = Infinity; // Initialize with Infinity for comparison

        scrollyContainer.querySelectorAll('.story-section').forEach((section) => {
            const image = section.querySelector('img');
            const sectionRect = section.getBoundingClientRect();
            const sectionTopRelativeToDocument = window.pageYOffset + sectionRect.top; // Absolute top position relative to the document

            // Determine if section is currently in view
            const sectionInView = sectionRect.top < window.innerHeight && sectionRect.bottom > 0;

            if ((sectionInView || sectionTopRelativeToDocument < scrollPosition) && isWithinContainer) {
                image.style.opacity = 1;
                image.style.position = 'fixed';
                highestActiveSectionTop = Math.min(highestActiveSectionTop, sectionTopRelativeToDocument);
            } else {
                // This condition ensures images are hidden when scrolling past the container
                image.style.opacity = 0;
            }
        });

        // Ensure all images above the highest active section remain visible within the container
        if (isWithinContainer) {
            scrollyContainer.querySelectorAll('.story-section').forEach((section) => {
                const sectionTopRelativeToDocument = window.pageYOffset + section.getBoundingClientRect().top;
                if (sectionTopRelativeToDocument <= highestActiveSectionTop) {
                    const image = section.querySelector('img');
                    image.style.opacity = 1; // Keep previous images visible
                    image.style.position = 'fixed';
                }
            });
        } else {
            // Additional condition to hide all images if the viewport is no longer in the container
            scrollyContainer.querySelectorAll('.story-section img').forEach((image) => {
                image.style.opacity = 0;
            });
        }

        // Special handling for the first image when no section is active and viewport is within the container
        if (!isWithinContainer) {
            const firstImage = scrollyContainer.querySelector('.story-section img');
            if (firstImage) {
                firstImage.style.opacity = 0;
            }
        }
    });
});





// Progress bar
window.onscroll = function() {myFunction()};

function myFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
}

// swipe
document.addEventListener('scroll', () => {
    const windowHeight = window.innerHeight;
    const scrollY = window.scrollY;
    const container = document.querySelector('.image-swipe-container');
    const image = container.querySelector('img');
  
    const containerTop = container.offsetTop;
    const containerHeight = container.offsetHeight;
    const containerBottom = containerTop + containerHeight;
  
    // Check if the container is within the viewport
    if (scrollY + windowHeight > containerTop && scrollY < containerBottom) {
        const visibleRatio = Math.max(0, Math.min(1, (scrollY + windowHeight - containerTop) / containerHeight));
        const clipPathValue = visibleRatio * 100;
        image.style.clipPath = `polygon(0 0, ${clipPathValue}% 0, ${clipPathValue}% 100%, 0 100%)`;
    }
  });


// divider
window.addEventListener('scroll', function() {
    var firstDivider = document.getElementById('one');
    var secondDivider = document.getElementById('two');
    var container = document.querySelector('.container2');

    var introSectionHeight = document.querySelector('.intro-section').offsetHeight;
    var scrollTop = window.scrollY;

    // Handle first divider
    if (scrollTop >= introSectionHeight && scrollTop < container.offsetTop) {
      firstDivider.classList.add('fixed');
    } else {
      firstDivider.classList.remove('fixed');
    }

    // Handle second divider
    if (scrollTop >= container.offsetTop && scrollTop < container.offsetTop + container.offsetHeight) {
      secondDivider.classList.add('fixed');
    } else {
      secondDivider.classList.remove('fixed');
    }
});

// divider for imagine spaces
window.addEventListener('scroll', function() {
    var fifthDivider = document.getElementById('five');
    var container = document.querySelector('.container3');

    var introSectionHeight = document.querySelector('.intro-section').offsetHeight;
    var scrollTop = window.scrollY;

    // Handle first divider
    if (scrollTop >= container.offsetTop && scrollTop < container.offsetTop + container.offsetHeight) {
        fifthDivider.classList.add('fixed');
    } else {
        fifthDivider.classList.remove('fixed');
    }

});

document.addEventListener('DOMContentLoaded', () => {
    const img = document.getElementById('interactiveImage');
    const mapAreas = document.querySelectorAll('area');

    img.onload = function() {
        const imgWidth = img.offsetWidth;
        const imgHeight = img.offsetHeight;
        const scaleX = 0.6; // Image width scale
        const translateX = -0.8 * imgWidth * scaleX; // Image translate X
        const translateY = -0.6 * imgHeight * scaleX; // Image translate Y

        mapAreas.forEach(area => {
            area.addEventListener('mouseenter', function() {
                const coords = this.coords.split(',').map(x => parseInt(x));
                const overlay = document.createElement('div');
                overlay.style.position = 'absolute';

                // Adjust the coordinates based on the image's transformation
                overlay.style.left = `${img.offsetLeft + (coords[0] * scaleX + translateX)}px`;
                overlay.style.top = `${img.offsetTop + (coords[1] * scaleX + translateY)}px`;
                overlay.style.width = `${(coords[2] - coords[0]) * scaleX}px`;
                overlay.style.height = `${(coords[3] - coords[1]) * scaleX}px`;
                overlay.style.backgroundColor = 'rgba(255, 255, 0, 0.5)'; // Semi-transparent yellow
                overlay.className = 'overlay';
                document.body.appendChild(overlay); // Append to body to handle fixed positioning
            });

            area.addEventListener('mouseleave', function() {
                const overlays = document.querySelectorAll('.overlay');
                overlays.forEach(overlay => overlay.remove());
            });
        });
    };
});
