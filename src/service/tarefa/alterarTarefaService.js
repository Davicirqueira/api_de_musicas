import { alterarTarefa } from "../../repository/tarefaRepository.js";

export default async function alterarTarefaService(tarefa, id){

    let linhasAfetadas = await alterarTarefa(tarefa, id)

    if(linhasAfetadas == 0){

        throw new Error('Nenhuma tarefa alterada.')

    }
     
}