import con from './connection.js';

export async function inserirMusica(musica){

    const comando = ` 
    
    insert into tb_musica(nm_musica, ds_artista, url_musica, dt_lancamento, hr_duracao, bt_destaque, ds_idioma)
    values (?, ?, ?, ?, ?, ?, ?)
    
    `

    let resposta = await con.query(comando, [musica.nomeMusica, musica.artista, musica.url, 
    musica.lancamento, musica.duracao, musica.destaque, musica.idioma]);

    let info = resposta[0];

    let id = info.insertId;

    return id;

}


export async function consultarMusica(){

    const comando = `
    
    SELECT  id_musica       id,
	        nm_musica       nomeMusica,		
	        ds_artista      artista,
	        url_musica      url,
	        dt_lancamento   lancamento,
            hr_duracao      duracao, 
            bt_destaque     destaque, 
            ds_idioma       idioma
    FROM  tb_musica      

    `;

    let resposta = await con.query(comando);

    let registros = resposta[0];

    return registros;

}


export async function alterarMusica(musica, id){

    const comando = ` 
    
    update tb_musica
    set nm_musica = ?,  
	    ds_artista = ?,  
	    url_musica = ?,     
	    dt_lancamento = ?,  
        hr_duracao = ?,   
        bt_destaque = ?,   
        ds_idioma = ?    
    where id_musica = ?

    `;

    let resposta = await con.query(comando, [musica.nomeMusica, musica.artista, musica.url, 
    musica.lancamento, musica.duracao, musica.destaque, musica.idioma, id]);

    let info = resposta[0];

    let linhasAfetadas = info.affectedRows;

    return linhasAfetadas;

}


export async function deletarMusica(id){

    const comando = ` 
    
    DELETE FROM tb_musica 
    WHERE id_musica = ?

    `;

    let resposta = await con.query(comando, [id]);

    let info = resposta[0];

    let linhasAfetadas = info.affectedRows;

    return linhasAfetadas;

}


//Extras
export async function consultarMusicaPorID(id){

    const comando = `
    
    SELECT  id_musica   id,
	    nm_musica       nomeMusica,		
	    ds_artista      artista,
	    url_musica      url,
	    dt_lancamento   lancamento,
        hr_duracao      duracao, 
        bt_destaque     destaque, 
        ds_idioma       idioma
    FROM  tb_musica  
    where id_musica = ?

    `;

    let resposta = await con.query(comando, [id]);

    let registros = resposta[0];

    return registros;

}


export async function consultarMusicaPorIdioma(idioma){

    const comando = `
    
    SELECT  id_musica   id,
	    nm_musica       nomeMusica,		
	    ds_artista      artista,
	    url_musica      url,
	    dt_lancamento   lancamento,
        hr_duracao      duracao, 
        bt_destaque     destaque, 
        ds_idioma       idioma
    FROM  tb_musica  
    where ds_idioma = ?

    `;

    let resposta = await con.query(comando, [idioma]);

    let registros = resposta[0];

    return registros;

}