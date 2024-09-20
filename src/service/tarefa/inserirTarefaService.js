import { inserirTarefa } from "../../repository/tarefaRepository.js";

export default async function inserirTarefaService(tarefa){

    let id = await inserirTarefa(tarefa);

    return id;
    
}