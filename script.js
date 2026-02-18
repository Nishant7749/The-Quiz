//Listing all questions (array of objects)
const questionsPool = [
    {
        question: "Which event directly triggered World War I ?",
        options: ["Assassination of Archduke Franz Ferdinand", "Treaty of Versailles", "German invasion of Poland", "Russian Revolution"],
        correct: 0
    },

    {
        question: "What is the Second Law of Thermodynamics about ?",
        options: ["Energy creation", "Conservation of Momentum", "Increase of Entropy", "Speed of light"],
        correct: 2
    },

    {
        question: "Who wrote The Republic ?",
        options: ["Aristotle", "Socrates", "Plato", "Herodotus"],
        correct: 2
    },

    {
        question: "Article 32 of the Indian Constitution deals with: ",
        options: ["Emergency powers", "Right to Constitutional Remedies", "Freedom of Speech", "President's Impeachment"],
        correct: 1
    },

    {
        question: "Inflation primarily reduces the value of: ",
        options: ["Gold", "Real estate", "Purchasing power of money", "Government bonds"],
        correct: 2
    },

    {
        question: "DNA is located in which part of the cell ?",
        options: ["Ribosome", "Nucleus", "Cytoplasm", "Mitochondria"],
        correct: 1
    },

    {
        question: "If a coin is tossed twice, what is the probability of getting two heads ?",
        options: ["1/2", "1/3", "1/4", "1/8"],
        correct: 2
    },

    {
        question: "What does the Placebo effect demonstrate ?",
        options: ["Medicine always works", "Mind influences Physical health", "Drugs cure all diseses", "Psychology is fake"],
        correct: 1
    },

    {
        question: "Who wrote Annihilation of Caste ?",
        options: ["Mahatma Gandhi", "BR Ambedkar", "Jawaharlal Nehru", "EV Ramaswamy"],
        correct: 1
    },

    {
        question: "Absurdism is most associated with: ",
        options: ["Nietzsche", "Sartre", "Albert Camus", "Immanuel Kant"],
        correct: 2
    },

    {
        question: "Who proposed the theory of General Relativity?",
        options: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Niels Bohr"],
        correct: 1
    },

    {
        question: "The concept of 'Separation of Powers' was proposed by:",
        options: ["John Locke", "Montesquieu", "Rousseau", "Thomas Hobbes"],
        correct: 1
    },

    {
        question: "Which empire was ruled by Ashoka?",
        options: ["Gupta Empire", "Mauryan Empire", "Mughal Empire", "Chola Empire"],
        correct: 1
    },

    {
        question: "GDP measures:",
        options: ["Total wealth of citizens", "Total production within a country", "Government revenue", "Inflation rate"],
        correct: 1
    },

    {
        question: "Which philosopher wrote 'Beyond Good and Evil'?",
        options: ["Karl Marx", "Immanuel Kant", "Friedrich Nietzsche", "Jean-Paul Sartre"],
        correct: 2
    },

    {
        question: "The speed of light in vacuum is approximately:",
        options: ["3 × 10^8 m/s", "3 × 10^6 m/s", "3 × 10^5 km/s", "300 m/s"],
        correct: 0
    },

    {
        question: "Article 21 of the Indian Constitution guarantees:",
        options: ["Right to Equality", "Right to Freedom", "Right to Life and Personal Liberty", "Right to Education"],
        correct: 2
    },

    {
        question: "Which psychological concept refers to cognitive bias where people seek confirming evidence?",
        options: ["Placebo effect", "Confirmation bias", "Cognitive dissonance", "Projection"],
        correct: 1
    },

    {
        question: "The Treaty of Versailles ended which war?",
        options: ["World War I", "World War II", "Cold War", "Franco-Prussian War"],
        correct: 0
    },

    {
        question: "Who wrote 'The Myth of Sisyphus'?",
        options: ["Sartre", "Nietzsche", "Albert Camus", "Kierkegaard"],
        correct: 2
    },

    {
        question: "Inflation is primarily caused by:",
        options: ["Increase in supply with stable demand", "Excess demand over supply", "Decrease in money supply", "Technological advancement"],
        correct: 1
    },

    {
        question: "Which branch of philosophy studies knowledge?",
        options: ["Ethics", "Metaphysics", "Epistemology", "Aesthetics"],
        correct: 2
    },

    {
        question: "The Fundamental Duties in India were added by which Amendment?",
        options: ["42nd Amendment", "44th Amendment", "52nd Amendment", "86th Amendment"],
        correct: 0
    },

    {
        question: "Who developed the theory of evolution by natural selection?",
        options: ["Gregor Mendel", "Charles Darwin", "Louis Pasteur", "Alfred Wallace"],
        correct: 1
    },

    {
        question: "Probability of getting at least one head in two coin tosses is:",
        options: ["1/4", "1/2", "3/4", "1"],
        correct: 2
    },

    {
        question: "Which economist wrote 'The Wealth of Nations'?",
        options: ["Karl Marx", "Adam Smith", "Keynes", "Milton Friedman"],
        correct: 1
    },

    {
        question: "Which planet has the strongest gravitational pull?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        correct: 2
    },

    {
        question: "What does 'Habeas Corpus' ensure?",
        options: ["Freedom of speech", "Protection against unlawful detention", "Right to vote", "Property rights"],
        correct: 1
    },

    {
        question: "Who wrote 'Crime and Punishment'?",
        options: ["Tolstoy", "Dostoevsky", "Kafka", "Orwell"],
        correct: 1
    },

    {
        question: "Which ideology emphasizes class struggle?",
        options: ["Liberalism", "Conservatism", "Marxism", "Existentialism"],
        correct: 2
    },

    {
        question: "Entropy is a measure of:",
        options: ["Energy", "Disorder", "Speed", "Mass"],
        correct: 1
    },

    {
        question: "The Indian Constitution was adopted in:",
        options: ["1947", "1949", "1950", "1952"],
        correct: 1
    },

    {
        question: "Which hormone regulates stress response?",
        options: ["Insulin", "Dopamine", "Cortisol", "Melatonin"],
        correct: 2
    },

    {
        question: "Which logical fallacy attacks the person instead of argument?",
        options: ["Strawman", "Ad Hominem", "Circular reasoning", "False dilemma"],
        correct: 1
    },

    {
        question: "Who wrote 'The Discovery of India'?",
        options: ["BR Ambedkar", "Mahatma Gandhi", "Jawaharlal Nehru", "Sardar Patel"],
        correct: 2
    }



];

//initializing
let selectedQues = [];
let userAns = [];
let currentQuesIndex = 0;
let score = 0;

//dom elements
const quesDiv = document.getElementById("question");
const optionDiv = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const resultDiv = document.getElementById("result");
const listDiv = document.getElementById("list");

//selecting 10 random questions
function randomQues() {
    const shuffled = questionsPool.sort(() => 0.5 - Math.random());
    selectedQues = shuffled.slice(0, 10);
}

//core logic of displaying selected questions
function displayQues() {

    if (currentQuesIndex < selectedQues.length) {
        const currentQues = selectedQues[currentQuesIndex];
        quesDiv.textContent = `${currentQuesIndex + 1}. ${currentQues.question}`;
        optionDiv.innerHTML = "";

        currentQues.options.forEach((option, index) => {
            const createOption = document.createElement("div");
            createOption.classList.add("option");
            createOption.textContent = option;

            createOption.addEventListener("click", () => {
                clearSelection();
                createOption.classList.add("selected");
                userAns[currentQuesIndex] = index;

            });

            optionDiv.appendChild(createOption);
        });

        nextBtn.textContent = currentQuesIndex === selectedQues.length - 1 ? "Finish" : "Next";


    }

    else {
        showResult();
    }
}

//clear all other selected options
function clearSelection() {
    document.querySelectorAll(".option").forEach(opt => opt.classList.remove("selected"));
}

//show final result
function showResult() {
    score = 0;

    selectedQues.forEach((ques, index) => {
        if (userAns[index] === ques.correct) score++;

    });

    listDiv.classList.add("hidden");
    resultDiv.classList.remove("hidden");

    if(score == selectedQues.length) {
        resultDiv.innerHTML = `
                              <h2>Perfect Score ! </h2>
                              <p>Your Score: ${score} /10`;
    }

    else if(score < 4) {
        resultDiv.innerHTML = `
                              <h2> Too Low ! </h2>
                              <p>Your Score: ${score} /10 </p>`;
    }

    else{
        resultDiv.textContent = `Your Score: ${score} /10`;
    }

}

nextBtn.addEventListener("click", () => {
    currentQuesIndex++;
    displayQues();
});

randomQues();
displayQues();