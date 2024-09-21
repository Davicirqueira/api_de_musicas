import { consultarMusicaPorID } from "../../repository/musicaRepository.js";
import { validarMusicaUnica } from "../../validation/musica/musicaValidation.js";

export default async function consultarMusicaPorIDService(id){

    let registros = await consultarMusicaPorID(id);

    validarMusicaUnica(registros);

    let musica = registros[0]

    return musica;

}