import { alterarMusica } from '../Repository/musicaRepository.js';

export default async function alterarMusicaService(musica, id){

    let linhasAfetadas = await alterarMusica(musica, id);

    if(linhasAfetadas == 0){

        throw new Error('Nenhuma música alterada.');

    }
}