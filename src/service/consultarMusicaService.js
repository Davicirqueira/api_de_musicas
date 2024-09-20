import {} from '../Repository/musicaRepository.js'

export default async function consultarMusicaService(){

    let registros = await consultarMusica();

    return registros;
    
}