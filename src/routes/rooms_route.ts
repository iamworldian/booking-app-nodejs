import { Router } from 'express';
import { createRoom, deleteRoom, getAllRooms, getRoom, updateRoom } from '../Controller/room_controller';
import tryCatch from '../utils/tryCatch';
import { verifyAdmin, verifyToken } from '../utils/verifyToken';

const router = Router();

// CREATE
router.post(
  '/:hotelid',
  tryCatch(verifyToken),
  tryCatch(verifyAdmin),
  tryCatch(createRoom),
);
// Delete
router.delete(
  '/:id/:hotelid',
  tryCatch(verifyToken),
  tryCatch(verifyAdmin),
  tryCatch(deleteRoom),
);
// Update
router.put(
  '/:id',
  tryCatch(verifyToken),
  tryCatch(verifyAdmin),
  tryCatch(updateRoom),
);
// Delete
router.put(
  '/:id',
  tryCatch(verifyToken),
  tryCatch(verifyAdmin),
  tryCatch(updateRoom),
);
// Read
router.get('/:id', tryCatch(getRoom));
// Read All
router.get('/', tryCatch(getAllRooms));
export default router;
