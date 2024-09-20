import { deletarMusica } from "../Repository/musicaRepository";

export default async function deletarMusicaService(id){

    let linhasAfetadas = await deletarMusica(id)

    if(linhasAfetadas == 0){

        throw new Error('Nenhuma música removida.');

    }

}