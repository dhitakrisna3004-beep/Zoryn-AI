function sendMessage() {
    let input = document.getElementById("userInput");
    let chatBox = document.getElementById("chatBox");

    let text = input.value.trim();

    if(text === "") return;

    let userDiv = document.createElement("div");
    userDiv.className = "user-message";
    userDiv.textContent = text;
    chatBox.appendChild(userDiv);

    input.value = "";

    setTimeout(() => {
        let botDiv = document.createElement("div");
        botDiv.className = "bot-message";

        let reply = getReply(text);
        botDiv.textContent = "Zippy: " + reply;

        chatBox.appendChild(botDiv);
        chatBox.scrollTop = chatBox.scrollHeight;
    }, 500);
}

function getReply(message){
    message = message.toLowerCase();

    if(message.includes("halo"))
        return "Halo juga! Senang bertemu denganmu.";

    if(message.includes("siapa kamu"))
        return "Aku Zippy AI, asisten virtual yang siap membantu.";

    if(message.includes("minecraft"))
        return "Minecraft adalah salah satu game sandbox paling populer.";

    if(message.includes("roblox"))
        return "Roblox memungkinkan pemain membuat dan memainkan jutaan game.";

    if(message.includes("terima kasih"))
        return "Sama-sama!";

    return "Menarik! Ceritakan lebih banyak tentang itu.";
}

document.getElementById("userInput").addEventListener("keypress", function(e){
    if(e.key === "Enter"){
        sendMessage();
    }
});