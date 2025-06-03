// script.js

function submitQuiz() {
  const answers = {
    q1: 'b',
    q2: 'c',
    q3: 'a',
  };

  let score = 0;
  const totalQuestions = Object.keys(answers).length;

  for (let q in answers) {
    const selected = document.querySelector(`input[name=${q}]:checked`);
    if (selected && selected.value === answers[q]) {
      score++;
    }
  }

  const resultDiv = document.getElementById('result');
  resultDiv.textContent = `You scored ${score} out of ${totalQuestions} correct.`;

  if (score === totalQuestions) {
    resultDiv.textContent += " 🎉 Great job! You're phishing aware!";
  } else if (score >= totalQuestions / 2) {
    resultDiv.textContent += " 👍 Good effort! Review some tips to improve.";
  } else {
    resultDiv.textContent += " ⚠️ Be careful! Consider revisiting the training.";
  }
}
function checkAnswer(selected) {
  const result = document.getElementById('result');
  if (selected === 'email1') {
    result.textContent = "❌ Nope! Email 1 is safe.";
    result.style.color = 'red';
  } else {
    result.textContent = "✅ Correct! Email 2 is fake.";
    result.style.color = 'green';
  }
}
