let selections = {
    stage: null,
    type: null,
    audience: null
};

// Handle option selection
document.querySelectorAll('.options').forEach(container => {
    container.addEventListener('click', (e) => {
        const option = e.target.closest('.option');
        if (!option) return;

        const parent = option.parentElement;
        parent.querySelectorAll('.option').forEach(opt => opt.classList.remove('selected'));
        option.classList.add('selected');

        const value = option.dataset.value;
        const questionId = parent.id;

        if (questionId === 'typeOptions') {
            selections.type = value;
            showQuestion('q2');
            updateProgress(1);
        } else if (questionId === 'stageOptions') {
            selections.stage = value;
            showQuestion('q3');
            updateProgress(2);
        } else if (questionId === 'audienceOptions') {
            selections.audience = value;
            showResults();
            updateProgress(3);
        }
    });
});

function showQuestion(id) {
    document.querySelectorAll('.question-section').forEach(q => q.classList.add('hidden'));
    document.getElementById(id).classList.remove('hidden');
}

function updateProgress(currentStep) {
    // Remove all states first
    document.querySelectorAll('.progress-step').forEach(step => {
        step.classList.remove('active', 'completed');
    });
    
    // Mark completed steps
    for (let i = 1; i < currentStep; i++) {
        document.getElementById(`step${i}`).classList.add('completed');
    }
    
    // Mark current step as active
    if (currentStep <= 3) {
        document.getElementById(`step${currentStep}`).classList.add('active');
    } else {
        // All steps completed
        document.querySelectorAll('.progress-step').forEach(step => {
            step.classList.add('completed');
        });
    }
}

function showResults() {
    const { stage, type, audience } = selections;
    const data = questions[stage][type];

    // Hide questions
    document.querySelectorAll('.question-section').forEach(q => q.classList.add('hidden'));

    // Show results
    document.getElementById('results').classList.add('active');

    // Build summary
    const stageText = {
        inspire: 'Expand the idea space',
        provoke: 'Break safe thinking',
        decide: 'Choose a direction',
        nudge: 'Strengthen the work',
        sharpen: 'Sharpen the final details'
    };

    const typeText = {
        comms: 'Visual/Communication design',
        product: 'Digital product/interface',
        service: 'Service/Process design',
        strategic: 'Strategic/Systems design',
        policy: 'Policy/Program design'
    };

    const audienceText = {
        internal: 'Internal team',
        cross: 'Cross-functional colleagues',
        leadership: 'Leadership/stakeholders',
        external: 'External partners/beneficiaries',
        self: 'Self-review'
    };

    document.getElementById('summary').innerHTML = `
        <strong>Stage:</strong> ${stageText[stage]}<br>
        <strong>Type:</strong> ${typeText[type]}<br>
        <strong>Audience:</strong> ${audienceText[audience]}
    `;

    // Show focus areas
    const focusHTML = data.focus.map(f => `<span class="focus-tag">${f}</span>`).join('');
    document.getElementById('focusAreas').innerHTML = focusHTML;

    // Show questions with hints
    const questionsHTML = data.questions.map((q, i) => `
        <div class="question-item">
            <div class="question-number">Question ${i + 1}</div>
            <div class="question-text">${q.text}</div>
            ${q.hint ? `<div class="question-hint">${q.hint}</div>` : ''}
            <div class="question-notes">
                <label>Notes from discussion:</label>
                <textarea class="notes-input" placeholder="Capture key insights here..."></textarea>
            </div>
        </div>
    `).join('');

    document.getElementById('questionsList').innerHTML = questionsHTML;
    
    // Scroll to top of results
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function reset() {
    selections = { stage: null, type: null, audience: null };
    document.querySelectorAll('.option').forEach(opt => opt.classList.remove('selected'));
    document.getElementById('results').classList.remove('active');
    showQuestion('q1');
    updateProgress(1);  // Changed from 0 to 1 to show step 1 as active
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function exportNotes() {
    const { stage, type, audience } = selections;
    
    const stageText = {
        inspire: 'Expand the idea space',
        provoke: 'Break safe thinking',
        decide: 'Choose a direction',
        nudge: 'Strengthen the work',
        sharpen: 'Sharpen the final details'
    };

    const typeText = {
        comms: 'Visual/Communication design',
        product: 'Digital product/interface',
        service: 'Service/Process design',
        strategic: 'Strategic/Systems design',
        policy: 'Policy/Program design'
    };

    const audienceText = {
        internal: 'Internal team',
        cross: 'Cross-functional colleagues',
        leadership: 'Leadership/stakeholders',
        external: 'External partners/beneficiaries',
        self: 'Self-review'
    };

    let output = `DESIGN FEEDBACK SESSION NOTES\n`;
    output += `Generated: ${new Date().toLocaleDateString()}\n\n`;
    output += `SESSION DETAILS\n`;
    output += `${'='.repeat(50)}\n`;
    output += `Stage: ${stageText[stage]}\n`;
    output += `Type: ${typeText[type]}\n`;
    output += `Audience: ${audienceText[audience]}\n\n`;
    output += `FEEDBACK QUESTIONS & NOTES\n`;
    output += `${'='.repeat(50)}\n\n`;

    const noteInputs = document.querySelectorAll('.notes-input');
    const questionTexts = document.querySelectorAll('.question-text');

    questionTexts.forEach((q, i) => {
        output += `${i + 1}. ${q.textContent}\n\n`;
        const notes = noteInputs[i].value.trim();
        if (notes) {
            output += `   ${notes}\n\n`;
        } else {
            output += `   [No notes captured]\n\n`;
        }
        output += `${'-'.repeat(50)}\n\n`;
    });

    // Create downloadable file
    const blob = new Blob([output], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `feedback-notes-${new Date().toISOString().split('T')[0]}.txt`;
    a.click();
    URL.revokeObjectURL(url);
}
