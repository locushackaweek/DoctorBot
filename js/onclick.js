//Global variables
var submit;
var selection;
var questions;


window.onload = prepare();

function prepare()
{
    submit = document.getElementById("dc-submit");
    selection = document.getElementById("dc-selection");
    questions = document.getElementById("dc-questions");

    submit.addEventListener("click", askQuestions, false);
}

function askQuestions()
{
    selection.style.display = "none";
    questions.style.display = "block";
}
