
// JavaScript
function somaJS(a, b) 
{
    return a + b;
}

// TypeScript
function somaTS(a: number, b: number): number 
{
    return a + b;
}

const n1 = document.getElementById("num1") as HTMLInputElement;
const n2 = document.getElementById("num2") as HTMLInputElement;
const btn = document.getElementById("somar")!;
const res = document.getElementById("resultado")!;

btn.addEventListener("click", () => {
  const soma = Number(n1.value) + Number(n2.value);
  res.textContent = `Resultado: ${soma}`;
});

const seletor = document.getElementById("cores") as HTMLSelectElement;

seletor.addEventListener("change", () => {
  document.body.style.backgroundColor = seletor.value;
});


let contador = 0;
const span = document.getElementById("contador")!;
const mais = document.getElementById("mais")!;
const menos = document.getElementById("menos")!;

mais.onclick = () => {
  contador++;
  span.textContent = contador.toString();
};

menos.onclick = () => {
  contador--;
  span.textContent = contador.toString();
};

const emailInput = document.getElementById("email") as HTMLInputElement;
const enviarBtn = document.getElementById("enviar")!;
const feedback = document.getElementById("feedback")!;

enviarBtn.addEventListener("click", () => {
  const email = emailInput.value;
  if (email.includes("@")) {
    feedback.textContent = "Email válido!";
    feedback.style.color = "green";
  } else {
    feedback.textContent = "Email inválido!";
    feedback.style.color = "red";
  }
});


const btnCarregar = document.getElementById("carregar")!;
const lista = document.getElementById("lista-posts")!;

btnCarregar.addEventListener("click", async () => {
  lista.innerHTML = "<li>Carregando...</li>";

  try {
    const resposta = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await resposta.json();

    lista.innerHTML = ""; // limpa "Carregando..."
    posts.slice(0, 10).forEach((post: any) => {
      const item = document.createElement("li");
      item.textContent = `${post.id}. ${post.title}`;
      lista.appendChild(item);
    });
  } catch (erro) {
    lista.innerHTML = "<li>Erro ao carregar posts.</li>";
    console.error(erro);
  }
});



