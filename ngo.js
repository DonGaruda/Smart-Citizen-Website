document.getElementById('donate-btn').addEventListener('click', () => {
    const paymentInterface = document.getElementById('payment-interface');
    paymentInterface.classList.toggle('hidden');
});

// Optional: Add form submission handling logic
document.getElementById('payment-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for your donation!');
});
