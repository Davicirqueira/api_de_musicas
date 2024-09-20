import { consultarTarefaPorOrdem } from "../../repository/tarefaRepository.js";
import { validarTarefaUnica } from "../../validation/tarefa/validarTarefaUnica.js";

export default async function consultarTarefaPorOrdemService(ordem){

    let registros = await consultarTarefaPorOrdem(ordem);

    validarTarefaUnica(registros)

    let tarefa = registros[0]

    return tarefa;

}