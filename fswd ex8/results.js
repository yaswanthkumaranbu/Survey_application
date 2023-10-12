 // Retrieve stored answers and selected category from local storage
    const storedAnswers = JSON.parse(localStorage.getItem("userAnswers"));
    const selectedCategory = localStorage.getItem("selectedCategory");

    const resultsContainer = document.getElementById("results");
    if (storedAnswers) {
      resultsContainer.innerHTML = "<h2>Your Answers:</h2>";
      const questions = getQuestionsForCategory(selectedCategory);
      const correctAnswers = getCorrectAnswersForCategory(selectedCategory);

      storedAnswers.forEach((answer, index) => {
        resultsContainer.innerHTML += `<div class='tot1'><p><strong>Question ${index + 1}:</strong> ${questions[index]}</p>`;
        resultsContainer.innerHTML += `<div class='tot2'><p><strong>Your Answer:</strong> ${answer}</p></div><br><br></p>`;
        // resultsContainer.innerHTML += `<div class='tot3'><p><strong>Correct Answer:</strong> ${correctAnswers[index]}`;
      });
    }

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


      return questionsByCategory[category] || [];
    }

