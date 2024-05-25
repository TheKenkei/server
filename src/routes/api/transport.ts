import { Router } from 'express';

import { transportsController } from '@app/controllers';
import { Validation } from '@app/middlewares';
import { Transport } from '@app/models';

const router = Router();
router.route('/items').post(transportsController.items);
router.route('/addTransport').post(Validation.req(Transport), transportsController.add);

export default router;
