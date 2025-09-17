// Tokenomics Chart
const ctx = document.getElementById('tokenChart').getContext('2d');
const tokenChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Team', 'Marketing', 'Liquidity', 'Community'],
        datasets: [{ data: [10, 20, 30, 40], backgroundColor: ['#ff6384', '#36a2eb', '#ffce56', '#4bc0c0'] }]
    }
});

// Animation Beispiel
anime({
    targets: '.hero h1',
    translateY: [-50, 0],
    opacity: [0, 1],
    duration: 1000
});

// Wallet-Connect (Platzhalter – integriere MetaMask o.ä.)
document.querySelector('.btn-primary').addEventListener('click', () => alert('Wallet verbinden...'));