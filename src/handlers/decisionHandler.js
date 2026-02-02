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

//delete decision event listener
export function bindDeleteDecision(onDeleteDecision) {
  const list = document.getElementById("decision-list");

  list.addEventListener("click", (e) => {
    if (!e.target.classList.contains("fa-trash")) return;

    const listItem = e.target.closest("li");
    if (!listItem) return;

    const index = Array.from(list.children).indexOf(listItem);
    if (index === -1) return;

    onDeleteDecision(index);
  });
}
