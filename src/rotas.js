import musicaController from './controller/musicaController.js';
import tarefaController from './controller/tarefaController.js';

export default function adicionarRotas(servidor) {
    
    servidor.use(musicaController);
    servidor.use(tarefaController);

}