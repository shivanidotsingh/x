const questions = {
    inspire: {
        comms: {
            questions: [
                {
                    text: "What metaphors could this lean on?",
                    hint: "Think about everyday objects, natural phenomena, cultural references, or emotional states that could help people grasp the concept."
                },
                {
                    text: "What would the opposite approach look like?",
                    hint: "Think about inverting the color scheme, flipping the layout, using minimal vs. maximal design, or choosing a completely different tone."
                },
                {
                    text: "What constraints could we temporarily remove?",
                    hint: "Think about brand guidelines, page limits, budget caps, technical limitations, or accessibility requirements — what becomes possible?"
                },
                {
                    text: "What adjacent fields (public health, education, urban planning) could inform this?",
                    hint: "Think about how do other sectors communicate complex information? What visual languages or narrative structures could we borrow?"
                },
                {
                    text: "What visual reference feels totally different but somehow relevant?",
                    hint: "Think about art movements, architectural styles, nature photography, data visualization from other domains, or cultural aesthetics."
                }
            ],
            focus: ["Clarity", "Engagement", "Accessibility"]
        },
        product: {
            questions: [
                {
                    text: "What mental models do users already have that we could leverage?",
                    hint: "Think about familiar interfaces they use daily, physical-world analogies, or existing workflows they're comfortable with."
                },
                {
                    text: "What would this look like if we prioritized delight over efficiency?",
                    hint: "Think about playful interactions, Easter eggs, personalization, animations, or moments of surprise and joy."
                },
                {
                    text: "What adjacent products or experiences could inspire this?",
                    hint: "Think about tools from different industries, consumer apps with exceptional UX, or physical products with elegant design."
                },
                {
                    text: "What constraints could we temporarily remove to see new possibilities?",
                    hint: "Think about technical debt, platform limitations, backwards compatibility, or performance budgets — what opens up?"
                },
                {
                    text: "What would the most playful version of this look like?",
                    hint: "Think about gamification, whimsical language, unexpected interactions, or making mundane tasks feel like discovery."
                }
            ],
            focus: ["Usability", "Delight", "Innovation"]
        },
        service: {
            questions: [
                {
                    text: "What analogous processes in other sectors could inform this?",
                    hint: "Think about hospitality check-ins, healthcare triage, education onboarding, or retail customer journeys."
                },
                {
                    text: "What would this look like if we designed for the edges, not the average?",
                    hint: "Think about extreme users, edge cases, people with different abilities, or contexts we usually ignore."
                },
                {
                    text: "What rituals or touchpoints could make this feel more human?",
                    hint: "Think about welcoming moments, celebrations of progress, acknowledgment of effort, or personalized check-ins."
                },
                {
                    text: "What constraints could we temporarily remove?",
                    hint: "Think about time limits, physical space, staff availability, technology requirements, or budget caps."
                },
                {
                    text: "What would happen if we doubled the time/halved the time for this process?",
                    hint: "Think about what becomes possible with more time? What's essential if we only have half? Where's the sweet spot?"
                }
            ],
            focus: ["Experience", "Inclusivity", "Flow"]
        },
        strategic: {
            questions: [
                {
                    text: "What adjacent fields could inform this? (public health, community organizing, game design)",
                    hint: "Think about behavioral economics, systems thinking, social movements, participatory design, or change management frameworks."
                },
                {
                    text: "What would this look like if we designed it WITH the community, not FOR them?",
                    hint: "Think about co-design workshops, community ownership, distributed decision-making, or participatory governance."
                },
                {
                    text: "What assumptions about access, literacy, or infrastructure could we challenge?",
                    hint: "Think about internet connectivity, device ownership, language barriers, digital literacy, or cultural norms we're taking for granted."
                },
                {
                    text: "What can we learn from how other sectors solve similar problems?",
                    hint: "Think about agriculture, transportation, finance, education, or healthcare — what transferable strategies exist?"
                },
                {
                    text: "What would the most radical version of this look like?",
                    hint: "Think about complete system redesign, inverted power structures, or approaches that feel impossible but illuminating."
                }
            ],
            focus: ["Actionability", "Alignment", "Rigor"]
        },
        policy: {
            questions: [
                {
                    text: "What existing policies or programs could this build on?",
                    hint: "Think about proven frameworks, successful pilots elsewhere, or existing infrastructure we could leverage."
                },
                {
                    text: "What would this look like if we prioritized dignity over efficiency?",
                    hint: "Think about reducing bureaucratic burdens, honoring agency, eliminating shame, or designing for respect."
                },
                {
                    text: "What adjacent governance models could inform this?",
                    hint: "Think about participatory budgeting, cooperative ownership, indigenous governance, or community-led initiatives."
                },
                {
                    text: "What constraints could we temporarily remove to explore new possibilities?",
                    hint: "Think about political feasibility, budget limits, regulatory barriers, or stakeholder resistance."
                },
                {
                    text: "What would this look like if communities had full decision-making power?",
                    hint: "Think about who decides priorities, allocates resources, monitors outcomes, or adapts the program over time?"
                }
            ],
            focus: ["Impact", "Sustainability", "Equity"]
        }
    },
    provoke: {
        comms: {
            questions: [
                {
                    text: "What assumptions are we making about access, literacy, or infrastructure?",
                    hint: "Think about internet access, screen readers, language proficiency, color blindness, or device capabilities."
                },
                {
                    text: "What would this look like if we prioritized dignity over efficiency?",
                    hint: "Think about avoiding shame, honoring effort, respecting privacy, or giving people agency in how they engage."
                },
                {
                    text: "What visual would feel uncomfortable but memorable?",
                    hint: "Think about breaking conventions, using unexpected imagery, challenging comfort zones, or creating productive tension."
                },
                {
                    text: "What happens if we simplify this dramatically?",
                    hint: "Think about cutting half the words, removing all images, using one color, or stripping to core message only."
                },
                {
                    text: "If we had 10x the budget, what would we do? If we had 1/10th, what's the core idea?",
                    hint: "Think about what's aspirational vs. what's essential? Where's the real value being created?"
                }
            ],
            focus: ["Impact", "Memorability", "Boldness"]
        },
        product: {
            questions: [
                {
                    text: "What if we removed the most obvious feature?",
                    hint: "Think about core functionality vs. assumed requirements, or features inherited from convention rather than need."
                },
                {
                    text: "What assumptions are we making about how people will actually use this?",
                    hint: "Think about context of use, frequency, competing priorities, technical literacy, or motivation levels."
                },
                {
                    text: "What would this look like if we optimized for trust instead of speed?",
                    hint: "Think about transparency, control, reversibility, human support, or clear explanations over automation."
                },
                {
                    text: "What happens if we make the invisible visible?",
                    hint: "Think about showing the algorithm, exposing the process, revealing the data, or making hidden labor apparent."
                },
                {
                    text: "What would break if we cut the scope in half?",
                    hint: "Think about which features are truly core? What's nice-to-have vs. need-to-have? Where's the MVP?"
                }
            ],
            focus: ["Innovation", "Trust", "Simplicity"]
        },
        service: {
            questions: [
                {
                    text: "What if we flipped the order of these steps?",
                    hint: "Think about starting with outcomes instead of intake, ending with questions instead of answers, or reversing the power dynamic."
                },
                {
                    text: "What assumptions are we making about who participates and how?",
                    hint: "Think about availability, comfort with group settings, language preferences, physical access, or cultural norms."
                },
                {
                    text: "What would this look like if we prioritized agency over convenience?",
                    hint: "Think about giving people choices vs. streamlining their path, control vs. automation, or customization vs. defaults."
                },
                {
                    text: "What happens if we remove the most 'professional' element?",
                    hint: "Think about formal language, rigid structure, expert-led facilitation, or polished materials — what becomes possible?"
                },
                {
                    text: "What if people had to opt in at every step instead of being guided through?",
                    hint: "Think about explicit consent, active participation, self-direction, or choosing your own journey through the process."
                }
            ],
            focus: ["Agency", "Participation", "Flexibility"]
        },
        strategic: {
            questions: [
                {
                    text: "If we had 10x the budget, what would we do? If we had 1/10th, what's the core idea?",
                    hint: "Think about what's truly essential vs. what's enhancement? Where does the real impact come from?"
                },
                {
                    text: "What if the problem isn't what we think it is?",
                    hint: "Think about reframing the challenge, questioning the premise, or exploring what problem we're actually solving vs. what we say we're solving."
                },
                {
                    text: "What assumptions about power dynamics are we making?",
                    hint: "Think about who decides, who benefits, whose voices matter, who's accountable, or where control actually sits."
                },
                {
                    text: "What would this look like if we designed it WITH the community, not FOR them?",
                    hint: "Think about shared ownership, co-creation, community-led priorities, or participatory governance from the start."
                },
                {
                    text: "What happens if we simplify this dramatically?",
                    hint: "Think about cutting assumptions, reducing scope, focusing on one clear outcome, or removing layers of complexity."
                }
            ],
            focus: ["Assumptions", "Power", "Community"]
        },
        policy: {
            questions: [
                {
                    text: "What if we inverted the power structure here?",
                    hint: "Think about communities deciding vs. experts deciding, bottom-up vs. top-down, or grassroots leadership vs. institutional control."
                },
                {
                    text: "What assumptions are we making about who benefits and who decides?",
                    hint: "Think about whose interests are centered, who's at the table, who's missing, or whose consent is required."
                },
                {
                    text: "What would this look like if enforcement was impossible?",
                    hint: "Think about relying on buy-in vs. compliance, intrinsic motivation vs. penalties, or community norms vs. legal mandates."
                },
                {
                    text: "What if we designed for the exception, not the norm?",
                    hint: "Think about edge cases, outliers, marginalized groups, or situations that don't fit the standard model."
                },
                {
                    text: "What would happen if we made all the implicit rules explicit?",
                    hint: "Think about hidden requirements, unstated assumptions, informal barriers, or unwritten norms that shape access."
                }
            ],
            focus: ["Equity", "Transparency", "Accountability"]
        }
    },
    decide: {
        comms: {
            questions: [
                {
                    text: "Which option communicates the idea most clearly while still feeling memorable?",
                    hint: "Think about balancing simplicity with distinctiveness, clarity with personality, or information with emotion."
                },
                {
                    text: "Which direction best supports the core idea?",
                    hint: "Think about visual hierarchy, narrative flow, emotional tone, or alignment with the main message."
                },
                {
                    text: "What would we regret not pushing?",
                    hint: "Think about bold choices, creative risks, or directions that feel scary but could be breakthrough."
                },
                {
                    text: "Which idea feels most distinctive in this category?",
                    hint: "Think about what stands out from similar work, breaks conventions, or creates a recognizable signature."
                },
                {
                    text: "Which option best balances accessibility with impact?",
                    hint: "Think about readability, language level, visual contrast, or universal design without sacrificing visual power."
                }
            ],
            focus: ["Clarity", "Distinctiveness", "Impact"]
        },
        product: {
            questions: [
                {
                    text: "Which option best serves the user's primary goal?",
                    hint: "Think about the one thing users came here to do — which approach makes that easiest and most obvious?"
                },
                {
                    text: "What's the riskiest assumption in each option, and how do we test it cheaply?",
                    hint: "Think about user behavior predictions, technical feasibility, adoption rates, or integration challenges."
                },
                {
                    text: "Which option is most scalable without losing quality?",
                    hint: "Think about performance at 10x users, localization, edge cases, or maintenance burden."
                },
                {
                    text: "Which direction would we regret not exploring?",
                    hint: "Think about innovative approaches, user-requested features, or solutions that feel risky but promising."
                },
                {
                    text: "Which option best balances simplicity with functionality?",
                    hint: "Think about feature completeness vs. cognitive load, power vs. learnability, or flexibility vs. clarity."
                }
            ],
            focus: ["Usability", "Scalability", "Feasibility"]
        },
        service: {
            questions: [
                {
                    text: "Which option creates the clearest pathway for participants?",
                    hint: "Think about orientation, wayfinding, transitions between steps, or sense of progress through the journey."
                },
                {
                    text: "Which approach is most adaptable to different contexts?",
                    hint: "Think about urban vs. rural, different cultures, various resources, or changing circumstances."
                },
                {
                    text: "What's the riskiest assumption in each option?",
                    hint: "Think about participation rates, facilitator skills, time commitments, or resource availability."
                },
                {
                    text: "Which option best balances structure with flexibility?",
                    hint: "Think about guided process vs. open exploration, consistency vs. adaptation, or frameworks vs. freedom."
                },
                {
                    text: "Which direction would be hardest to walk back from, and is that okay?",
                    hint: "Think about commitments made, expectations set, infrastructure built, or relationships formed."
                }
            ],
            focus: ["Clarity", "Adaptability", "Experience"]
        },
        strategic: {
            questions: [
                {
                    text: "Which option is most scalable? Which is most community-led?",
                    hint: "Think about growth potential vs. local ownership, efficiency vs. empowerment, or reach vs. depth."
                },
                {
                    text: "What's the riskiest assumption in each option, and how do we test it cheaply?",
                    hint: "Think about theory of change, stakeholder buy-in, resource availability, or behavioral change assumptions."
                },
                {
                    text: "Which option best balances impact with feasibility?",
                    hint: "Think about transformative potential vs. practical constraints, ambition vs. achievability, or vision vs. resources."
                },
                {
                    text: "What would we regret not pushing?",
                    hint: "Think about systemic change opportunities, power-shifting approaches, or directions that challenge the status quo."
                },
                {
                    text: "Which direction creates the most room for adaptation over time?",
                    hint: "Think about learning loops, iteration cycles, emergence, or responsiveness to changing conditions."
                }
            ],
            focus: ["Scalability", "Community", "Feasibility"]
        },
        policy: {
            questions: [
                {
                    text: "Which option creates the most sustainable long-term impact?",
                    hint: "Think about lasting change vs. temporary fixes, systems change vs. symptoms, or root causes vs. surface interventions."
                },
                {
                    text: "Which approach gives communities the most agency?",
                    hint: "Think about decision-making power, resource control, adaptation rights, or ownership of outcomes."
                },
                {
                    text: "What's the riskiest political assumption in each option?",
                    hint: "Think about stakeholder alignment, political will, bureaucratic resistance, or funding stability."
                },
                {
                    text: "Which option is most resilient to changes in leadership or funding?",
                    hint: "Think about community ownership, diverse funding streams, embedded practices, or distributed governance."
                },
                {
                    text: "Which direction best balances ambition with achievability?",
                    hint: "Think about transformative goals vs. incremental progress, vision vs. pragmatism, or aspiration vs. capacity."
                }
            ],
            focus: ["Sustainability", "Agency", "Resilience"]
        }
    },
    nudge: {
        comms: {
            questions: [
                {
                    text: "Where could hierarchy improve to guide the eye better?",
                    hint: "Think about size relationships, contrast, spacing, color emphasis, or order of information."
                },
                {
                    text: "What visual pattern should we establish and stick to?",
                    hint: "Think about grid systems, type scales, color usage, spacing rhythm, or icon styles."
                },
                {
                    text: "What feels inconsistent or less distinct?",
                    hint: "Think about mixed metaphors, shifting tone, varied styling, or competing focal points."
                },
                {
                    text: "What could become a repeatable rule across similar pieces?",
                    hint: "Think about templates, style guides, component libraries, or design patterns worth systematizing."
                },
                {
                    text: "What's the weakest visual element that we could strengthen or cut?",
                    hint: "Think about unnecessary decoration, unclear icons, weak imagery, or elements that don't earn their space."
                }
            ],
            focus: ["Consistency", "Hierarchy", "Polish"]
        },
        product: {
            questions: [
                {
                    text: "Where could the user flow break down under real-world conditions?",
                    hint: "Think about slow networks, old devices, interruptions, missing data, users skipping steps, or multitasking."
                },
                {
                    text: "What interaction pattern should become a rule across the product?",
                    hint: "Think about button behaviors, navigation patterns, feedback messages, error states, or confirmation flows."
                },
                {
                    text: "What edge case haven't we designed for yet?",
                    hint: "Think about empty states, maximum limits, offline mode, data conflicts, or unusual user behaviors."
                },
                {
                    text: "What would make this harder to maintain in 6 months?",
                    hint: "Think about code complexity, dependency updates, design system drift, documentation gaps, or technical debt."
                },
                {
                    text: "What micro-interaction could elevate the whole experience?",
                    hint: "Think about loading states, hover effects, transitions, animations, confirmations, or delightful details."
                }
            ],
            focus: ["Robustness", "Consistency", "Maintainability"]
        },
        service: {
            questions: [
                {
                    text: "Where might participants get confused or stuck?",
                    hint: "Think about unclear instructions, missing context, assumed knowledge, ambiguous next steps, or decision paralysis."
                },
                {
                    text: "What ritual or touchpoint could we strengthen to improve the experience?",
                    hint: "Think about welcome moments, progress celebrations, check-ins, transitions, or closing rituals."
                },
                {
                    text: "What feedback loop would tell us if this is working?",
                    hint: "Think about participant satisfaction, completion rates, quality of outcomes, or observable behavior changes."
                },
                {
                    text: "What edge case haven't we planned for?",
                    hint: "Think about late arrivals, early departures, language barriers, accessibility needs, or disruptive participants."
                },
                {
                    text: "What happens when someone opts out or drops off midway?",
                    hint: "Think about graceful exits, re-entry points, partial completion value, or support for those who leave."
                }
            ],
            focus: ["Clarity", "Feedback", "Resilience"]
        },
        strategic: {
            questions: [
                {
                    text: "Where could power imbalances show up in this design?",
                    hint: "Think about who speaks, who decides, whose knowledge counts, who benefits, or who bears costs."
                },
                {
                    text: "What feedback loops ensure accountability to the communities we serve?",
                    hint: "Think about community oversight, transparent reporting, grievance mechanisms, or participatory evaluation."
                },
                {
                    text: "What could break if we scale this to new contexts?",
                    hint: "Think about cultural assumptions, resource requirements, infrastructure dependencies, or contextual knowledge."
                },
                {
                    text: "What's the maintenance cost in 3 years? Who owns it when we leave?",
                    hint: "Think about ongoing resources needed, capacity building required, handoff plans, or sustainability models."
                },
                {
                    text: "What assumptions are baked in that we should make explicit?",
                    hint: "Think about unstated theories of change, implicit biases, hidden prerequisites, or taken-for-granted conditions."
                }
            ],
            focus: ["Accountability", "Scalability", "Sustainability"]
        },
        policy: {
            questions: [
                {
                    text: "Where might implementation break down at the local level?",
                    hint: "Think about capacity constraints, competing priorities, resource gaps, cultural fit, or bureaucratic friction."
                },
                {
                    text: "What feedback mechanisms ensure this stays accountable to communities?",
                    hint: "Think about community reporting, participatory monitoring, grievance systems, or transparent evaluation."
                },
                {
                    text: "What happens when political priorities shift?",
                    hint: "Think about changes in leadership, budget cuts, mandate shifts, or loss of political will."
                },
                {
                    text: "What's required to maintain this in 5 years?",
                    hint: "Think about funding streams, staffing needs, technical infrastructure, political support, or community buy-in."
                },
                {
                    text: "What unintended consequences haven't we considered?",
                    hint: "Think about perverse incentives, displacement effects, burden shifting, or who might be harmed."
                }
            ],
            focus: ["Implementation", "Accountability", "Adaptation"]
        }
    },
    sharpen: {
        comms: {
            questions: [
                {
                    text: "If we had one more day, what would we polish?",
                    hint: "Think about type details, alignment, color balance, image quality, or copy tightening."
                },
                {
                    text: "What tweak could elevate the whole piece?",
                    hint: "Think about a bolder headline, stronger opening image, clearer hierarchy, or one surprising detail."
                },
                {
                    text: "What can we remove to make this clearer?",
                    hint: "Think about redundant text, decorative elements, competing focal points, or unnecessary complexity."
                },
                {
                    text: "What detail might annoy us months from now?",
                    hint: "Think about trendy styling, inside jokes, time-specific references, or elements that won't age well."
                },
                {
                    text: "What's the one thing that would make this feel 'done'?",
                    hint: "Think about the finishing touch, final polish, or small detail that signals completeness and care."
                }
            ],
            focus: ["Clarity", "Refinement", "Completeness"]
        },
        product: {
            questions: [
                {
                    text: "What edge case could cause confusion or errors?",
                    hint: "Think about boundary conditions, data validation, error handling, race conditions, or unusual input."
                },
                {
                    text: "What micro-copy needs one more pass?",
                    hint: "Think about button labels, error messages, empty states, tooltips, or confirmation text."
                },
                {
                    text: "What interaction feels slightly off and needs tuning?",
                    hint: "Think about timing, easing, feedback, affordances, or moments that feel clunky or delayed."
                },
                {
                    text: "What would break under real-world stress (slow network, old device)?",
                    hint: "Think about performance degradation, timeout handling, progressive enhancement, or graceful degradation."
                },
                {
                    text: "What's the smallest change that would have the biggest impact?",
                    hint: "Think about one word, one color, one interaction, or one piece of feedback that transforms the experience."
                }
            ],
            focus: ["Polish", "Robustness", "Details"]
        },
        service: {
            questions: [
                {
                    text: "What instruction or prompt needs to be clearer?",
                    hint: "Think about ambiguous language, assumed knowledge, missing context, or steps that confuse participants."
                },
                {
                    text: "What handoff between steps could be smoother?",
                    hint: "Think about transitions, signposting, orientation, or moments where people feel lost or uncertain."
                },
                {
                    text: "What detail would make this feel more complete?",
                    hint: "Think about welcome materials, closing rituals, follow-up support, or thoughtful touches that signal care."
                },
                {
                    text: "What edge case haven't we documented?",
                    hint: "Think about troubleshooting scenarios, alternative pathways, accommodation options, or backup plans."
                },
                {
                    text: "What's the smallest change that would improve the experience most?",
                    hint: "Think about one clearer instruction, one warmer welcome, one moment of acknowledgment, or one friction point removed."
                }
            ],
            focus: ["Clarity", "Smoothness", "Completeness"]
        },
        strategic: {
            questions: [
                {
                    text: "What edge case could break this when it scales?",
                    hint: "Think about resource constraints, cultural differences, infrastructure gaps, or assumptions that don't transfer."
                },
                {
                    text: "What assumptions are baked into the final version that we should document?",
                    hint: "Think about preconditions, dependencies, context requirements, or things that must be true for this to work."
                },
                {
                    text: "What handoff or documentation will future-us need?",
                    hint: "Think about decision rationale, lessons learned, implementation guides, or context that will be forgotten."
                },
                {
                    text: "What could we remove to make the core idea clearer?",
                    hint: "Think about scope creep, nice-to-haves, complexity that obscures the main point, or distracting details."
                },
                {
                    text: "What detail will matter more than we think 6 months from now?",
                    hint: "Think about small decisions with big implications, details that enable adaptation, or foundations for future work."
                }
            ],
            focus: ["Documentation", "Clarity", "Handoff"]
        },
        policy: {
            questions: [
                {
                    text: "What implementation detail needs more clarity?",
                    hint: "Think about roles and responsibilities, timelines, resource allocation, decision-making processes, or reporting requirements."
                },
                {
                    text: "What documentation will implementers need that we haven't created?",
                    hint: "Think about step-by-step guides, troubleshooting resources, FAQs, case studies, or adaptation frameworks."
                },
                {
                    text: "What edge case in enforcement or compliance haven't we addressed?",
                    hint: "Think about boundary situations, conflicts of interest, appeal processes, or scenarios the policy doesn't clearly cover."
                },
                {
                    text: "What would make this easier to explain to communities?",
                    hint: "Think about plain language summaries, visual aids, examples, FAQs, or community-facing materials."
                },
                {
                    text: "What monitoring or reporting mechanism is missing?",
                    hint: "Think about accountability measures, progress indicators, feedback channels, or evaluation frameworks."
                }
            ],
            focus: ["Clarity", "Implementation", "Communication"]
        }
    }
};
