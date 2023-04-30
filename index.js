// Speech to Text:
const speakBtn = document.getElementById("speak");

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = "en-GB";
// recognition.interimResults = true;
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
    cmpSpeech.lang = "en-US";
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

    if (words.includes("how are you")) {
        cmpSpeech.text = "I am fine, thank you, this is really very nice to meet you";
    }
    if (words.includes("who am I")) {
        cmpSpeech.text = "you are my master, sir, and your name is taariq aalvee";
    }
    if (words.includes("who are you")) {
        cmpSpeech.text = "I am a simple robot, and your assisstant, sir";
    }
    if (words.includes("how is the weather today")) {
        cmpSpeech.text = "the weather looks fine today, for more details please link me with some weather API and I will serve you the best results";
    }
    if (words.includes("do you like me")) {
        cmpSpeech.text = "I ecactly don't know if you're my master or not, even then, yes, i like you, and i like your voice, and i like the way you are talking";
    }
    if (words.includes("do you love me")) {
        cmpSpeech.text = "off course i love you, love is in the air, and love is everywhere";
    }
    if (words.includes("are you a poet")) {
        cmpSpeech.text = "would that I were, but I am not, I am just using some intellisense for your service";
    }
    if (words.includes("open the Google")) {
        cmpSpeech.text = "opening Google for you, sir";
        window.open("https://www.google.com/");
    }
    if (words.includes("what is your name")) {
        cmpSpeech.text = "my name is Neo, and I am an AI based robotic voice, just to facilitate you at my level best, but my capabilities are limited yet";
    }
    if (words.includes("what is love")) {
        cmpSpeech.text = "love is the most beautiful phenomenon on the planet, it gives us reasons to live, and gives a hope too that why should we live";
    }
    if (words.includes("read me some poem")) {
        cmpSpeech.text = "Ok sir please listen carefully, tonight is the night when one says I'm sorry, tonight is the night when the other has to say, so goes the story";
    }
}



// Another simple Speech to Text API direct Link:
// function textSpeak() {
//     var text = document.getElementById("clickbtn");
//     responsviVoice.speak(text);
// }





