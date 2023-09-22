const highScoresList = document.getElementById("highScoresList");
const user = localStorage.getItem("user");
const pwd = localStorage.getItem("pwd");

highScoresList.innerHTML = `<li class="high-score">Usuário: ${user}</li>`;
const li = document.createElement('li')
highScoresList.appendChild(li)
li.innerHTML = `Senha: ${pwd}`
li.classList.add('high-score')