document.addEventListener("DOMContentLoaded", function() {
    const loginButton = document.getElementById('loginButton');
    const loginEmail = document.getElementById('loginEmail');
    const loginPassword = document.getElementById('loginPassword');
    const messageDiv = document.createElement('div'); // Create messageDiv dynamically
    document.body.appendChild(messageDiv); // Append it to the body or your desired location

    loginButton.addEventListener('click', function() {
        var singlist = JSON.parse(localStorage.getItem('users')) || [];
        var user = singlist.find(user => user.email === loginEmail.value && user.password === loginPassword.value);

        if (user) {
            // Redirect to home page
            localStorage.setItem('loggedInUser', JSON.stringify(user));
            window.location.href = 'hom.html';
        } else {
            messageDiv.innerHTML = `<div style="color: red;">البريد الإلكتروني أو كلمة المرور غير صحيحة.</div>`;
        }
    });
});
