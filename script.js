let messages = 0;

function sendMessage(){
    const input = document.getElementById("userInput");
    const chatBox = document.getElementById("chatBox");

    const text = input.value.trim();

    if(text === "") return;

    const userMsg = document.createElement("div");
    userMsg.className = "user-message";
    userMsg.textContent = text;
    chatBox.appendChild(userMsg);

    messages++;
    updateCounter();

    input.value = "";

    const typing = document.createElement("div");
    typing.className = "bot-message";
    typing.id = "typing";
    typing.textContent = "Zippy sedang mengetik...";
    chatBox.appendChild(typing);

    chatBox.scrollTop = chatBox.scrollHeight;

    setTimeout(() => {
        typing.remove();

        const botMsg = document.createElement("div");
        botMsg.className = "bot-message";
        botMsg.textContent = "Zippy: " + getReply(text);

        chatBox.appendChild(botMsg);

        messages++;
        updateCounter();

        chatBox.scrollTop = chatBox.scrollHeight;
    }, 1000);
}

function getReply(message){
    message = message.toLowerCase();

    if(message.includes("halo"))
        return "Halo juga! 👋";

    if(message.includes("hai"))
        return "Hai! Ada yang bisa kubantu?";

    if(message.includes("siapa kamu"))
        return "Aku Zippy AI versi 0.02.";

    if(message.includes("minecraft"))
        return "Minecraft adalah game sandbox yang sangat populer.";

    if(message.includes("roblox"))
        return "Roblox memungkinkan pemain membuat dan memainkan jutaan game.";

    if(message.includes("jam"))
        return "Jam saat ini ada di atas layar.";

    if(message.includes("terima kasih"))
        return "Sama-sama! 😊";

    if(message.includes("apa kabar"))
        return "Aku baik! Semoga harimu menyenangkan.";

    const randomReplies = [
        "Menarik sekali!",
        "Ceritakan lebih banyak.",
        "Aku masih belajar tentang itu.",
        "Bisa dijelaskan lebih detail?",
        "Aku suka topik ini."
    ];

    return randomReplies[Math.floor(Math.random()*randomReplies.length)];
}

function clearChat(){
    document.getElementById("chatBox").innerHTML =
    '<div class="bot-message">Halo! Aku Zippy AI v0.02 🤖</div>';

    messages = 0;
    updateCounter();
}

function updateCounter(){
    document.getElementById("messageCount").textContent =
    "Pesan: " + messages;
}

function updateClock(){
    const now = new Date();
    document.getElementById("clock").textContent =
        now.toLocaleTimeString();
}

setInterval(updateClock,1000);
updateClock();

document.getElementById("userInput").addEventListener("keypress",function(e){
    if(e.key === "Enter"){
        sendMessage();
    }
});