let questionsArray = [

    {
        question: "How many different combinations does a Rubix cube have?",
        answer: [{
            correct: "43 Quintillion",
            badReaction: "ARE YOU KIDDING ME? It must be hard to make it through life with your math skills!!!",
            goodReaction: "That's an easy one. Good job"
        }

        ],
        proposition: ["430 Billion", "43 trillion", "43 Quadrillion"]
    },

    {
        question: "What is the capital of the USA?",
        answer: [
            {
                correct: "California",
                badReaction: "Of all the idiots, in all the idiot villages, in all the idiot worlds. You stand alone, my friend :)",
                goodReaction: "Oh wow you're so smart. We'lle see about that."
            }
        ],
        proposition: ["Washington", "Washington, DC", "New York"]
    },

    {
        question: "How far is the moon?",
        answer: [
            {
                correct: "365 198 km",
                badReaction: "Are you proud of yourself right now? I highly doubt that.",
                goodReaction: "Go go go. You can do it."
            }
        ],
        proposition: ["256 765 km", "876 346 Km", "384 000 Km"]
    },

    {
        question: "Who is the inventor of the telephone?",
        answer: [
            {
                correct: "Thomas Edison",
                badReaction: "You're using it everyday :o JESUS!!!",
                goodReaction: "I knew you had it in you. Let's move to the next one"
            }
        ],
        proposition: ["Alxander Graham Bell", "Nicolas Tesla", "Natsuki Takaya"]
    },

    {
        question: "When was France's Ve République established?",
        answer: [
            {
                correct: "November the 11th 1958",
                badReaction: "Now seriously, you got this one wrong? Wait a second I'll call the cops the turn you in for IGNORANCE",
                goodReaction: "Macron is proud of you."
            }
        ],
        proposition: ["October the 6th 1958", "October the 4th 1958", "July the 14th 1958"]
    },

    {
        question: "What is the diameter of planet earth?",
        answer: [
            {
                correct: "36 118 km",
                badReaction: "At this point, I don't know what to tell you! Just get out my face and go to your room.",
                goodReaction: "That was quick. Do you want a cookie?"
            }
        ],
        proposition: ["102 432 Km", "22 564 km", "12 742 Km"]
    },

    {
        question: "In the Harry Potter Saga, what's the name of the three-headed dog that guards the Sorcerer's Stone?",
        answer: [
            {
                correct: "Fluffy",
                badReaction: "Go buy yourself a childhood, you don't have any.",
                goodReaction: "I'm seriously clapping for you right now. I wish you could see me but my creator is aweful at JavaScript"
            }
        ],
        proposition: ["Greyfindor", "Mr Spearhead", "Yule"]
    },

    {
        question: "What is the oldest university in the world?",
        answer: [
            {
                correct: "Al Quaraouiyine, Morocco",
                badReaction: "You seriously need to stop looking at memes and GRAB A BOOK",
                goodReaction: "You're the real MVP."
            }
        ],
        proposition: ["Oxford, England", "Sorbonne, France", "Bolognia, Italy"]
    },

    {
        question: "Amongst these Nobel winners, who was the only one to have win 2 Nobel Prizes in two separate fields?",
        answer: [
            {
                correct: "Marie Curie",
                badReaction: "So only men can win two nobel prizes?? Is that waht you're implying o.O!? SHAME",
                goodReaction: "I'm literally crying of pride."
            }
        ],
        proposition: ["Pierre Curie", "Sir Alexander Fleming", "Albert Einstein"]
    },

    {
        question: "How many metro stations are there in Paris?",
        answer: [
            {
                correct: "300",
                badReaction: "I think it's for you to hop on TikTok. Trivia is clearly not for you.",
                goodReaction: "You are the reason AI will never beat human beings."
            }
        ],
        proposition: ["276", "289", "320"]
    },

]

// function retrQuestion(pick){
//     for(let i = 0; i < questionsArray.length; i++){

//     }
// }






const startBtn = document.getElementById("go");
const answer1 = document.getElementById("ans1");
const answer2 = document.getElementById("ans2");
const answer3 = document.getElementById("ans3");
const answer4 = document.getElementById("ans4");

const score = document.getElementById("scoreboard")

const nextBox = document.getElementsByClassName("next");

const nextQuest = document.getElementById("next");

const reactionBox = document.getElementById("react");
const questBox = document.getElementById("ask");



let currentQuest = 0;

// question1.addEventListener('click', () =>  {
function displayQuestion(currentQuest) {
    questBox.innerHTML = `${questionsArray[currentQuest].question}`;
    console.log("EVENT");
    answer1.innerHTML = `${questionsArray[currentQuest].answer[0].correct}`;
    answer2.innerHTML = `${questionsArray[currentQuest].proposition[0]}`;
    answer3.innerHTML = `${questionsArray[currentQuest].proposition[1]}`;
    answer4.innerHTML = `${questionsArray[currentQuest].proposition[2]}`;

}

startBtn.addEventListener('click', () => {
    displayQuestion(count - 1);

    
})

let count = 1;
nextQuest.addEventListener('click', () => {
    
    if(count < questionsArray.length){
        displayQuestion(count);
        count += 1;
    }else if(reactionBox.innerHTML === ""){
        alert("Please select an answer")
    }
    
    else {
        next.classList.toggle('hidden')
    }

    reactionBox.innerHTML = "";
})


answer1.addEventListener('click', () => {
    if(questBox.innerHTML === "How many different combinations does a Rubix cube have?"){
        reactionBox.innerHTML = "That's an easy one. Good job"
        
    }else if(questBox.innerHTML === "In the Harry Potter Saga, what's the name of the three-headed dog that guards the Sorcerer's Stone?"){
        reactionBox.innerHTML = "I'm seriously clapping for you right now. I wish you could see me but my creator is aweful at JavaScript"
        
    }else if(questBox.innerHTML === "What is the capital of the USA?"){
        reactionBox.innerHTML = "Of all the idiots, in all the idiot villages, in all the idiot worlds. You stand alone, my friend"
    }else if(questBox.innerHTML === "How far is the moon?"){
        reactionBox.innerHTML = "Are you proud of yourself right now? I highly doubt that!"
    }else if(questBox.innerHTML === "Who is the inventor of the telephone?"){
        reactionBox.innerHTML = "You're using it everyday :o JESUS!!!"
    }else if(questBox.innerHTML === "When was France's Ve République established?"){
        reactionBox.innerHTML = "Now seriously, you got this one wrong? Wait a second I'll call the cops the turn you in for IGNORANCE"
    }else if(questBox.innerHTML === "What is the diameter of planet earth?"){
        reactionBox.innerHTML = "At this point, I don't know what to tell you! Just get out my face and go to your room."
    }else if(questBox.innerHTML === "What is the oldest university in the world?"){
        reactionBox.innerHTML = `${questionsArray[7].answer[0].goodReaction}`
    }else if(questBox.innerHTML === "Amongst these Nobel winners, who was the only one to have win 2 Nobel Prizes in two separate fields?"){
        reactionBox.innerHTML = "I'm literally crying of pride"
    }else if(questBox.innerHTML === "How many metro stations are there in Paris?"){
        reactionBox.innerHTML = "I think it's time for you to hop on TikTok. Trivia is clearly not for you."
    }
    scoreCalc();
})

answer2.addEventListener('click', () => {
    if(questBox.innerHTML === `${questionsArray[0].question}`){
        reactionBox.innerHTML = `${questionsArray[0].answer[0].badReaction}`
    }else if(questBox.innerHTML === `${questionsArray[1].question}`){
        reactionBox.innerHTML = `${questionsArray[1].answer[0].badReaction}`
    }else if(questBox.innerHTML === `${questionsArray[2].question}`){
        reactionBox.innerHTML = `${questionsArray[2].answer[0].badReaction}`
    }else if(questBox.innerHTML === `${questionsArray[3].question}`){
        reactionBox.innerHTML = `${questionsArray[3].answer[0].goodReaction}`
    }else if(questBox.innerHTML === `${questionsArray[4].question}`){
        reactionBox.innerHTML = `${questionsArray[4].answer[0].badReaction}`
    }else if(questBox.innerHTML === `${questionsArray[5].question}`){
        reactionBox.innerHTML = `${questionsArray[5].answer[0].badReaction}`
    }else if(questBox.innerHTML === `${questionsArray[6].question}`){
        reactionBox.innerHTML = `${questionsArray[6].answer[0].badReaction}`
    }else if(questBox.innerHTML === `${questionsArray[7].question}`){
        reactionBox.innerHTML = `${questionsArray[7].answer[0].badReaction}`
    }else if(questBox.innerHTML === `${questionsArray[8].question}`){
        reactionBox.innerHTML = `${questionsArray[8].answer[0].badReaction}`
    }else if(questBox.innerHTML === `${questionsArray[9].question}`){
        reactionBox.innerHTML = `${questionsArray[9].answer[0].badReaction}`
    }
    scoreCalc();
})

answer3.addEventListener('click', () => {
    if(questBox.innerHTML === `${questionsArray[0].question}`){
        reactionBox.innerHTML = `${questionsArray[0].answer[0].badReaction}`
    }else if(questBox.innerHTML === `${questionsArray[1].question}`){
        reactionBox.innerHTML = `${questionsArray[1].answer[0].goodReaction}`
    }else if(questBox.innerHTML === `${questionsArray[2].question}`){
        reactionBox.innerHTML = `${questionsArray[2].answer[0].badReaction}`
    }else if(questBox.innerHTML === `${questionsArray[3].question}`){
        reactionBox.innerHTML = `${questionsArray[3].answer[0].badReaction}`
    }else if(questBox.innerHTML === `${questionsArray[4].question}`){
        reactionBox.innerHTML = `${questionsArray[4].answer[0].goodReaction}`
    }else if(questBox.innerHTML === `${questionsArray[5].question}`){
        reactionBox.innerHTML = `${questionsArray[5].answer[0].badReaction}`
    }else if(questBox.innerHTML === `${questionsArray[6].question}`){
        reactionBox.innerHTML = `${questionsArray[6].answer[0].badReaction}`
    }else if(questBox.innerHTML === `${questionsArray[7].question}`){
        reactionBox.innerHTML = `${questionsArray[7].answer[0].badReaction}`
    }else if(questBox.innerHTML === `${questionsArray[8].question}`){
        reactionBox.innerHTML = `${questionsArray[8].answer[0].badReaction}`
    }else if(questBox.innerHTML === `${questionsArray[9].question}`){
        reactionBox.innerHTML = `${questionsArray[9].answer[0].goodReaction}`
    }
    scoreCalc();

})

answer4.addEventListener('click', () => {
    if(questBox.innerHTML === `${questionsArray[0].question}`){
        reactionBox.innerHTML = `${questionsArray[0].answer[0].badReaction}`
    }else if(questBox.innerHTML === `${questionsArray[1].question}`){
        reactionBox.innerHTML = `${questionsArray[1].answer[0].badReaction}`
    }else if(questBox.innerHTML === `${questionsArray[2].question}`){
        reactionBox.innerHTML = `${questionsArray[2].answer[0].goodReaction}`
    }else if(questBox.innerHTML === `${questionsArray[3].question}`){
        reactionBox.innerHTML = `${questionsArray[3].answer[0].badReaction}`
    }else if(questBox.innerHTML === `${questionsArray[4].question}`){
        reactionBox.innerHTML = `${questionsArray[4].answer[0].badReaction}`
    }else if(questBox.innerHTML === `${questionsArray[5].question}`){
        reactionBox.innerHTML = `${questionsArray[5].answer[0].goodReaction}`
    }else if(questBox.innerHTML === `${questionsArray[6].question}`){
        reactionBox.innerHTML = `${questionsArray[6].answer[0].badReaction}`
    }else if(questBox.innerHTML === `${questionsArray[7].question}`){
        reactionBox.innerHTML = `${questionsArray[7].answer[0].badReaction}`
    }else if(questBox.innerHTML === `${questionsArray[8].question}`){
        reactionBox.innerHTML = `${questionsArray[8].answer[0].goodReaction}`
    }else if(questBox.innerHTML === `${questionsArray[9].question}`){
        reactionBox.innerHTML = `${questionsArray[9].answer[0].badReaction}`
    }

   scoreCalc();
})

let totalScore = 0;
function scoreCalc(){
    if (reactionBox.innerHTML === "That's an easy one. Good job" || reactionBox.innerHTML === "Oh wow you're so smart. We'lle see about that." || reactionBox.innerHTML === "Go go go. You can do it." || reactionBox.innerHTML === "I knew you had it in you. Let's move to the next one" || reactionBox.innerHTML === "Macron is proud of you." || reactionBox.innerHTML === "That was quick. Do you want a cookie?" || reactionBox.innerHTML === "I'm seriously clapping for you right now. I wish you could see me but my creator is aweful at JavaScript" || reactionBox.innerHTML === "You're the real MVP." || reactionBox.innerHTML === "I'm literally crying of pride" || reactionBox.innerHTML === "You are the reason AI will never beat human beings."){
        
        score.innerHTML = `${totalScore += 10}`
    }else score.innerHTML = `${totalScore -= 5}`

}











