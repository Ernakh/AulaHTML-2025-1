var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// JavaScript
function somaJS(a, b) {
    return a + b;
}
// TypeScript
function somaTS(a, b) {
    return a + b;
}
const n1 = document.getElementById("num1");
const n2 = document.getElementById("num2");
const btn = document.getElementById("somar");
const res = document.getElementById("resultado");
btn.addEventListener("click", () => {
    const soma = Number(n1.value) + Number(n2.value);
    res.textContent = `Resultado: ${soma}`;
});
const seletor = document.getElementById("cores");
seletor.addEventListener("change", () => {
    document.body.style.backgroundColor = seletor.value;
});
let contador = 0;
const span = document.getElementById("contador");
const mais = document.getElementById("mais");
const menos = document.getElementById("menos");
mais.onclick = () => {
    contador++;
    span.textContent = contador.toString();
};
menos.onclick = () => {
    contador--;
    span.textContent = contador.toString();
};
const emailInput = document.getElementById("email");
const enviarBtn = document.getElementById("enviar");
const feedback = document.getElementById("feedback");
enviarBtn.addEventListener("click", () => {
    const email = emailInput.value;
    if (email.includes("@")) {
        feedback.textContent = "Email válido!";
        feedback.style.color = "green";
    }
    else {
        feedback.textContent = "Email inválido!";
        feedback.style.color = "red";
    }
});
const btnCarregar = document.getElementById("carregar");
const lista = document.getElementById("lista-posts");
btnCarregar.addEventListener("click", () => __awaiter(this, void 0, void 0, function* () {
    lista.innerHTML = "<li>Carregando...</li>";
    try {
        const resposta = yield fetch("https://jsonplaceholder.typicode.com/posts");
        const posts = yield resposta.json();
        lista.innerHTML = ""; // limpa "Carregando..."
        posts.slice(0, 10).forEach((post) => {
            const item = document.createElement("li");
            item.textContent = `${post.id}. ${post.title}`;
            lista.appendChild(item);
        });
    }
    catch (erro) {
        lista.innerHTML = "<li>Erro ao carregar posts.</li>";
        console.error(erro);
    }
}));
