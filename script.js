// This script runs when the DOM is fully loaded.
document.addEventListener('DOMContentLoaded', function() {
    // 1. Update the current year in the footer
    // This finds the span element with the ID 'currentYear' and updates its text content
    // to the current full year.
    const currentYearSpan = document.getElementById('currentYear');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // 2. Add an interactive alert when a pricing plan button is clicked
    // This selects all buttons within elements having the class 'pricing-card'.
    // It then iterates over each of these buttons to attach a click event listener.
    document.querySelectorAll('.pricing-card .btn').forEach(button => {
        button.addEventListener('click', function() {
            // When a button is clicked, it finds the 'h5' element (which contains the plan name)
            // that is a sibling of the button's parent's parent (the pricing-card div).
            // It then displays an alert with the name of the chosen plan.
            const planNameElement = this.closest('.pricing-card').querySelector('h5');
            const planName = planNameElement ? planNameElement.textContent : 'Unknown';
            alert('You have chosen the ' + planName + ' plan!');
        });
    });

    // 3. Optional: Example of a simple form submission handler (client-side)
    // This prevents the default form submission and logs the form data to the console.
    // In a real application, you would send this data to a server.
    const contactForm = document.querySelector('.contact-section form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent default form submission

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            console.log('Form Submitted!');
            console.log('Name:', name);
            console.log('Email:', email);
            console.log('Message:', message);

            // You could add further logic here, like:
            // - Displaying a "Thank You" message to the user
            // - Sending the data to a server using fetch() or XMLHttpRequest
            alert('Thank you for your message, ' + name + '! We will get back to you shortly.');

            // Optionally clear the form after submission
            contactForm.reset();
        });
    }

    // 4. Optional: Animate elements on scroll (requires Bootstrap's scrollspy or a custom solution)
    // This is a basic example and might need more robust implementation for complex animations.
    // For demonstration, let's add a class when the pricing section comes into view.
    const pricingSection = document.querySelector('.pricing-plans');
    const observerOptions = {
        root: null, // relative to the viewport
        rootMargin: '0px',
        threshold: 0.2 // 20% of the section must be visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible-section');
                // You might want to stop observing after it's visible once
                // observer.unobserve(entry.target);
            } else {
                // Optionally remove the class when it scrolls out of view
                entry.target.classList.remove('visible-section');
            }
        });
    }, observerOptions);

    if (pricingSection) {
        observer.observe(pricingSection);
    }
});
