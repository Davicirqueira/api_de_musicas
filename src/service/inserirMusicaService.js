import { inserirMusica } from '../Repository/musicaRepository.js';

export default async function inserirMusicaService(musica){

    let id = await inserirMusica(turma);

    return id;

}