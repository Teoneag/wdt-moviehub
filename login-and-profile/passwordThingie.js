         function togglePasswordVisibility() {
                                var passwordInput = document.getElementById('password');
    var revealButton = document.getElementById('revealButton');

    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
    revealButton.textContent = 'Hide';
                                } else {
        passwordInput.type = 'password';
    revealButton.textContent = 'Show';
                                }
                            }
