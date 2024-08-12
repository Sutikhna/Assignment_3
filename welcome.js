document.getElementById('logoutButton').addEventListener('click', function() {
    localStorage.removeItem('username');
    localStorage.removeItem('password');
    window.location.href = 'index.html'; // Ensure this points to the correct path for index.html
});
