document.addEventListener("DOMContentLoaded", function () {
    fetch("https://api.coingecko.com/api/v3/simple/price?ids=helvetia-coin&vs_currencies=usd")
        .then(response => response.json())
        .then(data => {
            document.getElementById("price").textContent = `$${data['helvetia-coin'].usd}`;
        })
        .catch(error => {
            console.error("Preis konnte nicht geladen werden:", error);
            document.getElementById("price").textContent = "Nicht verfügbar";
        });
});
