import express from 'express';

import createClientController from '../../controllers/dashboard/client/createClient.js';
import editClientController from '../../controllers/dashboard/client/editClient.js';
import deleteClientController from '../../controllers/dashboard/client/deleteClient.js';
import getClientsController from '../../controllers/dashboard/client/getClients.js';
import getClientController from '../../controllers/dashboard/client/getClient.js';
import verifyClientController from '../../controllers/dashboard/client/verifyClient.js';

const router = express.Router();
router.post('/', createClientController);
router.post('/verify', verifyClientController);
router.put('/:id', editClientController);
router.delete('/:id', deleteClientController);
router.get('/list', getClientsController);
router.get('/:id', getClientController);

export default router;