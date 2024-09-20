import { Router } from "express";
const endpoints = Router();

import inserirMusicaService from "../service/musica/inserirMusicaService.js"; 
import consultarMusicaService from "../service/musica/consultarMusicaService.js";
import alterarMusicaService from "../service/musica/alterarMusicaService.js";
import deletarMusicaService from "../service/musica/deletarMusicaService.js";

endpoints.post('/musica', async (req, resp) => {

    try {
        
        let musica = req.body;

        let id = await inserirMusicaService(musica)

        resp.send({

            idMusica: id

        })

    } 
    catch(err) {
        
        resp.status(400).send({
            erro: err.message
        })

    }

})


endpoints.get('/musica', async (req, resp) => {

    try {
    
        let registros = await consultarMusicaService();

        resp.send(registros);

    } 
    catch(err) {
        
        resp.status(400).send({
            erro: err.message
        })

    }

})


endpoints.put('/musica/:id', async (req, resp) => {

    try {
   
        let musica = req.body;

        let id = req.params.id;

        await alterarMusicaService(musica, id)

        resp.status(204).send();

    } 
    catch(err) {
     
        resp.status(400).send({
            erro: err.message
        })

    }

})


endpoints.delete('/musica/:id', async (req, resp) => {

    try {
    
        let id = req.params.id;

        await deletarMusicaService(id);

        resp.status(204).send()

    } 
    catch(err) {
        
        resp.status(400).send({
            erro: err.message
        })

    }
    
})


export default endpoints;