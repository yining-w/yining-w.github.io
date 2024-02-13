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