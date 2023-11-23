const chaveDaApi = "86344097713047aaadc230326232211"; // em projetos reais, geralmente a chave fica criptografada.

const botaoDeBusca = document.querySelector(".btn-busca");

console.log(botaoDeBusca);

botaoDeBusca.addEventListener("click", async () => {
    const cidade = document.getElementById("input-busca").value;

    if (!cidade) return;

    const dados = await buscarDadosDaCidade(cidade);



    if (dados) preencherDadosNaTela(dados, cidade);

});

async function buscarDadosDaCidade(cidade) {
    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${chaveDaApi}&q=${cidade}&aqi=no&lang=pt`;

    const resposta = await fetch(apiUrl);

    if (resposta.status !== 200) return;

    const dados = resposta.json();

    return dados;
}

function preencherDadosNaTela(dados, cidade) {
    const temperatura = dados.current.temp_c;
    const condicao = dados.current.condition.text;
    const umidade = dados.current.humidity;
    const velocidadeDoVento = dados.current.wind_kph;
    const iconCondicao = dados.current.condition.icon;


    document.getElementById("cidade").textContent = cidade;

    document.getElementById("temperatura").textContent = `${temperatura} ºC`;

    document.getElementById("condicao").textContent = `${condicao}`;

    document.getElementById("umidade").textContent = `${umidade}%`;

    document.getElementById("velocidade-do-vento").textContent = `${velocidadeDoVento} km/h`;

    document.getElementById("icone-condicao").setAttribute("src", `https:${iconCondicao}`);

}   
