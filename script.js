const barbearia = {
    cortes: [
        { id: 1, tipo: "Militar", valor: 20 },
        { id: 2, tipo: "Samurai", valor: 35 },
        { id: 3, tipo: "Pompadour", valor: 20 },
        { id: 4, tipo: "Moicano", valor: 10 },
        { id: 5, tipo: "Razor part", valor: 5 },
    ],
  
    barbas: [
        { id: 1, tipo: "Capitão Jack", valor: 20 },
        { id: 2, tipo: "Van Dyke", valor: 20 },
        { id: 3, tipo: "Barba Média", valor: 20 },
        { id: 4, tipo: "Barba Baixa", valor: 20 },
        { id: 5, tipo: "Barba Zero", valor: 15 },
    ],
    estaAberto: true,
};
    
function buscaCortePorId(id) {
    for (let corte of barbearia.cortes){
        if (corte.id === id){
            return corte;
        }
    }
    return 'Corte não encontrado';
}

function buscaBarbaPorId(id) {
    for (let barba of barbearia.barbas){
        if(barba.id === id){
            return barba;
        }
    }
    return 'Barba não encontrada';
}

function verificaStatusBarbearia() {
    if (barbearia.estaAberto) {
      return "Estamos abertos";
    } else {
      return "Estamos fechados";
    }
  }

function retornaTodosCortes() {
    return barbearia.cortes;
}

function retornaTodasBarbas() {
    return barbearia.barbas;
}

function criaPedido(nomeCliente, corteId, barbaId) {
    const corte = buscaCortePorId(corteId);
    const barba = buscaBarbaPorId(barbaId);
  
    // Verifica se o corte e a barba foram encontrados
    if (corte === "Corte não encontrado") {
      console.error("Corte não encontrado");
      return;
    }
  
    if (barba === "Barba não encontrada") {
      console.error("Barba não encontrada");
      return;
    }
  
    const pedido = {
      nome: nomeCliente,
      pedidoCorte: corte.tipo,
      pedidoCortePreco: corte.valor,
      pedidoBarba: barba.tipo,
      pedidoBarbaPreco: barba.valor,
    };
  
    return pedido;
  }

function atualizarServico(lista, id, valor, tipo) {
    for (let i = 0; i < lista.length; i++) {
        if (lista[i].id === id) {
            lista[i].tipo = tipo;
            lista[i].valor = valor;
            return lista; // Retorna a lista atualizada após encontrar o serviço com o ID correspondente
        }
    }
    return lista; // Retorna a lista original se o serviço com o ID correspondente não for encontrado
  } 
  
function calculaTotal(pedido) {
    return pedido.pedidoCortePreco + pedido.pedidoBarbaPreco;
}
