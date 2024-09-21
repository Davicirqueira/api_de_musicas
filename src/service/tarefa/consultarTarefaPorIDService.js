import { consultarTarefaPorID } from "../../repository/tarefaRepository.js";
import { validarTarefaUnica } from "../../validation/tarefa/tarefaValidation.js";

export default async function consultarTarefaPorIDService(id){

    let registros = await consultarTarefaPorID(id);

    validarTarefaUnica(registros)

    let tarefa = registros[0];

    return tarefa;

}