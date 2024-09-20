import { inserirMusica } from '../../repository/musicaRepository.js';

export default async function inserirMusicaService(musica){

    let id = await inserirMusica(musica);

    return id;

}