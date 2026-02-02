import { createInitialState, addDecision, getDecisions, removeDecision } from "./state/decisionState.js";
import { renderDecisions, clearInput } from "./ui/renderDecisions.js";
import { bindEventListeners, bindDeleteDecision } from "./handlers/decisionHandler.js";

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
    bindDeleteDecision(handleDeleteDecision);
}

function handleAddDecision(decision) {
    state = addDecision(state, decision);

    // Save updated decisions to localStorage
    const plainDecisions = getDecisions(state).toJS(); // Convert Immutable List to array
    localStorage.setItem("decisions", JSON.stringify(plainDecisions));

    renderDecisions(getDecisions(state));
    clearInput();
}

function handleDeleteDecision(index) {
    state = removeDecision(state, index);

    // Update localStorage
    const plainDecisions = getDecisions(state).toJS();
    localStorage.setItem("decisions", JSON.stringify(plainDecisions));

    renderDecisions(getDecisions(state));
}


// Initialize the app immediately when the module loads
initApp();