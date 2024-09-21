
export function validarCamposObrigatoriosMusica(musica){

    if(!musica.nomeMusica){

        throw new Error('Nome da música obrigatório')

    }

    if(!musica.artista){

        throw new Error('Nome do artista obrigatório')

    }

    if(!musica.url){

        throw new Error('Url da música obrigatório')

    }

    if(!musica.lancamento){

        throw new Error('Data de lançamento obrigatório')

    }

    if(!musica.duracao){

        throw new Error('Duração da música obrigatório')

    }

    if(!musica.destaque){

        throw new Error('Informar se a música é um destaque, é obrigatório')

    }


    if(!musica.idioma){

        throw new Error('Idioma da música obrigatório')

    }

}


export function validarMusicaUnica(registros){

    if(registros.length == 0){

        throw new Error('Música não encontrada')

    }

}