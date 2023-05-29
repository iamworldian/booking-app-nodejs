import { Router } from 'express';

import {
  deleteHotel,
  editHotel,
  getAllHotels,
  getHotel,
  saveHotel,
} from '../Controller/hotel_controller';
import tryCatch from '../utils/tryCatch';
import { verifyAdmin, verifyToken } from '../utils/verifyToken';
const router = Router();

// CREATE
router.post(
  '/',
  tryCatch(verifyToken),
  tryCatch(verifyAdmin),
  tryCatch(saveHotel),
);

// Update
router.put(
  '/:id',
  tryCatch(verifyToken),
  tryCatch(verifyAdmin),
  tryCatch(editHotel),
);

// Delete
router.delete(
  '/:id',
  tryCatch(verifyToken),
  tryCatch(verifyAdmin),
  tryCatch(deleteHotel),
);

// GET One
router.get(
  '/:id',
  tryCatch(getHotel),
);

//  GET All
router.get('/', tryCatch(getAllHotels));

export default router;
