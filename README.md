# web-page
# this is my first project to be uploaded
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Basic Animated Webpage</title>
    <!-- Use the Inter font for a clean, modern look -->
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet">
    <!-- Tailwind CSS CDN for utility-first styling -->
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="icon" href="https://img.icons8.com/?size=160&id=109681&format=png" type="image/x-icon">

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
        integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A=="
        crossorigin="anonymous" referrerpolicy="no-referrer" />
    <style>
        /* Custom CSS for animations and loader */

        /*
            1. Hero Section Animated Gradient
            This creates a vibrant, moving background for the hero section.
        */
        .animated-gradient {
            background-size: 400% 400%;
            animation: gradient-animation 15s ease infinite;
        }

        @keyframes gradient-animation {
            0% {
                background-position: 0% 50%;
            }

            50% {
                background-position: 100% 50%;
            }

            100% {
                background-position: 0% 50%;
            }
        }

        /*
            2. Content Loader Animation
            A simple, creative loader that appears before the content is shown.
        */
        .loader-spinner {
            border-width: 4px;
            border-style: solid;
            border-color: #f3f3f3 transparent #f3f3f3 transparent;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            animation: spin 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
        }

        @keyframes spin {
            0% {
                transform: rotate(0deg);
            }

            100% {
                transform: rotate(360deg);
            }
        }

        /*
            3. Hero Text Fade-In Animation
            A subtle animation to make the hero text appear smoothly.
        */
        .fade-in {
            animation: fadeIn 1.5s ease-in-out forwards;
            opacity: 0;
        }

        @keyframes fadeIn {
            to {
                opacity: 1;
            }
        }

        /* Apply font and smooth scrolling to the whole page */
        body {
            font-family: 'Inter', sans-serif;
            scroll-behavior: smooth;
            background-color: #0d1117;
            color: #e5e7eb;
        }
        .dropdown {
  position: relative;
  display: inline-block;
}

/* Dropdown Content (Hidden by Default) */
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

/* Links inside the dropdown */
.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

/* Change color of dropdown links on hover */
.dropdown-content a:hover {background-color: #f1f1f1}

/* Show the dropdown menu on hover */
.dropdown:hover .dropdown-content {
  display: block;
}
    </style>
</head>

<body>

    <!-- Creative Loading Screen Overlay -->
    <!-- This overlay covers the entire page until the content is ready. -->
    <div id="loader-overlay"
        class="fixed inset-0 z-50 flex items-center justify-center bg-[#0d1117] transition-opacity duration-700 opacity-100">
        <div class="flex flex-col items-center">
            <div class="loader-spinner mb-4"></div>
            <p class="text-xl text-gray-400">Loading...</p>
        </div>
    </div>

    <!-- Main Content Container -->
    <!-- This wrapper is hidden initially and revealed by JavaScript -->
    <div id="main-content" class="hidden">

        <!-- Navbar with Hover Effects -->
        <nav class="fixed top-0 left-0 right-0 z-40 bg-[#161b22] bg-opacity-80 backdrop-blur-sm shadow-lg">
            <div class="container mx-auto px-6 py-4 flex justify-between items-center">
                <a href="#hero"
                    class="text-2xl font-bold text-gray-200 hover:text-white transition-colors duration-300">
                    <i class="fa-solid fa-circle-user"></i> MySite
                </a>
                <div class="flex space-x-6 text-lg">

                    <div class="dropdown">
                        <a href="#hero" class="text-gray-400 hover:text-white transition-colors duration-300"><i
                                class="fa-solid fa-house-user"></i>Home</a>
                        
                        <div class="dropdown-content">
                            <a href="#">Main Home Page</a>
                            <a href="#">Details</a>
                            
                        </div>
                    </div>
                    <div class="dropdown">
                        <a href="#" class="text-gray-400 hover:text-white transition-colors duration-300"><i
                            class="fa-solid fa-address-card"></i>About</a>
                        
                        <div class="dropdown-content">
                            <a href="#">Vission</a>
                            <a href="#">Our Mission</a>
                            <a href="#">About organisation</a>
                        </div>
                    </div>
                    <div class="dropdown">
                        <a href="#" class="text-gray-400 hover:text-white transition-colors duration-300"><i
                            class="fa-solid fa-screwdriver-wrench"></i>Services</a>
                        
                        <div class="dropdown-content">
                            <a href="#">unit converter</a>
                            <a href="#">Currency converter</a>
                            <a href="#">Algebric Operations</a>
                        </div>
                    </div>
                    <div class="dropdown">
                         <a href="#" class="text-gray-400 hover:text-white transition-colors duration-300"><i
                            class="fa-solid fa-phone"></i>Contact</a>
                        
                        <div class="dropdown-content">
                            <a href="#">phone Number</a>
                            <a href="#">E-Mail</a>
                            <a href="#">telegram</a>
                        </div>
                    </div>
                    
                    
                   
        </nav>

        <!-- Hero Section with Animated Gradient Background -->
        <header id="hero"
            class="relative overflow-hidden min-h-screen flex items-center justify-center text-center px-6 pt-20">
            <!-- Background with the animated gradient -->
            <div class="absolute inset-0 animated-gradient z-0 opacity-80"
                style="background-image: linear-gradient(-45deg, #FF6B6B, #F06595, #7581E6, #4DA2EC);"></div>

            <div
                class="relative z-10 p-8 rounded-2xl max-w-4xl mx-auto backdrop-blur-md bg-white bg-opacity-5 shadow-2xl border border-gray-700">
                <h1 class="text-5xl md:text-7xl font-extrabold text-white mb-4 leading-tight fade-in"
                    style="animation-delay: 0.5s;">
                    This is for Wild Card Entry
                </h1>
                <p class="text-xl md:text-2xl text-gray-200 mb-8 fade-in" style="animation-delay: 1s;">
                    This is a simple site with CSS animations and hover effects and drop-list .
                </p>
                <a href="#"
                    class="inline-block px-8 py-4 text-lg font-bold text-white bg-blue-600 rounded-full shadow-lg hover:bg-blue-700 transform hover:scale-105 transition-all duration-300 ease-in-out fade-in"
                    style="animation-delay: 1.5s;">
                    Learn More
                </a>
            </div>
        </header>

        <!-- Footer -->
        <footer class="py-8 bg-[#161b22] text-center text-gray-400">
            <p>&copy; All rights are reserved bu MANAN MAGGO</p>
        </footer>

    </div>

    <!-- JavaScript to handle the loader and content visibility -->
    <script>
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
    </script>
</body>

</html>
