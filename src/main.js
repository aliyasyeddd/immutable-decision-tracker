import { createInitialState, addDecision, getDecisions } from "./state/decisionState.js";
import { renderDecisions, clearInput } from "./ui/renderDecisions.js";
import { bindEventListeners } from "./handlers/decisionHandler.js";

// Main application logic
// Manages state and coordinates between UI and event handlers

let state

function initApp() {
    // Load decisions from localStorage
    const savedDecisions = JSON.parse(localStorage.getItem("decisions")) || [];

    state = createInitialState();

    if (savedDecisions && savedDecisions.length > 0) {
        // Only add decisions if localStorage has something
        savedDecisions.forEach(decision => {
            state = addDecision(state, decision);
        });
    }
    
    renderDecisions(getDecisions(state));
    bindEventListeners(handleAddDecision);
}

function handleAddDecision(decision) {
    state = addDecision(state, decision);

    // Save updated decisions to localStorage
    const plainDecisions = getDecisions(state).toJS(); // Convert Immutable List to array
    localStorage.setItem("decisions", JSON.stringify(plainDecisions));

    renderDecisions(getDecisions(state));
    clearInput();
}

// Initialize the app immediately when the module loads
initApp();