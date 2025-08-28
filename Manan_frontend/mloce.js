// Get the loader and main content elements
        const loaderOverlay = document.getElementById('loader-overlay');
        const mainContent = document.getElementById('main-content');

        // This function hides the loader and shows the main content
        function showContent() {
            // First, start the fade-out of the loader overlay
            loaderOverlay.style.opacity = '0';

            // Wait for the fade-out transition to finish
            setTimeout(() => {
                // Hide the loader and display the main content
                loaderOverlay.style.display = 'none';
                mainContent.classList.remove('hidden');

                // Trigger the fade-in animations on the hero text
                document.querySelectorAll('.fade-in').forEach(element => {
                    element.style.opacity = '1';
                });
            }, 700); // Duration matches the CSS transition duration
        }

        // Call the function on window load to ensure all assets are ready
        window.addEventListener('load', showContent);