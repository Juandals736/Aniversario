document.addEventListener("DOMContentLoaded", () => {
  const quiz = document.getElementById("quiz");

  const questions = [
    {
      q: "¿Cuál fue el primer regalo?",
      options: ["Collar", "Anillos", "Cajita de dulces", "Una Gixxer 150"],
      answer: 2,
      points: 10
    },
    {
      q: "¿Quién dijo 'Te amo' por primera vez?",
      options: ["Karol", "David"],
      answer: 0,
      points: 10
    },
    {
      q: "¿Qué canción nos gusta a ambos que es 'nuestra'?",
      options: ["MAI", "Canela", "Fantasmas"],
      answer: 0,
      points: 10
    },
    {
      q: "¿A qué hora nos hicimos novios?",
      options: ["3:30 pm", "5 pm", "4:30 pm", "4 pm"],
      answer: 3,
      points: 10
    },
    {
      q: "¿Cuánto tarda una tortuga triste en llegar a la luna?",
      options: ["325 años", "5 años", "3 segundos", "500 horas"],
      answer: 0,
      points: 10
    }
  ];

  let current = 0;
  let score = 0;

  function renderQuestion() {
    if (current >= questions.length) {
      let message = "";

      if (score < 20) {
        message = "😒😡 En que relacion estas pensando que no te acuerdas?";
      } else if (score >= 20 && score < 40) {
        message = "😒 Te acuerda mas del otro, no?";
      } else {
        message = "🎉🤍 Bien amor si le sabes";
      }

      quiz.innerHTML = `
        <p>🎮 ¡Terminaste el minijuego! 🎉</p>
        <p>Puntaje final: <strong>${score}</strong></p>
        <p>${message}</p>
      `;
      return;
    }

    const q = questions[current];
    let html = `<p><strong>${q.q}</strong></p>`;
    q.options.forEach((opt, i) => {
      html += `<button class="quiz-btn" data-index="${i}">${opt}</button><br>`;
    });

    quiz.innerHTML = html;

    document.querySelectorAll(".quiz-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const idx = parseInt(btn.getAttribute("data-index"));
        const isCorrect = idx === q.answer;

        if (isCorrect) {
          score += q.points;
          alert("💖 ¡Muy bien! Si lo recuerdas");
        } else {
          alert("❌ 🤨🤨🤨🤨🤨🤨 ❌");
        }

        current++;
        renderQuestion();
      });
    });
  }

  renderQuestion();
});
