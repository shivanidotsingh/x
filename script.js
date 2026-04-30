// Question bank - structured as stage -> type -> questions + focus areas
const questions = {
    inspire: {
        comms: {
            questions: [
                "What metaphors could this lean on?",
                "What would the opposite approach look like?",
                "What constraints could we temporarily remove?",
                "What adjacent fields (public health, education, urban planning) could inform this?",
                "What visual reference feels totally different but somehow relevant?"
            ],
            focus: ["Clarity", "Engagement", "Accessibility"]
        },
        product: {
            questions: [
                "What mental models do users already have that we could leverage?",
                "What would this look like if we prioritized delight over efficiency?",
                "What adjacent products or experiences could inspire this?",
                "What constraints could we temporarily remove to see new possibilities?",
                "What would the most playful version of this look like?"
            ],
            focus: ["Usability", "Delight", "Innovation"]
        },
        service: {
            questions: [
                "What analogous processes in other sectors could inform this?",
                "What would this look like if we designed for the edges, not the average?",
                "What rituals or touchpoints could make this feel more human?",
                "What constraints could we temporarily remove?",
                "What would happen if we doubled the time/halved the time for this process?"
            ],
            focus: ["Experience", "Inclusivity", "Flow"]
        },
        strategic: {
            questions: [
                "What adjacent fields could inform this? (public health, community organizing, game design)",
                "What would this look like if we designed it WITH the community, not FOR them?",
                "What assumptions about access, literacy, or infrastructure could we challenge?",
                "What can we learn from how other sectors solve similar problems?",
                "What would the most radical version of this look like?"
            ],
            focus: ["Actionability", "Alignment", "Rigor"]
        },
        policy: {
            questions: [
                "What existing policies or programs could this build on?",
                "What would this look like if we prioritized dignity over efficiency?",
                "What adjacent governance models could inform this?",
                "What constraints could we temporarily remove to explore new possibilities?",
                "What would this look like if communities had full decision-making power?"
            ],
            focus: ["Impact", "Sustainability", "Equity"]
        }
    },
    provoke: {
        comms: {
            questions: [
                "What assumptions are we making about access, literacy, or infrastructure?",
                "What would this look like if we prioritized dignity over efficiency?",
                "What visual would feel uncomfortable but memorable?",
                "What happens if we simplify this dramatically?",
                "If we had 10x the budget, what would we do? If we had 1/10th, what's the core idea?"
            ],
            focus: ["Impact", "Memorability", "Boldness"]
        },
        product: {
            questions: [
                "What if we removed the most obvious feature?",
                "What assumptions are we making about how people will actually use this?",
                "What would this look like if we optimized for trust instead of speed?",
                "What happens if we make the invisible visible?",
                "What would break if we cut the scope in half?"
            ],
            focus: ["Innovation", "Trust", "Simplicity"]
        },
        service: {
            questions: [
                "What if we flipped the order of these steps?",
                "What assumptions are we making about who participates and how?",
                "What would this look like if we prioritized agency over convenience?",
                "What happens if we remove the most 'professional' element?",
                "What if people had to opt in at every step instead of being guided through?"
            ],
            focus: ["Agency", "Participation", "Flexibility"]
        },
        strategic: {
            questions: [
                "If we had 10x the budget, what would we do? If we had 1/10th, what's the core idea?",
                "What if the problem isn't what we think it is?",
                "What assumptions about power dynamics are we making?",
                "What would this look like if we designed it WITH the community, not FOR them?",
                "What happens if we simplify this dramatically?"
            ],
            focus: ["Assumptions", "Power", "Community"]
        },
        policy: {
            questions: [
                "What if we inverted the power structure here?",
                "What assumptions are we making about who benefits and who decides?",
                "What would this look like if enforcement was impossible?",
                "What if we designed for the exception, not the norm?",
                "What would happen if we made all the implicit rules explicit?"
            ],
            focus: ["Equity", "Transparency", "Accountability"]
        }
    },
    decide: {
        comms: {
            questions: [
                "Which option communicates the idea most clearly while still feeling memorable?",
                "Which direction best supports the core idea?",
                "What would we regret not pushing?",
                "Which idea feels most distinctive in this category?",
                "Which option best balances accessibility with impact?"
            ],
            focus: ["Clarity", "Distinctiveness", "Impact"]
        },
        product: {
            questions: [
                "Which option best serves the user's primary goal?",
                "What's the riskiest assumption in each option, and how do we test it cheaply?",
                "Which option is most scalable without losing quality?",
                "Which direction would we regret not exploring?",
                "Which option best balances simplicity with functionality?"
            ],
            focus: ["Usability", "Scalability", "Feasibility"]
        },
        service: {
            questions: [
                "Which option creates the clearest pathway for participants?",
                "Which approach is most adaptable to different contexts?",
                "What's the riskiest assumption in each option?",
                "Which option best balances structure with flexibility?",
                "Which direction would be hardest to walk back from, and is that okay?"
            ],
            focus: ["Clarity", "Adaptability", "Experience"]
        },
        strategic: {
            questions: [
                "Which option is most scalable? Which is most community-led?",
                "What's the riskiest assumption in each option, and how do we test it cheaply?",
                "Which option best balances impact with feasibility?",
                "What would we regret not pushing?",
                "Which direction creates the most room for adaptation over time?"
            ],
            focus: ["Scalability", "Community", "Feasibility"]
        },
        policy: {
            questions: [
                "Which option creates the most sustainable long-term impact?",
                "Which approach gives communities the most agency?",
                "What's the riskiest political assumption in each option?",
                "Which option is most resilient to changes in leadership or funding?",
                "Which direction best balances ambition with achievability?"
            ],
            focus: ["Sustainability", "Agency", "Resilience"]
        }
    },
    nudge: {
        comms: {
            questions: [
                "Where could hierarchy improve to guide the eye better?",
                "What visual pattern should we establish and stick to?",
                "What feels inconsistent or less distinct?",
                "What could become a repeatable rule across similar pieces?",
                "What's the weakest visual element that we could strengthen or cut?"
            ],
            focus: ["Consistency", "Hierarchy", "Polish"]
        },
        product: {
            questions: [
                "Where could the user flow break down under real-world conditions?",
                "What interaction pattern should become a rule across the product?",
                "What edge case haven't we designed for yet?",
                "What would make this harder to maintain in 6 months?",
                "What micro-interaction could elevate the whole experience?"
            ],
            focus: ["Robustness", "Consistency", "Maintainability"]
        },
        service: {
            questions: [
                "Where might participants get confused or stuck?",
                "What ritual or touchpoint could we strengthen to improve the experience?",
                "What feedback loop would tell us if this is working?",
                "What edge case haven't we planned for?",
                "What happens when someone opts out or drops off midway?"
            ],
            focus: ["Clarity", "Feedback", "Resilience"]
        },
        strategic: {
            questions: [
                "Where could power imbalances show up in this design?",
                "What feedback loops ensure accountability to the communities we serve?",
                "What could break if we scale this to new contexts?",
                "What's the maintenance cost in 3 years? Who owns it when we leave?",
                "What assumptions are baked in that we should make explicit?"
            ],
            focus: ["Accountability", "Scalability", "Sustainability"]
        },
        policy: {
            questions: [
                "Where might implementation break down at the local level?",
                "What feedback mechanisms ensure this stays accountable to communities?",
                "What happens when political priorities shift?",
                "What's required to maintain this in 5 years?",
                "What unintended consequences haven't we considered?"
            ],
            focus: ["Implementation", "Accountability", "Adaptation"]
        }
    },
    sharpen: {
        comms: {
            questions: [
                "If we had one more day, what would we polish?",
                "What tweak could elevate the whole piece?",
                "What can we remove to make this clearer?",
                "What detail might annoy us months from now?",
                "What's the one thing that would make this feel 'done'?"
            ],
            focus: ["Clarity", "Refinement", "Completeness"]
        },
        product: {
            questions: [
                "What edge case could cause confusion or errors?",
                "What micro-copy needs one more pass?",
                "What interaction feels slightly off and needs tuning?",
                "What would break under real-world stress (slow network, old device)?",
                "What's the smallest change that would have the biggest impact?"
            ],
            focus: ["Polish", "Robustness", "Details"]
        },
        service: {
            questions: [
                "What instruction or prompt needs to be clearer?",
                "What handoff between steps could be smoother?",
                "What detail would make this feel more complete?",
                "What edge case haven't we documented?",
                "What's the smallest change that would improve the experience most?"
            ],
            focus: ["Clarity", "Smoothness", "Completeness"]
        },
        strategic: {
            questions: [
                "What edge case could break this when it scales?",
                "What assumptions are baked into the final version that we should document?",
                "What handoff or documentation will future-us need?",
                "What could we remove to make the core idea clearer?",
                "What detail will matter more than we think 6 months from now?"
            ],
            focus: ["Documentation", "Clarity", "Handoff"]
        },
        policy: {
            questions: [
                "What implementation detail needs more clarity?",
                "What documentation will implementers need that we haven't created?",
                "What edge case in enforcement or compliance haven't we addressed?",
                "What would make this easier to explain to communities?",
                "What monitoring or reporting mechanism is missing?"
            ],
            focus: ["Clarity", "Implementation", "Communication"]
        }
    }
};

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

        if (questionId === 'stageOptions') {
            selections.stage = value;
            showQuestion('q2');
            updateProgress(33);
        } else if (questionId === 'typeOptions') {
            selections.type = value;
            showQuestion('q3');
            updateProgress(66);
        } else if (questionId === 'audienceOptions') {
            selections.audience = value;
            showResults();
            updateProgress(100);
        }
    });
});

function showQuestion(id) {
    document.querySelectorAll('.question-section').forEach(q => q.classList.add('hidden'));
    document.getElementById(id).classList.remove('hidden');
}

function updateProgress(percent) {
    document.getElementById('progressFill').style.width = percent + '%';
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

    // Show questions
    const questionsHTML = data.questions.map((q, i) => `
        <div class="question-item">
            <div class="question-number">Question ${i + 1}</div>
            <div class="question-text">${q}</div>
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
    updateProgress(0);
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
