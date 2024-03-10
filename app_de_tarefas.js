// Passo 1: Estrutura da Classe Tarefa
class Tarefa {
  // Classe Tarefa para criar tarefas
  constructor(descricao) {
    // Método construtor da classe Tarefa
    this.descricao = descricao; // Adicionando descrição da tarefa
    this.completa = false; // Adicionando estado inicial da tarefa
    this.dataCriacao = new Date(); // Adicionando data de criação da tarefa
    this.prioridade = "Média"; // Adicionando prioridade padrão "Média"
  }

  marcarCompleta() {
    // Método para marcar tarefa como completa
    this.completa = true; // Método para marcar tarefa como completa
  }

  editarDescricao(novaDescricao) {
    // Método para editar descrição da tarefa
    this.descricao = novaDescricao; // Método para editar descrição da tarefa
  }

  // Getters para acessar os atributos privados
  get descricaoTarefa() {
    return this.descricao; // Método para acessar descrição da tarefa
  }

  get dataCriacaoTarefa() {
    return this.dataCriacao; // Método para acessar data de criação da tarefa
  }

  get prioridadeTarefa() {
    return this.prioridade; // Método para acessar prioridade da tarefa
  }
}

// Passo 2: Classe Gerenciador de Tarefas
class GerenciadorDeTarefas {
  // Classe GerenciadorDeTarefas para gerenciar tarefas
  constructor() {
    // Método construtor da classe GerenciadorDeTarefas
    this.tarefas = []; // Array para armazenar tarefas
  }

  adicionarTarefa(descricao) {
    // Método para adicionar tarefa
    const tarefa = new Tarefa(descricao); // Criando nova tarefa
    this.tarefas.push(tarefa); // Adicionando tarefa ao array de tarefas
  }

  listarTarefas() {
    // Método para listar tarefas
    this.tarefas.forEach((tarefa, index) => {
      // Iterar sobre tarefas
      console.log( // Imprimir tarefas
        `${index + 1}: ${tarefa.descricaoTarefa} - ${ // Adicionando descrição da tarefa
          tarefa.completa ? "Completa" : "Pendente" // Adicionando estado da tarefa
        } - Criada em: ${tarefa.dataCriacaoTarefa.toLocaleDateString()} - Prioridade: ${ // Adicionando data de criação da tarefa
          tarefa.prioridadeTarefa // Adicionando prioridade da tarefa
        }`
      ); // Adicionando prioridade da tarefa
    });
  }

  listarTarefasCompletas() {
    // Método para listar tarefas completas
    const tarefasCompletas = this.tarefas.filter((tarefa) => tarefa.completa); // Filtrar tarefas completas
    console.log("Tarefas Completas:"); // Imprimir tarefas completas
    tarefasCompletas.forEach((tarefa) => { 
      // Iterar sobre tarefas completas
      console.log( // Imprimir tarefas completas
        `${
          tarefa.descricaoTarefa // Adicionando descrição da tarefa
        } - Criada em: ${tarefa.dataCriacaoTarefa.toLocaleDateString()} - Prioridade: ${ // Adicionando data de criação da tarefa
          tarefa.prioridadeTarefa // Adicionando prioridade da tarefa
        }`
      ); // Adicionando prioridade da tarefa
    });
  }

  listarTarefasPendentes() { 
    // Método para listar tarefas pendentes
    const tarefasPendentes = this.tarefas.filter((tarefa) => !tarefa.completa); // Filtrar tarefas pendentes
    console.log("Tarefas Pendentes:"); // Imprimir tarefas pendentes
    tarefasPendentes.forEach((tarefa) => {
      // Iterar sobre tarefas pendentes
      console.log( 
        `${ // Imprimir tarefas pendentes
          tarefa.descricaoTarefa
        } - Criada em: ${tarefa.dataCriacaoTarefa.toLocaleDateString()} - Prioridade: ${ // Adicionando descrição da tarefa
          tarefa.prioridadeTarefa // Adicionando data de criação da tarefa
        }`
      ); // Adicionando prioridade da tarefa
    });
  }

  removerTarefa(index) {
    // Método para remover tarefa
    this.tarefas.splice(index - 1, 1); // Remover tarefa do array de tarefas
  }

  // Método para listar tarefas por prioridade
  listarTarefasPorPrioridade(prioridade) {
    const tarefasPorPrioridade = this.tarefas.filter(
      (tarefa) => tarefa.prioridadeTarefa === prioridade
    ); // Filtrar tarefas por prioridade
    console.log(`Tarefas com prioridade ${prioridade}:`); // Imprimir tarefas por prioridade
    tarefasPorPrioridade.forEach((tarefa) => {
      // Iterar sobre tarefas por prioridade
      console.log(
        `${
          tarefa.descricaoTarefa
        } - Criada em: ${tarefa.dataCriacaoTarefa.toLocaleDateString()}`
      ); // Adicionando prioridade da tarefa
    });
  }
}

// Exemplo de uso:
let gerenciador = new GerenciadorDeTarefas(); // Criar um novo gerenciador de tarefas

gerenciador.adicionarTarefa("Aprender JavaScript"); // Adicionar tarefas
gerenciador.adicionarTarefa("Praticar codificação"); // Adicionar tarefas
gerenciador.listarTarefas(); // Listar tarefas

gerenciador.tarefas[0].marcarCompleta(); // Marcar tarefa como completa
gerenciador.adicionarTarefa("Estudar CSS"); // Adicionar tarefas
gerenciador.listarTarefas(); // Listar tarefas

gerenciador.listarTarefasCompletas(); // Listar tarefas completas
gerenciador.listarTarefasPendentes(); // Listar tarefas pendentes

gerenciador.removerTarefa(2); // Remover tarefa
gerenciador.listarTarefas(); // Listar tarefas

gerenciador.listarTarefasPorPrioridade("Média"); // Listar tarefas por prioridade "Média"
