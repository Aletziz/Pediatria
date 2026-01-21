// Main application logic

// Initialize app on load
document.addEventListener("DOMContentLoaded", () => {
  loadProgress();
  initializeApp();
});

function initializeApp() {
  // Set totals
  document.getElementById("mc-total").textContent =
    multipleChoiceQuestions.length;
  document.getElementById("tf-total").textContent = trueFalseQuestions.length;
  document.getElementById("just-total").textContent =
    justificationQuestions.length;
  document.getElementById("case-total").textContent = clinicalCases.length;

  // Load first questions
  loadMCQuestion();
  loadTFQuestion();
  loadJustQuestion();
  loadClinicalCase();

  // Update displays
  updateScores();
  updateStatistics();
}

// Navigation
function showSection(sectionName, event) {
  // Hide all sections
  document.querySelectorAll(".section-content").forEach((section) => {
    section.classList.add("hidden");
  });

  // Remove active class from all nav buttons
  document.querySelectorAll(".nav-btn").forEach((btn) => {
    btn.classList.remove("active");
  });

  // Show selected section
  document.getElementById(sectionName + "-section").classList.remove("hidden");

  // Add active class to clicked button
  let activeBtn = null;
  if (event) {
    activeBtn = event.target.closest(".nav-btn");
    if (activeBtn) {
      activeBtn.classList.add("active");
    }
  } else {
    // If no event, find button by section name
    activeBtn = document.querySelector(`[onclick*="'${sectionName}'"]`);
    if (activeBtn) {
      activeBtn.classList.add("active");
    }
  }

  // Update mobile section indicator
  if (activeBtn) {
    const sectionNameText = activeBtn.getAttribute("data-section-name");
    const sectionIcon = activeBtn.getAttribute("data-section-icon");

    const mobileNameEl = document.getElementById("mobile-section-name");
    const mobileIconEl = document.getElementById("mobile-section-icon");

    if (mobileNameEl && mobileIconEl && sectionNameText && sectionIcon) {
      mobileNameEl.textContent = sectionNameText;
      mobileIconEl.className = `fas ${sectionIcon} text-blue-600 text-lg`;
    }
  }

  // Update statistics if viewing statistics section
  if (sectionName === "statistics") {
    updateStatistics();
  }

  // Scroll to top
  window.scrollTo(0, 0);
}

// Multiple Choice Functions
function loadMCQuestion() {
  const question = multipleChoiceQuestions[currentMCQuestion];
  const container = document.getElementById("mc-quiz-container");

  const answered = mcAnswers[question.id] !== undefined;
  const userAnswer = mcAnswers[question.id];

  let html = `
        <div class="mb-6">
            <div class="flex items-center justify-between mb-4">
                <span class="badge badge-info">Pregunta ${currentMCQuestion + 1}</span>
                ${answered ? '<span class="badge badge-success"><i class="fas fa-check mr-1"></i>Respondida</span>' : ""}
            </div>
            <h3 class="text-xl font-bold text-gray-800 mb-4">${question.question}</h3>
            <div class="space-y-3">
    `;

  question.options.forEach((option, index) => {
    const isSelected = userAnswer === index;
    const isCorrect = index === question.correct;
    let btnClass = "option-btn";
    let icon = "";

    if (answered) {
      if (isCorrect) {
        btnClass += " correct";
        icon = '<i class="fas fa-check-circle mr-2"></i>';
      } else if (isSelected && !isCorrect) {
        btnClass += " incorrect";
        icon = '<i class="fas fa-times-circle mr-2"></i>';
      }
    } else if (isSelected) {
      btnClass += " selected";
    }

    html += `
            <button class="${btnClass}" 
                    onclick="selectMCOption(${index})" 
                    ${answered ? "disabled" : ""}>
                ${icon}${option}
            </button>
        `;
  });

  html += "</div></div>";

  if (answered) {
    const isCorrect = userAnswer === question.correct;
    html += `
            <div class="feedback ${isCorrect ? "feedback-correct" : "feedback-incorrect"}">
                <div class="flex items-start">
                    <i class="fas ${isCorrect ? "fa-check-circle text-green-600" : "fa-times-circle text-red-600"} text-2xl mr-3 mt-1"></i>
                    <div>
                        <h4 class="font-bold text-lg mb-2">
                            ${isCorrect ? "¡Correcto! ✓" : "Incorrecto ✗"}
                        </h4>
                        <p class="text-gray-700">${question.explanation}</p>
                    </div>
                </div>
            </div>
        `;
  }

  container.innerHTML = html;

  // Update navigation
  document.getElementById("mc-current").textContent = currentMCQuestion + 1;
  document.getElementById("mc-prev-btn").disabled = currentMCQuestion === 0;
  document.getElementById("mc-next-btn").disabled =
    currentMCQuestion === multipleChoiceQuestions.length - 1;
}

function selectMCOption(optionIndex) {
  const question = multipleChoiceQuestions[currentMCQuestion];

  if (mcAnswers[question.id] !== undefined) return;

  mcAnswers[question.id] = optionIndex;

  if (optionIndex === question.correct) {
    mcScore += 10;
  }

  saveProgress();
  updateScores();
  loadMCQuestion();
}

function nextMCQuestion() {
  if (currentMCQuestion < multipleChoiceQuestions.length - 1) {
    currentMCQuestion++;
    saveProgress();
    loadMCQuestion();
    window.scrollTo(0, 200);
  }
}

function previousMCQuestion() {
  if (currentMCQuestion > 0) {
    currentMCQuestion--;
    saveProgress();
    loadMCQuestion();
    window.scrollTo(0, 200);
  }
}

function skipMCQuestion() {
  nextMCQuestion();
}

// True/False Functions
function loadTFQuestion() {
  const question = trueFalseQuestions[currentTFQuestion];
  const container = document.getElementById("tf-quiz-container");

  const answered = tfAnswers[question.id] !== undefined;
  const userAnswer = tfAnswers[question.id];

  let html = `
        <div class="mb-6">
            <div class="flex items-center justify-between mb-4">
                <span class="badge badge-info">Pregunta ${currentTFQuestion + 1}</span>
                ${answered ? '<span class="badge badge-success"><i class="fas fa-check mr-1"></i>Respondida</span>' : ""}
            </div>
            <h3 class="text-xl font-bold text-gray-800 mb-6">${question.statement}</h3>
            <div class="grid md:grid-cols-2 gap-4">
                <button class="tf-btn tf-btn-true ${answered && userAnswer === true ? (userAnswer === question.answer ? "correct" : "incorrect") : ""} ${!answered && userAnswer === true ? "selected" : ""}" 
                        onclick="selectTFOption(true)" 
                        ${answered ? "disabled" : ""}>
                    <i class="fas fa-check-circle mr-2"></i>VERDADERO
                </button>
                <button class="tf-btn tf-btn-false ${answered && userAnswer === false ? (userAnswer === question.answer ? "correct" : "incorrect") : ""} ${!answered && userAnswer === false ? "selected" : ""}" 
                        onclick="selectTFOption(false)" 
                        ${answered ? "disabled" : ""}>
                    <i class="fas fa-times-circle mr-2"></i>FALSO
                </button>
            </div>
        </div>
    `;

  if (answered) {
    const isCorrect = userAnswer === question.answer;
    html += `
            <div class="feedback ${isCorrect ? "feedback-correct" : "feedback-incorrect"}">
                <div class="flex items-start">
                    <i class="fas ${isCorrect ? "fa-check-circle text-green-600" : "fa-times-circle text-red-600"} text-2xl mr-3 mt-1"></i>
                    <div>
                        <h4 class="font-bold text-lg mb-2">
                            ${isCorrect ? "¡Correcto! ✓" : "Incorrecto ✗"}
                        </h4>
                        <p class="text-gray-700">${question.explanation}</p>
                    </div>
                </div>
            </div>
        `;
  }

  container.innerHTML = html;

  // Update navigation
  document.getElementById("tf-current").textContent = currentTFQuestion + 1;
  document.getElementById("tf-prev-btn").disabled = currentTFQuestion === 0;
  document.getElementById("tf-next-btn").disabled =
    currentTFQuestion === trueFalseQuestions.length - 1;
}

function selectTFOption(answer) {
  const question = trueFalseQuestions[currentTFQuestion];

  if (tfAnswers[question.id] !== undefined) return;

  tfAnswers[question.id] = answer;

  if (answer === question.answer) {
    tfScore += 5;
  }

  saveProgress();
  updateScores();
  loadTFQuestion();
}

function nextTFQuestion() {
  if (currentTFQuestion < trueFalseQuestions.length - 1) {
    currentTFQuestion++;
    saveProgress();
    loadTFQuestion();
    window.scrollTo(0, 200);
  }
}

function previousTFQuestion() {
  if (currentTFQuestion > 0) {
    currentTFQuestion--;
    saveProgress();
    loadTFQuestion();
    window.scrollTo(0, 200);
  }
}

function skipTFQuestion() {
  nextTFQuestion();
}

// Justification Functions
function loadJustQuestion() {
  const question = justificationQuestions[currentJustQuestion];
  const container = document.getElementById("just-container");

  const answered = justAnswers[question.id] !== undefined;
  const userAnswer = justAnswers[question.id] || "";

  let html = `
        <div class="mb-6">
            <div class="flex items-center justify-between mb-4">
                <span class="badge badge-info">Ejercicio ${currentJustQuestion + 1}</span>
                ${answered ? '<span class="badge badge-success"><i class="fas fa-check mr-1"></i>Respondido</span>' : ""}
            </div>
            <h3 class="text-xl font-bold text-gray-800 mb-4">${question.question}</h3>
            
            <div class="bg-blue-50 border-l-4 border-blue-500 p-4 mb-4">
                <h4 class="font-bold text-blue-800 mb-2"><i class="fas fa-lightbulb mr-2"></i>Puntos Clave a Incluir:</h4>
                <ul class="list-disc list-inside space-y-1 text-blue-900">
                    ${question.keyPoints.map((point) => `<li>${point}</li>`).join("")}
                </ul>
            </div>
            
            <textarea 
                class="justification-textarea" 
                placeholder="Escribe tu justificación aquí..."
                id="just-textarea-${question.id}"
                ${answered ? "disabled" : ""}
            >${userAnswer}</textarea>
            
            ${
              !answered
                ? `
                <button onclick="submitJustification()" class="mt-4 btn-primary">
                    <i class="fas fa-paper-plane mr-2"></i>Enviar Respuesta
                </button>
            `
                : ""
            }
        </div>
    `;

  if (answered) {
    html += `
            <div class="mt-6">
                <div class="bg-green-50 border-l-4 border-green-500 p-4 mb-4">
                    <h4 class="font-bold text-green-800 mb-2">
                        <i class="fas fa-check-circle mr-2"></i>Tu Respuesta:
                    </h4>
                    <p class="text-gray-700 whitespace-pre-wrap break-words overflow-wrap-anywhere max-w-full">${userAnswer}</p>
                </div>
                
                <div class="bg-purple-50 border-l-4 border-purple-500 p-4">
                    <h4 class="font-bold text-purple-800 mb-2">
                        <i class="fas fa-star mr-2"></i>Respuesta Modelo:
                    </h4>
                    <p class="text-gray-700 whitespace-pre-wrap break-words overflow-wrap-anywhere max-w-full">${question.modelAnswer}</p>
                </div>
            </div>
        `;
  }

  container.innerHTML = html;

  // Update navigation
  document.getElementById("just-current").textContent = currentJustQuestion + 1;
  document.getElementById("just-prev-btn").disabled = currentJustQuestion === 0;
  document.getElementById("just-next-btn").disabled =
    currentJustQuestion === justificationQuestions.length - 1;
}

function submitJustification() {
  const question = justificationQuestions[currentJustQuestion];
  const textarea = document.getElementById(`just-textarea-${question.id}`);
  const answer = textarea.value.trim();

  if (!answer) {
    alert("Por favor, escribe una justificación antes de enviar.");
    return;
  }

  if (answer.length < 50) {
    alert(
      "Tu respuesta es muy corta. Por favor, desarrolla tu justificación con más detalle.",
    );
    return;
  }

  justAnswers[question.id] = answer;
  justScore += 15;

  saveProgress();
  updateScores();
  loadJustQuestion();
  window.scrollTo(0, 200);
}

function nextJustQuestion() {
  if (currentJustQuestion < justificationQuestions.length - 1) {
    currentJustQuestion++;
    saveProgress();
    loadJustQuestion();
    window.scrollTo(0, 200);
  }
}

function previousJustQuestion() {
  if (currentJustQuestion > 0) {
    currentJustQuestion--;
    saveProgress();
    loadJustQuestion();
    window.scrollTo(0, 200);
  }
}

function skipJustQuestion() {
  nextJustQuestion();
}

// Clinical Cases Functions
function loadClinicalCase() {
  const clinicalCase = clinicalCases[currentCase];
  const container = document.getElementById("case-container");

  let html = `
        <div class="case-card">
            <h3 class="text-2xl font-bold text-gray-800 mb-4">${clinicalCase.title}</h3>
            
            <div class="bg-white rounded-lg p-4 mb-4">
                <h4 class="font-bold text-lg text-gray-800 mb-3">
                    <i class="fas fa-file-medical text-blue-600 mr-2"></i>Presentación del Caso
                </h4>
                <p class="text-gray-700 leading-relaxed">${clinicalCase.scenario.presentation}</p>
            </div>
            
            <div class="grid md:grid-cols-2 gap-4 mb-4">
                <div class="patient-info">
                    <h4 class="font-bold text-gray-800 mb-3">
                        <i class="fas fa-heartbeat text-red-600 mr-2"></i>Signos Vitales
                    </h4>
                    ${Object.entries(clinicalCase.scenario.vitals)
                      .map(
                        ([key, value]) => `
                        <div class="patient-info-item">
                            <span class="text-gray-600">${key}:</span>
                            <span class="font-semibold text-gray-800">${value}</span>
                        </div>
                    `,
                      )
                      .join("")}
                </div>
                
                <div class="patient-info">
                    <h4 class="font-bold text-gray-800 mb-3">
                        <i class="fas fa-stethoscope text-green-600 mr-2"></i>Examen Físico
                    </h4>
                    <p class="text-gray-700 text-sm">${clinicalCase.scenario.physicalExam}</p>
                </div>
            </div>
            
            <div class="bg-white rounded-lg p-4 mb-4">
                <h4 class="font-bold text-gray-800 mb-3">
                    <i class="fas fa-flask text-purple-600 mr-2"></i>Laboratorios y Estudios
                </h4>
                <p class="text-gray-700 text-sm leading-relaxed">${clinicalCase.scenario.labs}</p>
            </div>
        </div>
        
        <div class="bg-white rounded-xl shadow-lg p-6 mt-6">
            <h4 class="text-xl font-bold text-gray-800 mb-4">
                <i class="fas fa-question-circle text-indigo-600 mr-2"></i>Preguntas del Caso
            </h4>
            ${clinicalCase.questions.map((q, qIndex) => renderCaseQuestion(clinicalCase.id, q, qIndex)).join("")}
        </div>
    `;

  container.innerHTML = html;

  // Update navigation
  document.getElementById("case-current").textContent = currentCase + 1;
  document.getElementById("case-prev-btn").disabled = currentCase === 0;
  document.getElementById("case-next-btn").disabled =
    currentCase === clinicalCases.length - 1;
}

function renderCaseQuestion(caseId, question, qIndex) {
  const questionKey = `${caseId}-${qIndex}`;
  const answered = caseAnswers[questionKey] !== undefined;
  const userAnswer = caseAnswers[questionKey];

  let html = `
        <div class="mb-6 pb-6 ${qIndex < clinicalCases[currentCase].questions.length - 1 ? "border-b border-gray-200" : ""}">
            <div class="flex items-center justify-between mb-3">
                <h5 class="font-bold text-lg text-gray-800">Pregunta ${qIndex + 1}</h5>
                ${answered ? '<span class="badge badge-success"><i class="fas fa-check mr-1"></i>Respondida</span>' : ""}
            </div>
            <p class="text-gray-700 mb-4">${question.question}</p>
            <div class="space-y-2">
    `;

  question.options.forEach((option, optIndex) => {
    const isSelected = userAnswer === optIndex;
    const isCorrect = optIndex === question.correct;
    let btnClass = "option-btn";
    let icon = "";

    if (answered) {
      if (isCorrect) {
        btnClass += " correct";
        icon = '<i class="fas fa-check-circle mr-2"></i>';
      } else if (isSelected && !isCorrect) {
        btnClass += " incorrect";
        icon = '<i class="fas fa-times-circle mr-2"></i>';
      }
    } else if (isSelected) {
      btnClass += " selected";
    }

    html += `
            <button class="${btnClass}" 
                    onclick="selectCaseOption(${caseId}, ${qIndex}, ${optIndex})" 
                    ${answered ? "disabled" : ""}>
                ${icon}${option}
            </button>
        `;
  });

  html += "</div>";

  if (answered) {
    const isCorrect = userAnswer === question.correct;
    html += `
            <div class="feedback ${isCorrect ? "feedback-correct" : "feedback-incorrect"} mt-4">
                <div class="flex items-start">
                    <i class="fas ${isCorrect ? "fa-check-circle text-green-600" : "fa-times-circle text-red-600"} text-xl mr-3 mt-1"></i>
                    <div>
                        <h4 class="font-bold mb-2">
                            ${isCorrect ? "¡Correcto! ✓" : "Incorrecto ✗"}
                        </h4>
                        <p class="text-sm">${question.explanation}</p>
                    </div>
                </div>
            </div>
        `;
  }

  html += "</div>";
  return html;
}

function selectCaseOption(caseId, qIndex, optIndex) {
  const questionKey = `${caseId}-${qIndex}`;

  if (caseAnswers[questionKey] !== undefined) return;

  const question = clinicalCases[currentCase].questions[qIndex];
  caseAnswers[questionKey] = optIndex;

  if (optIndex === question.correct) {
    caseScore += 20;
  }

  saveProgress();
  updateScores();
  loadClinicalCase();
}

function nextCase() {
  if (currentCase < clinicalCases.length - 1) {
    currentCase++;
    saveProgress();
    loadClinicalCase();
    window.scrollTo(0, 200);
  }
}

function previousCase() {
  if (currentCase > 0) {
    currentCase--;
    saveProgress();
    loadClinicalCase();
    window.scrollTo(0, 200);
  }
}

function skipCase() {
  nextCase();
}

// Score and Statistics Functions
function updateScores() {
  document.getElementById("mc-score").textContent = mcScore;
  document.getElementById("tf-score").textContent = tfScore;
  document.getElementById("just-score").textContent = justScore;
  document.getElementById("case-score").textContent = caseScore;

  const totalScore = mcScore + tfScore + justScore + caseScore;
  document.getElementById("totalScore").textContent = totalScore;

  // Calculate progress
  const mcProgress =
    (Object.keys(mcAnswers).length / multipleChoiceQuestions.length) * 100;
  const tfProgress =
    (Object.keys(tfAnswers).length / trueFalseQuestions.length) * 100;
  const justProgress =
    (Object.keys(justAnswers).length / justificationQuestions.length) * 100;

  let caseQuestionsTotal = 0;
  let caseQuestionsAnswered = 0;
  clinicalCases.forEach((c) => {
    caseQuestionsTotal += c.questions.length;
    c.questions.forEach((q, qi) => {
      if (caseAnswers[`${c.id}-${qi}`] !== undefined) {
        caseQuestionsAnswered++;
      }
    });
  });
  const caseProgress = (caseQuestionsAnswered / caseQuestionsTotal) * 100;

  const totalProgress =
    (mcProgress + tfProgress + justProgress + caseProgress) / 4;
  document.getElementById("totalProgress").textContent =
    Math.round(totalProgress);
}

function updateStatistics() {
  // Individual section percentages
  const mcAnswered = Object.keys(mcAnswers).length;
  const mcCorrect = Object.values(mcAnswers).filter((ans, i) => {
    const q = multipleChoiceQuestions.find(
      (q) => mcAnswers[q.id] !== undefined,
    );
    return ans === multipleChoiceQuestions[i]?.correct;
  }).length;
  const mcPercent =
    mcAnswered > 0 ? Math.round((mcCorrect / mcAnswered) * 100) : 0;
  document.getElementById("stat-mc").textContent = mcPercent;

  const tfAnswered = Object.keys(tfAnswers).length;
  const tfCorrect = Object.values(tfAnswers).filter((ans, i) => {
    const q = trueFalseQuestions[i];
    return ans === q?.answer;
  }).length;
  const tfPercent =
    tfAnswered > 0 ? Math.round((tfCorrect / tfAnswered) * 100) : 0;
  document.getElementById("stat-tf").textContent = tfPercent;

  const justAnswered = Object.keys(justAnswers).length;
  const justPercent = justAnswered > 0 ? 100 : 0; // All submitted answers get points
  document.getElementById("stat-just").textContent = justPercent;

  let caseTotal = 0;
  let caseCorrect = 0;
  clinicalCases.forEach((c) => {
    c.questions.forEach((q, qi) => {
      const ans = caseAnswers[`${c.id}-${qi}`];
      if (ans !== undefined) {
        caseTotal++;
        if (ans === q.correct) caseCorrect++;
      }
    });
  });
  const casePercent =
    caseTotal > 0 ? Math.round((caseCorrect / caseTotal) * 100) : 0;
  document.getElementById("stat-case").textContent = casePercent;

  // Total statistics
  const totalAnswered = mcAnswered + tfAnswered + justAnswered + caseTotal;
  const totalCorrect = mcCorrect + tfCorrect + justAnswered + caseCorrect;
  const totalIncorrect = totalAnswered - totalCorrect;

  document.getElementById("stat-answered").textContent = totalAnswered;
  document.getElementById("stat-correct").textContent = totalCorrect;
  document.getElementById("stat-incorrect").textContent = totalIncorrect;
  document.getElementById("stat-total-score").textContent =
    mcScore + tfScore + justScore + caseScore;

  // Progress bar
  const totalQuestions =
    multipleChoiceQuestions.length +
    trueFalseQuestions.length +
    justificationQuestions.length +
    clinicalCases.reduce((sum, c) => sum + c.questions.length, 0);
  const progressPercent = Math.round((totalAnswered / totalQuestions) * 100);
  document.getElementById("stat-total-progress").textContent = progressPercent;
  document.getElementById("stat-progress-bar").style.width =
    progressPercent + "%";

  // Check if all exercises are completed
  checkCompletionStatus(progressPercent, totalAnswered, totalQuestions);
}

function resetProgress() {
  if (
    !confirm(
      "¿Estás seguro de que quieres reiniciar todo tu progreso? Esta acción no se puede deshacer.",
    )
  ) {
    return;
  }

  mcAnswers = {};
  tfAnswers = {};
  justAnswers = {};
  caseAnswers = {};
  mcScore = 0;
  tfScore = 0;
  justScore = 0;
  caseScore = 0;
  currentMCQuestion = 0;
  currentTFQuestion = 0;
  currentJustQuestion = 0;
  currentCase = 0;

  localStorage.removeItem(STORAGE_KEY);
  localStorage.removeItem("completion_message_shown");

  initializeApp();
  updateStatistics();

  alert("Tu progreso ha sido reiniciado exitosamente.");
  showSection("home");
}

// Check completion status and show special message
function checkCompletionStatus(progressPercent, totalAnswered, totalQuestions) {
  // Check if already showed completion message
  const hasShownCompletion = localStorage.getItem("completion_message_shown");

  // If 100% complete and message hasn't been shown yet
  if (
    progressPercent === 100 &&
    totalAnswered === totalQuestions &&
    !hasShownCompletion
  ) {
    // Mark as shown
    localStorage.setItem("completion_message_shown", "true");

    // Show beautiful completion modal
    showCompletionModal();
  }
}

// Show special completion modal with love message
function showCompletionModal() {
  // Create modal overlay
  const modal = document.createElement("div");
  modal.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 10000;
    animation: fadeIn 0.5s ease;
  `;

  // Create modal content
  const modalContent = document.createElement("div");
  modalContent.style.cssText = `
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    padding: 50px;
    border-radius: 20px;
    text-align: center;
    max-width: 600px;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
    animation: scaleIn 0.5s ease;
  `;

  modalContent.innerHTML = `
    <div style="font-size: 80px; margin-bottom: 20px;">🎉🏆✨</div>
    <h2 style="color: white; font-size: 36px; margin-bottom: 20px; font-weight: bold;">
      ¡FELICIDADES!
    </h2>
    <div style="background: white; padding: 30px; border-radius: 15px; margin-bottom: 25px;">
      <p style="color: #667eea; font-size: 24px; font-weight: bold; margin-bottom: 15px;">
        Has completado el 100% del progreso
      </p>
      <div style="font-size: 60px; margin: 20px 0;">�🌟�</div>
      <p style="color: #764ba2; font-size: 28px; line-height: 1.8; font-weight: bold;">
        ¡Ahora a coger 5! 🙌
      </p>
    </div>
    <button onclick="closeCompletionModal()" style="
      background: white;
      color: #667eea;
      border: none;
      padding: 15px 40px;
      font-size: 18px;
      font-weight: bold;
      border-radius: 50px;
      cursor: pointer;
      box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
      transition: transform 0.3s ease;
    " onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
      ✨ ¡Entendido! ✨
    </button>
  `;

  modal.appendChild(modalContent);
  document.body.appendChild(modal);

  // Add confetti effect
  createConfetti();

  // Make it closeable globally
  window.closeCompletionModal = function () {
    modal.remove();
  };
}

// Create confetti animation
function createConfetti() {
  const colors = [
    "#667eea",
    "#764ba2",
    "#f093fb",
    "#4facfe",
    "#43e97b",
    "#fa709a",
  ];
  const confettiCount = 100;

  for (let i = 0; i < confettiCount; i++) {
    setTimeout(() => {
      const confetti = document.createElement("div");
      confetti.style.cssText = `
        position: fixed;
        width: 10px;
        height: 10px;
        background: ${colors[Math.floor(Math.random() * colors.length)]};
        top: -10px;
        left: ${Math.random() * 100}%;
        opacity: ${Math.random()};
        transform: rotate(${Math.random() * 360}deg);
        animation: confettiFall ${3 + Math.random() * 3}s linear forwards;
        z-index: 10001;
      `;

      document.body.appendChild(confetti);

      setTimeout(() => confetti.remove(), 6000);
    }, i * 30);
  }
}

// Add CSS animations
if (!document.getElementById("completion-animations")) {
  const style = document.createElement("style");
  style.id = "completion-animations";
  style.textContent = `
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    @keyframes scaleIn {
      from { 
        transform: scale(0.5);
        opacity: 0;
      }
      to { 
        transform: scale(1);
        opacity: 1;
      }
    }
    @keyframes confettiFall {
      to {
        top: 100vh;
        transform: translateY(0) rotate(720deg);
      }
    }
  `;
  document.head.appendChild(style);
}

// Keyboard shortcuts
document.addEventListener("keydown", (e) => {
  // Only work if not typing in textarea
  if (e.target.tagName === "TEXTAREA") return;

  // Arrow keys for navigation
  if (e.key === "ArrowLeft") {
    const section = document.querySelector(".section-content:not(.hidden)");
    if (section.id === "multiple-choice-section" && currentMCQuestion > 0) {
      previousMCQuestion();
    } else if (section.id === "true-false-section" && currentTFQuestion > 0) {
      previousTFQuestion();
    } else if (
      section.id === "justification-section" &&
      currentJustQuestion > 0
    ) {
      previousJustQuestion();
    } else if (section.id === "clinical-cases-section" && currentCase > 0) {
      previousCase();
    }
  } else if (e.key === "ArrowRight") {
    const section = document.querySelector(".section-content:not(.hidden)");
    if (
      section.id === "multiple-choice-section" &&
      currentMCQuestion < multipleChoiceQuestions.length - 1
    ) {
      nextMCQuestion();
    } else if (
      section.id === "true-false-section" &&
      currentTFQuestion < trueFalseQuestions.length - 1
    ) {
      nextTFQuestion();
    } else if (
      section.id === "justification-section" &&
      currentJustQuestion < justificationQuestions.length - 1
    ) {
      nextJustQuestion();
    } else if (
      section.id === "clinical-cases-section" &&
      currentCase < clinicalCases.length - 1
    ) {
      nextCase();
    }
  }
});
