import { Router } from "express";
const endpoints = Router();

import inserirTarefaService from "../service/tarefa/inserirTarefaService.js";
import consultarTarefaService from "../service/tarefa/consultarTarefaService.js";
import alterarTarefaService from "../service/tarefa/alterarTarefaService.js";
import deletarTarefaService from "../service/tarefa/deletarTarefaService.js";

import consultarTarefaPorIDService from "../service/tarefa/consultarTarefaPorIDService.js";
import consultarTarefaPorOrdemService from "../service/tarefa/consultaTarefaPorOrdemService.js";


endpoints.post('/tarefa', async (req, resp) => {

    try {
        
        let tarefa = req.body;

        let id = await inserirTarefaService(tarefa)

        resp.send({

            idTarefa: id

        })

    } 
    catch(err) {
        
        resp.status(400).send({
            erro: err.message
        })

    }

})


endpoints.get('/tarefa', async (req, resp) => {

    try {
    
        let registros = await consultarTarefaService();

        resp.send(registros);

    } 
    catch(err) {
        
        resp.status(400).send({
            erro: err.message
        })

    }

})


endpoints.put('/tarefa/:id', async (req, resp) => {

    try {
   
        let tarefa = req.body;

        let id = req.params.id;

        await alterarTarefaService(tarefa, id)

        resp.status(204).send();

    } 
    catch(err) {
     
        resp.status(400).send({
            erro: err.message
        })

    }

})


endpoints.delete('/tarefa/:id', async (req, resp) => {

    try {
    
        let id = req.params.id;

        await deletarTarefaService(id);

        resp.status(204).send()

    } 
    catch(err) {
        
        resp.status(400).send({
            erro: err.message
        })

    }
    
})


//Extras
endpoints.get('/tarefa/:id', async (req, resp) => {

    try {
    
        let id = req.params.id;

        let tarefa = await consultarTarefaPorIDService(id)

        resp.send(tarefa)

    } 
    catch(err) {
        
        resp.status(400).send({
            erro: err.message
        })

    }

})


endpoints.get('/tarefa/busca/ordem', async (req, resp) => {

    try {
    
        let ordem = req.query.ordem;

        let tarefa = await consultarTarefaPorOrdemService(ordem);

        resp.send(tarefa);

    } 
    catch(err) {
        
        resp.status(400).send({
            error: err.message
        })

    }

})


export default endpoints;