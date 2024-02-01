console.log("JavaScript file is loaded and running");

window.addEventListener('scroll', () => {
    const scrollPosition = window.pageYOffset;
    const containers = document.querySelectorAll('.container');

    containers.forEach((container, index) => {
        const dividerBlock = container.querySelector('.divider-block');
        if (!dividerBlock) return;

        const containerTop = container.offsetTop;
        const containerBottom = containerTop + container.offsetHeight;
        const nextContainer = containers[index + 1];
        const nextContainerTop = nextContainer ? nextContainer.offsetTop : Infinity;

        if (scrollPosition >= containerTop && scrollPosition < nextContainerTop) {
            dividerBlock.style.position = 'fixed';
            dividerBlock.style.top = '0';
            dividerBlock.style.zIndex = 100; // High z-index to stack on top
        } else {
            dividerBlock.style.position = 'static';
            dividerBlock.style.zIndex = 'auto'; // Reset z-index
        }

        // Adjust z-index to create stacking effect
        if (nextContainer && scrollPosition >= nextContainerTop - dividerBlock.offsetHeight) {
            dividerBlock.style.zIndex = -1; // Lower z-index to stack behind
        }
    });

    // Scrollytelling container logic
    const scrollyContainer = document.querySelector('.scrollytelling-container');
    const scrollyContainerBottom = scrollyContainer.offsetTop + scrollyContainer.offsetHeight - window.innerHeight;

    const sections = document.querySelectorAll('.story-section');

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

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                image.style.opacity = 1; // Show the image
                image.style.position = 'fixed';

                // Show all previous images
                for (let j = 0; j <= index; j++) {
                    const previousImage = sections[j].querySelector('img');
                    previousImage.style.opacity = 1;
                    previousImage.style.position = 'fixed';
                }
            } else {
                image.style.opacity = 0; // Hide the image
                image.style.position = 'fixed';
            }
        });
    }
});

// sec 2 
window.addEventListener('scroll', () => {
    const scrollPosition = window.pageYOffset;
    const containers = document.querySelectorAll('.container');

    containers.forEach((container, index) => {
        const dividerBlock = container.querySelector('.divider-block');
        if (!dividerBlock) return;

        const containerTop = container.offsetTop;
        const containerBottom = containerTop + container.offsetHeight;
        const nextContainer = containers[index + 1];
        const nextContainerTop = nextContainer ? nextContainer.offsetTop : Infinity;

        if (scrollPosition >= containerTop && scrollPosition < nextContainerTop) {
            dividerBlock.style.position = 'fixed';
            dividerBlock.style.top = '0';
            dividerBlock.style.zIndex = 100; // High z-index to stack on top
        } else {
            dividerBlock.style.position = 'static';
            dividerBlock.style.zIndex = 'auto'; // Reset z-index
        }

        // Adjust z-index to create stacking effect
        if (nextContainer && scrollPosition >= nextContainerTop - dividerBlock.offsetHeight) {
            dividerBlock.style.zIndex = -1; // Lower z-index to stack behind
        }
    });

    // Scrollytelling container logic
    const scrollyContainer = document.querySelector('.scrollytelling-container2');
    const scrollyContainerBottom = scrollyContainer.offsetTop + scrollyContainer.offsetHeight - window.innerHeight;

    const sections = document.querySelectorAll('.story-section');

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

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                image.style.opacity = 1; // Show the image
                image.style.position = 'fixed';

                // Show all previous images
                for (let j = 0; j <= index; j++) {
                    const previousImage = sections[j].querySelector('img');
                    previousImage.style.opacity = 1;
                    previousImage.style.position = 'fixed';
                }
            } else {
                image.style.opacity = 0; // Hide the image
                image.style.position = 'fixed';
            }
        });
    }
});

// sec3 
window.addEventListener('scroll', () => {
    const scrollPosition = window.pageYOffset;
    const containers = document.querySelectorAll('.container');

    containers.forEach((container, index) => {
        const dividerBlock = container.querySelector('.divider-block');
        if (!dividerBlock) return;

        const containerTop = container.offsetTop;
        const containerBottom = containerTop + container.offsetHeight;
        const nextContainer = containers[index + 1];
        const nextContainerTop = nextContainer ? nextContainer.offsetTop : Infinity;

        if (scrollPosition >= containerTop && scrollPosition < nextContainerTop) {
            dividerBlock.style.position = 'fixed';
            dividerBlock.style.top = '0';
            dividerBlock.style.zIndex = 100; // High z-index to stack on top
        } else {
            dividerBlock.style.position = 'static';
            dividerBlock.style.zIndex = 'auto'; // Reset z-index
        }

        // Adjust z-index to create stacking effect
        if (nextContainer && scrollPosition >= nextContainerTop - dividerBlock.offsetHeight) {
            dividerBlock.style.zIndex = -1; // Lower z-index to stack behind
        }
    });

    // Scrollytelling container logic
    const scrollyContainer = document.querySelector('.scrollytelling-container3');
    const scrollyContainerBottom = scrollyContainer.offsetTop + scrollyContainer.offsetHeight - window.innerHeight;

    const sections = document.querySelectorAll('.story-section');

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

            if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                image.style.opacity = 1; // Show the image
                image.style.position = 'fixed';

                // Show all previous images
                for (let j = 0; j <= index; j++) {
                    const previousImage = sections[j].querySelector('img');
                    previousImage.style.opacity = 1;
                    previousImage.style.position = 'fixed';
                }
            } else {
                image.style.opacity = 0; // Hide the image
                image.style.position = 'fixed';
            }
        });
    }
});

// Progress bar logic
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