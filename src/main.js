import { createInitialState, addDecision, getDecisions } from "./state/decisionState.js";
import { renderDecisions, clearInput } from "./ui/renderDecisions.js";
import { bindEventListeners } from "./handlers/decisionHandler.js";

// Main application logic
// Manages state and coordinates between UI and event handlers

let state 

function initApp() {
    state = createInitialState();
    renderDecisions(getDecisions(state));
    bindEventListeners(handleAddDecision);
}

function handleAddDecision(decision) {
    state = addDecision(state, decision);
    renderDecisions(getDecisions(state));
    clearInput();
}

// Initialize the app immediately when the module loads
initApp();