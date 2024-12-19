const questions = [{
    'que': 'What is HTML?',
    'a': 'Programming Language',
    'b': 'idk',
    'c': 'hehe',
    'd': 'none of the above',
    'correct': 'a'
},
{
    'que': 'Where are you?',
    'a': 'Home',
    'b': 'Office',
    'c': 'College',
    'd': 'Office toh ha hi nhi',
    'correct': 'd'
}
];

let index = 0;
let total = questions.length
let right = 0, wrong = 0;
let quesBox = document.getElementById('quesBox');
let optionInputs = document.querySelectorAll('.options');

let loadQuestions = () => {
    if (index == total) {
        return endQuiz()
    } 
    reset()
    let data = questions[index];
    quesBox.innerText = `${index + 1}) ${data.que}`;
    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;
};

let submitQuiz = () => {
    let data = questions[index];
    let ans = getAnswer();
    if (ans == data.correct) {
        right++;
    } else {
        wrong++;
    }
    index++,
        loadQuestions();
    return;
}

let getAnswer = () => {
    let answer
    optionInputs.forEach((input) => {
        if(input.checked){
            answer = input.value
        }
    })
    return answer;
}

let reset = () => {
    optionInputs.forEach((input) => {
        input.checked = false;
    });
}

let endQuiz = () => {
    document.getElementById("box").innerHTML=`
    <div style="text-align:center">
      <h3>Thanks for playing the quiz</h3>
      <h2>${right}/${total} are correct</h2>
    </div>`
    
}

loadQuestions()