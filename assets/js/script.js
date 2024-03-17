const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

$(document).ready(function() {
  // Handle sign-up form submission
  $('.sign-up-form').on('submit', function(e) {
    e.preventDefault(); // Prevent default form submission

    const firstName = $('#first-name').val();
    const lastName = $('#last-name').val();
    const username = $('#signup-username').val();
    const email = $('#email').val();
    const password = $('#signup-password').val();
    const confirmPassword = $('#confirm-password').val();

    // Form validation
    if (!validateEmail(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    if (password.length < 8) {
      alert('Password should be at least 8 characters long.');
      return;
    }

    if (password !== confirmPassword) {
      alert('Confirm password does not match.');
      return;
    }

    const userData = {
      firstName,
      lastName,
      username,
      email,
      password,
      confirmPassword,
    };

    // Store userData in localStorage
    localStorage.setItem('userData', JSON.stringify(userData));

    // Redirect to signup.html
    window.location.href = 'signup.html';
  });
});

// Email validation function
function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
