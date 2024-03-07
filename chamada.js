let chamadaDeAlunos = [
    {
        nome: "Kayky",
        idade: 16,
        materias: [
            {
                nome: "Tecnologias em Inteligência Artificial",
                presenca: 75,
                nota: 10
            },
            {
                nome: "Programação para Dispositivos Móveis",
                presenca: 90,
                nota: 10
            },
        ],
        numeroChamada: 1221
    },
    {
        nome: "Ana",
        idade: 17,
        materias: [
            {
                nome: "BD1",
                presenca: 100,
                nota: 10
            },
            {
                nome: "Programação para Dispositivos Móveis",
                presenca: 90,
                nota: 7.5
            },
        ],
        numeroChamada: 1222
    },
    {
        nome: "Matheus",
        idade: 20,
        materias: [
            {
                nome: "Tecnologias em Inteligência Artificial",
                presenca: 79,
                nota: 8.5
            },
            {
                nome: "Programação para Dispositivos Móveis",
                presenca: 60,
                nota: 6.5
            },
        ],
        numeroChamada: 1223
    },
    {
        nome: "Jorge",
        idade: 19,
        materias: [
            {
                nome: "Tecnologias em Inteligência Artificial",
                presenca: 100,
                nota: 10
            },
            {
                nome: "Programação para Dispositivos Móveis",
                presenca: 79,
                nota: 10
            },
        ],
        numeroChamada: 1224
    },
    {
        nome: "Richard",
        idade: 18,
        materias: [
            {
                nome: "BD2",
                presenca: 74,
                nota: 10
            },
            {
                nome: "BD1",
                presenca: 90,
                nota: 7
            },
        ],
        numeroChamada: 1225
    },
]

// Fun~ção para mostrar o nome e as notas de todos os alunos
function mostrarNomeNota(chamadaDeAlunos){
    chamadaDeAlunos.forEach(chamadaDeAlunos => { // Percorre todo o array e mostra os nomes e notas
        console.log("Nome: " + chamadaDeAlunos.nome)
        console.log("Nota 1: " + chamadaDeAlunos.materias[0].nota)
        console.log("Nota 2: " + chamadaDeAlunos.materias[1].nota)
    });
    
}
mostrarNomeNota(chamadaDeAlunos)

console.log("------------------------------------")

// Função de aprovados que irá ver os alunos que tem nota maior que 6 e presença de matérias maior que 75
function aprovadosReprovados(chamadaDeAlunos){
    for (let i = 0; i < chamadaDeAlunos.length; i++) {
        if(chamadaDeAlunos.nota <= 6 && chamadaDeAlunos.presenca <= 75){
            console.log(chamadaDeAlunos[i].nome + " Passou")
        }
        console.log(chamadaDeAlunos[i].nome + " Não Passou")
    }
    
}
aprovadosReprovados(chamadaDeAlunos)

console.log("------------------------------------")

// Função que mostra os alunos com menor nota
function menorNota(chamadaDeAlunos){
    chamadaDeAlunos.forEach(chamadaDeAlunos => {
        console.log("Nota: " + chamadaDeAlunos.materias.Math.min(nota))
    })
}
menorNota(chamadaDeAlunos)


// Função que mostra os alunos com maior nota
function maiorNota(chamadaDeAlunos){
    chamadaDeAlunos.forEach(chamadaDeAlunos => {
        console.log("Nota: " + chamadaDeAlunos.materias.Math.max(nota))
    })
}
maiorNota(chamadaDeAlunos)
