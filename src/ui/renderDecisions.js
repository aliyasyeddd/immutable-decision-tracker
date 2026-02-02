
// This file handles rendering the decisions to the UI

export function renderDecisions(decisions) {
  const list = document.getElementById("decision-list");
  list.innerHTML = "";
  
  // Convert Immutable.js collection to plain JS using toJS()
  const items = typeof decisions?.toJS === 'function' ? decisions.toJS() : decisions;


  if (!items || items.length === 0) {
    document.getElementById("no-decisions").style.display = "block";
    return;
  }

  document.getElementById("no-decisions").style.display = "none";

  items.forEach((decision) => {
    const listItem = document.createElement("li");
    listItem.textContent = decision;
    list.appendChild(listItem);
  });
}

export function clearInput() {
    const input = document.getElementById("decision-input");
    input.value = "";
}


