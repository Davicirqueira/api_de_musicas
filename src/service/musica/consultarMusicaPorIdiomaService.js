import { consultarMusicaPorIdioma } from "../../repository/musicaRepository.js";
import { validarMusicaUnica } from "../../validation/musica/musicaValidation.js";

export default async function consultarMusicaPorIdiomaService(idioma){

    let registros = await consultarMusicaPorIdioma(idioma);

    validarMusicaUnica(registros);

    if(registros.length > 1){

        return registros;

    }

    let musica = registros[0]

    return musica;

}

