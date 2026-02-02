
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
    listItem.className = "decision-item";

    //text
   const text = document.createElement("span");
    text.textContent = decision;
    //transfer aria attributes for accessibility
    listItem.setAttribute("role", "listitem");
    
    //trash icon for delete 
    const trashIcon = document.createElement("i");
    trashIcon.className = "fa-solid fa-trash";
    trashIcon.setAttribute("aria-label", "Delete decision");
     
    listItem.appendChild(text);
    listItem.appendChild(trashIcon);
    list.appendChild(listItem);
  });
}

export function clearInput() {
    const input = document.getElementById("decision-input");
    input.value = "";
}


