import { Router } from 'express';
import { ScamInfoController } from '../controllers/scamInfoController';

const router = Router();
const scamInfoController = new ScamInfoController();

export function setScamRoutes(app) {
  app.use('/api/scams', router);
  
  router.get('/info', scamInfoController.getScamInfo);
  router.post('/report', scamInfoController.reportScam);
}