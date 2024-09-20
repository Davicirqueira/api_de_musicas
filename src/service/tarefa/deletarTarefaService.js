import { deletarTarefa } from "../../repository/tarefaRepository.js";

export default async function deletarTarefaService(id){

    let linhasAfetadas = await deletarTarefa(id)

    if(linhasAfetadas == 0){

        throw new Error('Nenhuma tarefa removida.')

    }
     
}