
const categoryForm = document.getElementById("category-form");
const selectCategoryButton = document.getElementById("select-category");
const questionForm = document.getElementById("question-form");
const surveyForm = document.getElementById("survey-form");
const categoryValue = document.getElementById("category-value");
const questionsContainer = document.getElementById("questions-container");

selectCategoryButton.addEventListener("click", function (e) {
  e.preventDefault();
  const selectedCategory = document.getElementById("category").value;
  categoryForm.style.display = "none";
  questionForm.style.display = "block";
  categoryValue.value = selectedCategory;

  // Fetch and display random questions for the selected category
  const questions = getQuestionsForCategory(selectedCategory);
  displayQuestions(questions);
});

surveyForm.addEventListener("submit", function (e) {
  e.preventDefault();
  // Retrieve user answers and selected category
  const answers = Array.from(document.querySelectorAll("input[name='answers[]']")).map(input => input.value);
  const selectedCategory = categoryValue.value;
  // Store answers and questions in local storage
  localStorage.setItem("userAnswers", JSON.stringify(answers));
  localStorage.setItem("selectedCategory", selectedCategory);
  // Redirect to results page
  window.location.href = "results.html";
});

// Function to get questions for the selected category
function getQuestionsForCategory(category) {
  // Simulated data (You can replace this with your database queries)
  const questionsByCategory = {
    technical: [
      "What does HTML stand for?",
      "What language defines the style of an HTML document",
      "What programming language adds interactivity to web pages",
      "Which protocol is used for transferring web pages",
      "Where is data in a structured format stored?",
      "What holds a single piece of data",
      "What does API stand for?",
      "What keeps track of changes in code over time?",
      "What is used for repetitive execution of code?",
      "What design approach ensures web content adapts to all screen sizes?"
    ],
    science: [
      "What gas do plants absorb during photosynthesis?",
      "What element has the chemical symbol 'O' and atomic number 8?",
      "What is the process of a liquid turning into a gas at the surface?",
      "What is the study of Earth's physical structure and substance?",
      "What is the smallest unit of an element that retains its chemical properties?",
      "What type of energy is associated with motion?",
      " What causes the Earth's tides due to the moon's gravitational pull?",
      " What is the study of heredity and the variation of inherited characteristics?",
      "What is the layer of the Earth's atmosphere just above the stratosphere?",
      "What type of energy is stored in the nucleus of an atom?"
    ],
    economic: [
      "What is the total value of all goods and services produced within a country in a specific period?",
      "What is the government's financial excess or deficit when total revenues exceed total expenditures?",
      "What type of inflation is caused by increased demand without a corresponding increase in supply?",
      "What is the term for a person who starts, organizes, and operates a business, often taking financial risks?",
      "What is the practice of selling goods below cost to drive competitors out of the market?",
      "What economic system is characterized by private ownership of the means of production and minimal government interference?",
      "What is the concept of producing the maximum amount of goods and services with the given resources?",
      "What is the tax imposed on goods when they are transported across international borders?",
      "What is the type of unemployment that occurs when a person is transitioning between jobs or entering the workforce for the first time?",
      "What is the branch of economics that deals with individual and household decision-making concerning the allocation of resources?"
    ]
  };

  // Shuffle the questions for randomness
  const shuffledQuestions = shuffle(questionsByCategory[category]);

  // Return the first 5 questions
  return shuffledQuestions.slice(0, 5);
}

// Function to display questions
function displayQuestions(questions) {
  questionsContainer.innerHTML = "";
  questions.forEach((question, index) => {
    const input = document.createElement("input");
    input.type = "text";
    input.name = "answers[]";
    input.placeholder = "Your answer for question " + (index + 1);
    const label = document.createElement("label");
    label.textContent = question;
    questionsContainer.appendChild(label);
    questionsContainer.appendChild(input);
  });
}

// Function to shuffle an array (for question randomness)
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
