const translations = {
    de: {
        about_text: "Helvetia Coin (HVC) ist eine innovative Kryptowährung, die auf modernster Blockchain-Technologie basiert."
    },
    en: {
        about_text: "Helvetia Coin (HVC) is an innovative cryptocurrency based on state-of-the-art blockchain technology."
    },
    fr: {
        about_text: "Helvetia Coin (HVC) est une cryptomonnaie innovante basée sur la technologie blockchain la plus avancée."
    },
    it: {
        about_text: "Helvetia Coin (HVC) è una criptovaluta innovativa basata sulla tecnologia blockchain più avanzata."
    },
    es: {
        about_text: "Helvetia Coin (HVC) es una criptomoneda innovadora basada en la tecnología blockchain más avanzada."
    },
    ru: {
        about_text: "Helvetia Coin (HVC) - это инновационная криптовалюта, основанная на передовых технологиях блокчейна."
    }
};

document.getElementById("language").addEventListener("change", function() {
    const lang = this.value;
    document.getElementById("about_text").textContent = translations[lang].about_text;
});