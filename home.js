var welcomeMessage = document.getElementById('welcomeMessage');
 

// Check if user is logged in
var loggedInUser = JSON.parse(localStorage.getItem('loggedInUser'));
if (!loggedInUser) {
    window.location.href = 'login.html'; // Redirect to login if not logged in
} else {
    welcomeMessage.innerHTML = `<h1 class="text-center">Welcome ${loggedInUser.name}!</h1>`; // عرض الاسم بجانب كلمة "Welcome"
}

// Logout functionality
logoutButton.addEventListener('click', function() {
    localStorage.removeItem('loggedInUser'); // Clear logged in user
    window.location.href = 'login.html'; // Redirect to login page
});
