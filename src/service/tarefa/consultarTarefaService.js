import { consultarTarefa } from "../../repository/tarefaRepository.js";

export default async function consultarTarefaService(){

    let registros = await consultarTarefa();

    return registros;
    
}