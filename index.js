let questionsArray = [

    {
        question: "How many different combinations does a Rubix cube have",
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
        proposition: ["Washington, DC", "Washington", "New York"]
    },

    {
        question: "How far is the moon?",
        answer: [
            {
                correct: "384 000 Km",
                badReaction: "Are you proud of yourself right now? I highly doubt that.",
                goodReaction: "Go go go. You can do it."
            }
        ],
        proposition: ["256 765 km", "876 346 Km", "365 198 km"]
    },

    {
        question: "Who is the inventor of the telephone",
        answer: [
            {
                correct: "Alxander Graham Bell",
                badReaction: "You're using it everyday :o JESUS!!!",
                goodReaction: "I knew you had it in you. Let's move to the next one"
            }
        ],
        proposition: ["Thomas Edison", "Nicolas Tesla", "Natsuki Takaya"]
    },

    {
        question: "When was France's Ve République established",
        answer: [
            {
                correct: "October the 4th 1958",
                badReaction: "Now seriously, you got this one wrong? Wait a second I'll call the cops the turn you in for IGNORANCE",
                goodReaction: "Macron is proud of you. "
            }
        ],
        proposition: ["October the 6th 1958", "November the 11th 1958", "July the 14th 1958"]
    },

    {
        question: "What is the diameter of planet earth",
        answer: [
            {
                correct: "12 742 Km",
                badReaction: "At this point, I don't know what to tell you! Just get out my face and go to your room.",
                goodReaction: "That was quick. Do you want a cookie?"
            }
        ],
        proposition: ["102 432 Km", "22 564 km", "36 118 km"]
    },

    {
        question: "In the Harry Potter Saga, what's the name of the three-headed dog that guards the Sorcerer's Stone",
        answer: [
            {
                correct: "Fluffy",
                badReaction: "Go buy a childhood, you don't have any.",
                goodReaction: "I'm seriously clapping for you right now. I wish you could see me but my creator is aweful at JavaScript"
            }
        ],
        proposition: ["Greyfindor", "Mr Spearhead", "Yule"]
    },

    {
        question: "What is the oldest university in the world",
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
                goodReaction: "I'm literally crying of proud."
            }
        ],
        proposition: ["Pierre Curie", "Sir Alexander Fleming", "Albert Einstein"]
    },

    {
        question: "How many metro stations are there in Paris",
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

const question1 = document.getElementById("question1");
const question2 = document.getElementById("question2");
const question3 = document.getElementById("question3");
const question4 = document.getElementById("question4");
const question5 = document.getElementById("question5");
const question6 = document.getElementById("question6");
const question7 = document.getElementById("question7");
const question8 = document.getElementById("question8");
const question9 = document.getElementById("question9");
const question10 = document.getElementById("question10");




const startBtn = document.getElementById("go");
const answer1 = document.getElementById("ans1");
const answer2 = document.getElementById("ans2");
const answer3 = document.getElementById("ans3");
const answer4 = document.getElementById("ans4");

const nextBox = document.getElementById("next-box");

const nextQuest = document.getElementById("next");

const reactionBox = document.getElementById("react");
const questBox = document.getElementById("ask");

let scoreBoard = document.getElementsByClassName('score');
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


 
  


let count = 0;
nextQuest.addEventListener('click', () => {
    
    displayQuestion(count);
    count += 1;
})












