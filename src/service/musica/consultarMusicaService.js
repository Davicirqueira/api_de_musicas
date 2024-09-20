import { consultarMusica } from '../../repository/musicaRepository.js'

export default async function consultarMusicaService(){

    let registros = await consultarMusica();

    return registros;
    
}