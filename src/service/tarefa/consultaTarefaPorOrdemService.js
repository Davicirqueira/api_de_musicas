import { consultarTarefaPorOrdem } from "../../repository/tarefaRepository.js";

export default async function consultarTarefaPorOrdemService(ordem){

    let registro = await consultarTarefaPorOrdem(ordem);

    let tarefa = registro[0]

    return tarefa;

}