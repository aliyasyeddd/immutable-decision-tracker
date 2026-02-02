// Handles the decision form submission and event listeners
export function bindEventListeners(onAddDecision) {
    const form = document.getElementById("decision-form");

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        const input = document.getElementById("decision-input");
        const decision = input.value.trim();

        if (!decision) return;

        onAddDecision(decision);
    });
}
