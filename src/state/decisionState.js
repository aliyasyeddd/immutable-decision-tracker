import { Map, List } from "immutable";

// This file manages the state of decisions using Immutable.js

//Map function to create the initial state
//A protected object that never mutates
//list to hold decisions
//Immutable version of an array
//You cannot push directly
//Methods like .push() return a new List

export function createInitialState() {
  return Map({
    decisions: List(),
  });
}


//update function to add a decision to the state
export function addDecision(state, decision) {
  return state.update("decisions", (list) => list.push(decision));
}


//get function to retrieve decisions from the state
export function getDecisions(state) {
  return state.get("decisions");
}

//remove function to delete a decision from the state
//removes item at that index
export function removeDecision(state, index) {
  return state.update("decisions", list => list.delete(index));
}







