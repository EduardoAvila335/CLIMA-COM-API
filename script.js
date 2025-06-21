const apiKey = '86d28869ddcae802bc0fbe12d18f9cfb';



async function getClima(){
    let input = document.getElementById('input').value.trim();
    let div = document.getElementById('div');


    if(!input){
        div.style.color = 'red';
        div.innerHTML = '<p>Escolha alguma cidade</p>';
        return;
    }

    try{
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${apiKey}&lang=pt_br&units=metric`;

        const resposta = await fetch(url);
        
        if(!resposta.ok){
            throw new Error('Cidade não encontrada');
        };

        const dados = await resposta.json();
        div.style.color = 'black';
        div.innerHTML = `<p>🌆CIDADE: ${dados.name}</p>
                         <p>⛅CLIMA: ${dados.weather[0].description}</p>
                         <p>🌡TEMPERATURA: ${dados.main.temp}</p>`
    }catch(e){
        div.style.color = 'red';
        div.innerHTML = `<p>Erro: ${e.message}</p>`;
    }

}