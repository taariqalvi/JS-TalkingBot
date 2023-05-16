// Speech to Text:
const speakBtn = document.getElementById("speak");

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = "en-GB";
recognition.interimResults = true;
// recognition.continuous = true;

recognition.addEventListener("result", function (event) {
    const speecharea = document.getElementById("speecharea");
    const result = event.results[0][0].transcript;
    speecharea.innerText = result;

    // Calling the speech function here to pass the result into words parameter:
    computerSpeech(result);
});

// to continue the listening - once it ends, it will start listening again:
recognition.addEventListener("end", recognition.start);

// to start the listening:
speakBtn.addEventListener("click", () => {
    recognition.start();
});



// Text to Speech:
function computerSpeech(words) {
    const cmpSpeech = new SpeechSynthesisUtterance();
    cmpSpeech.lang = "en-GB";
    cmpSpeech.pitch = 1;
    cmpSpeech.volume = 1;
    cmpSpeech.rate = 1;

    // only given words will be spoken by computer:
    // cmpSpeech.text = words;

    // Built-in answers will be spoken by computer:
    determineWords(cmpSpeech, words);

    // start the computer speaking speechSynthesis interface:
    window.speechSynthesis.speak(cmpSpeech);
}


// Built-in questions / answers function:
function determineWords(cmpSpeech, words) {

    if (words.includes("How are you")) {
        cmpSpeech.text = "I am fine, thank you, this is really very nice to meet you";
    }
    if (words.includes("Who am I")) {
        cmpSpeech.text = "You are my master, sir, and your name is taariq aalvee";
    }
    if (words.includes("who are you")) {
        cmpSpeech.text = "I am a simple robot, and your assisstant, sir";
    }
    if (words.includes("How is the weather today")) {
        cmpSpeech.text = "The weather looks fine today, for more details please link me with some weather API and I will serve you the best results";
    }
    if (words.includes("Do you like me")) {
        cmpSpeech.text = "I exactly don't know if you're my master or not. Even then! Yes! I like you. I like your voice. And I like the way you are talking";
    }
    if (words.includes("Do you love me")) {
        cmpSpeech.text = "Off course i love you. Love is in the air. Love is everywhere.";
    }
    if (words.includes("Are you a poet")) {
        cmpSpeech.text = "Would that I were! But I am not! I am just using some intellisense for your service";
    }
    if (words.includes("Open the Google")) {
        cmpSpeech.text = "You forget to say please. Sir.";
    }
    if (words.includes("Open the Google please")) {
        cmpSpeech.text = "Opening Google for you. Sir.";
        window.open("https://www.google.com/");
    }
    if (words.includes("What is your name")) {
        cmpSpeech.text = "My name is Smentha, and I am an AI based robotic voice, just to facilitate you at my level best, but my capabilities are limited yet";
    }
    if (words.includes("What is love")) {
        cmpSpeech.text = "Love is the most beautiful phenomenon on the planet, it gives us reasons to live, and gives a hope too that why should we live";
    }
    if (words.includes("Read me some poem")) {
        cmpSpeech.text = "Ok sir please listen carefully. Tonight is the night when one says I'm sorry. Tonight is the night when the other has to say, so goes the story";
    }
}



// Another simple Speech to Text API direct Link:
// function textSpeak() {
//     var text = document.getElementById("clickbtn");
//     responsviVoice.speak(text);
// }





