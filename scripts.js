// Select the button and the message container
const proposeButton = document.getElementById('proposeButton');
const proposalInput = document.getElementById('proposalInput');
const proposalMessage = document.getElementById('proposalMessage');

// Function to handle the proposal submission
proposeButton.addEventListener('click', function() {
    const proposalText = proposalInput.value.trim();

    if (proposalText) {
        // Display the proposal message
        proposalMessage.textContent = `❤️ ${proposalText} ❤️`;
        proposalMessage.classList.remove('hidden');

        // Animate the proposal message fade-in
        setTimeout(() => {
            proposalMessage.style.opacity = 1;
        }, 10);

        // Clear the input field
        proposalInput.value = '';
    } else {
        // Alert if the input field is empty
        alert("Please write something to propose!");
    }
});
