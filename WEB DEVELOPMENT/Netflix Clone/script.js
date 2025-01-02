document.addEventListener('DOMContentLoaded', (event) => {
    // Get Started button click event
    const getStartedButton = document.querySelector('.btn-red');
    getStartedButton.addEventListener('click', () => {
        const emailInput = document.querySelector('input[type="text"]');
        if (validateEmail(emailInput.value)) {
            alert('Valid email! Get Started button clicked!');
        } else {
            alert('Please enter a valid email address.');
        }
    });

    // Toggle FAQ sections
    const faqBoxes = document.querySelectorAll('.faqbox');
    faqBoxes.forEach(faqBox => {
        faqBox.addEventListener('click', () => {
            faqBox.classList.toggle('active');
            const svg = faqBox.querySelector('svg');
            if (faqBox.classList.contains('active')) {
                svg.style.transform = 'rotate(45deg)';
            } else {
                svg.style.transform = 'rotate(0deg)';
            }
        });
    });

    // Change language button text
    const languageButton = document.querySelector('nav button');
    languageButton.addEventListener('click', () => {
        if (languageButton.textContent === 'English') {
            languageButton.textContent = 'Español';
        } else {
            languageButton.textContent = 'English';
        }
    });

    // Show/hide video in "Enjoy on your TV" section
    const tvImage = document.querySelector('.secimg img');
    const tvVideo = document.querySelector('.secimg video');
    tvImage.addEventListener('click', () => {
        if (tvVideo.style.display === 'none' || tvVideo.style.display === '') {
            tvVideo.style.display = 'block';
        } else {
            tvVideo.style.display = 'none';
        }
    });
});

// Function to validate email
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}