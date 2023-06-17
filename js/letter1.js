const validationResult = document.getElementById("validationResult");
document.getElementById("button-validate").addEventListener("click", validateString) //onclick button
document.getElementById("button-simulate").addEventListener("click", simulation) //onclick button

var number1 = new DFA();

function selectRegex(){
  if(document.getElementById('regex').value == "letter1") {
    document.getElementsByClassName("container3")[0].style.display = "none"
    document.getElementsByClassName("container2")[0].style.display = "block"
    document.getElementById("inputString").placeholder="e.g. abababa"
    
    

    number1 = new DFA(
                  ["a", "b"],
                  ['q0', 'q1', 'q2', 'q3', 'q4', 'q5', 'q6', 'q7','q8','qt','q9'],
                  "q0",
                  ["q9"],
                  {
                    "q0.a":"q1", "q0.b":"q2",
                    "q1.a":"qt", "q1.b":"q3",
                    "q2.a":"q4", "q2.b":"qt",
                    "q3.a":"q5", "q3.b":"qt",
                    "q4.a":"qt", "q4.b":"q5",
                    "q5.a":"q5", "q5.b":"q6",
                    "q6.a":"q7", "q6.b":"q6",
                    "q7.a":"q5", "q7.b":"q8",
                    "q8.a":"q9", "q8.b":"q9",
                    "q9.a":"q9", "q9.b":"q9",
                    "qt.a":"qt", "qt.b":"qt",
                  } 
  )
  console.log("Letter1 SELECTED");
  }else if(document.getElementById('regex').value == "number1"){
    document.getElementsByClassName("container3")[0].style.display = "block"
    document.getElementsByClassName("container2")[0].style.display = "none"
    document.getElementById("inputString").placeholder="e.g. 10101011"
    number1 = new DFA(
                    ["0", "1"],
                    ['q0', 'q1', 'q2', 'q3', 'q4', 'q5', 'q6', 'q7'],
                    "q0",
                    ["q7"],
                    {
                      "q0.0":"q1", "q0.1":"q1",
                      "q1.0":"q2", "q1.1":"q3",
                      "q2.0":"q4", "q2.1":"q3",
                      "q3.0":"q5", "q3.1":"q6",
                      "q4.0":"q7", "q4.1":"q3",
                      "q5.0":"q4", "q5.1":"q7",
                      "q6.0":"q5", "q6.1":"q7",
                      "q7.0":"q7", "q7.1":"q7",
                    } 
    )
    console.log("Number1 SELECTED");
  }else{
    document.getElementsByClassName("container3")[0].style.display = "none"
    document.getElementsByClassName("container2")[0].style.display = "none"
  }
  
}


function validateString() {
  var userInput = document.getElementById("inputString").value;
  var result = number1.execute(userInput);  //validating
  validatestyle(result);
}

function validatestyle(result) {
    validationResult.innerText = "";
    validationResult.className = "";
  if (result) {
    validationResult.innerText = "String is valid!";
    validationResult.className = "valid";
  } else {
    validationResult.innerText = "String is not valid!";
    validationResult.className = "invalid";
  }
}

async function simulation() {
  var userInput = document.getElementById("inputString").value;
  var result = number1.execute(userInput);  //validating
  var state;
  for (let index = 0; index < number1.path.length; index++) {
    if(document.getElementById('regex').value == "letter1") {
      state = "letter " + number1.path[index];
    }else if(document.getElementById('regex').value == "number1"){
      state = "number " + number1.path[index];
    }
    let current_state = document.getElementById(state)
    if (number1.path.length-1 === index){
      if (!result){
        current_state.classList.add("invalid_state")
        await sleep(1000)
        current_state.classList.remove("invalid_state")
        await sleep(500)
      } else {
        current_state.classList.add("valid_state")
        await sleep(1000)
        current_state.classList.remove("valid_state")
        await sleep(500)
      }} else {
        current_state.classList.add("valid_state")
        await sleep(1000)
        current_state.classList.remove("valid_state")
        await sleep(500)
      }
  }
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function clearInput(){
  var getValue= document.getElementById("inputString");
    if (getValue.value !="") {
        getValue.value = "";
        validationResult.innerText = "";
        validationResult.className = "";
    }
}