function escreveMateria() {
    var materia = document.getElementById('txtMateria').value;
    var txtNota = document.getElementById('txtNota');
    var nota = txtNota.value;
    if(nota === '' || materia === '') {
        alert('Preencha todos os campos!');
        txtNota.focus();
        return
    }

    if(nota > 10 || nota < 0) {
        alert('A nota deve ser entre 0 e 10.');
        txtNota.value = '';
        txtNota.focus();
        return
    }

    var resultado = classificaNota(nota, materia);
    document.querySelector('#resultados').innerHTML += resultado;
};

function classificaNota(nota, materia) {
    var classificacao = ""
    var classResultado = ""
    if(nota >= 6) {
        classificacao = 'Parabéns! Você foi aprovado.'
        classResultado = "verde"
    } else if(nota > 4) {
        classificacao =  'Você está de recuperação.'
        classResultado = "amarelo"
    } else {
        classificacao = 'Você foi reprovado.'
        classResultado = "vermelho"
    }
    return `<div class="mostra_resultado ${classResultado}">Matéria: ${materia}<br>Nota: ${nota}<br>Classificação: ${classificacao}</div>`
};