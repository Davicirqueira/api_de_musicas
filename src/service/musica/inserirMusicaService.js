import { inserirMusica } from '../../repository/musicaRepository.js';
import { validarCamposObrigatoriosMusica } from '../../validation/musica/musicaValidation.js';

export default async function inserirMusicaService(musica){

    validarCamposObrigatoriosMusica(musica)

    let id = await inserirMusica(musica);

    return id;

}