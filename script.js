// Constantes que acessam elementos do HTML.
const main = document.querySelector('main');
const root = document.querySelector(':root');
const input = document.getElementById('input');
const resultInput = document.getElementById('result');

//Constante para as teclas que serão utilizadas, permitidas.
const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "];

document.querySelectorAll('.charKey').forEach((charKeyBtn)=>{
    charKeyBtn.addEventListener('click', ()=>{
        const value = charKeyBtn.dataset.value;
        input.value += value; //concatena com o que já foi digitado
    })
})

document.getElementById('clear').addEventListener('click', ()=>{
    input.value = '';
    resultInput.value = '';
})


const calculate = ()=>{
    resultInput.value = 'ERROR';
    resultInput.classList.add('error');
    const result = eval(input.value);
    resultInput.value = result;
    resultInput.classList.remove("error")
}

document.getElementById('equal').addEventListener('click', calculate)

input.addEventListener('keydown', (ev)=>{
    ev.preventDefault();
    if(allowedKeys.includes(ev.key)){
        input.value += ev.key;
        return;
    }
    if(ev.key === 'Backspace'){
        input.value = input.value.slice(0, -1); //para apagar o último elemento, partindo do início
    }
    if(ev.key === 'Enter'){
        calculate();
    }
})

document.getElementById("copyToClipboard").addEventListener("click", function (ev) {
    const button = ev.currentTarget
    if (button.innerText === "Copy") {
      button.innerText = "Copied!"
      button.classList.add("success")
      navigator.clipboard.writeText(resultInput.value)
    } else {
      button.innerText = "Copy"
      button.classList.remove("success")
    }
  })
  

document.getElementById('themeSwitcher').addEventListener('click', ()=>{
    if(main.dataset.theme === 'dark'){
        root.style.setProperty('--bg-color', '#f1f5f9');
        root.style.setProperty('--border-color', '#aaa');
        root.style.setProperty('--font-color', "#212529");
        root.style.setProperty('--primary-color', '#8A2BE2')
        main.dataset.theme = 'light'
    } else{
        root.style.setProperty("--bg-color", "#212529")
        root.style.setProperty("--border-color", "#666")
        root.style.setProperty("--font-color", "#f1f5f9")
        root.style.setProperty("--primary-color", "#e8b432")
        main.dataset.theme = "dark"
    }
})