document.getElementById('changeMessageButton').addEventListener('click', function() {
    const messages = [
        "Semangat Sayangkuu, Kamu Pasti Bisaaa!",
        "Kamu harus jaga kesehatan ya sayangg walaupun menugass",
        "Ada aku disinii selalu support kamu sayangg",
        "Kamu semangatt yahh UAS nya sayangg",
        "I Love You,Fiee",
        "Terimakasih sudah ada disini bersama tyo"
    ];

    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    document.getElementById('message').textContent = randomMessage;
});
