import express from 'express';
import authentication from '../../middlewares/authentication';
import lostItemsController from '../../controllers/lostDoc';
import docValidation from '../../middlewares/docValidation';

const lostRouter = express.Router();

lostRouter
  .post('/lost', authentication, docValidation, lostItemsController.lostItem)
  .post('/found', authentication, docValidation, lostItemsController.foundItem)
  .get('/lost', authentication, lostItemsController.allLost)
  .get('/found', authentication, lostItemsController.allFound);

export default lostRouter;
