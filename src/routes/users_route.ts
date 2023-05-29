import { Router } from 'express';

import {
  deleteUser,
  editUser,
  getAllUsers,
  getUser,
} from '../Controller/user_controller';
import tryCatch from '../utils/tryCatch';
import { verifyAdmin, verifyToken, verifyUser } from '../utils/verifyToken';
const router = Router();

// Update
router.put(
  '/:id',
  tryCatch(verifyToken),
  tryCatch(verifyUser),
  tryCatch(editUser),
);

// Delete
router.delete(
  '/:id',
  tryCatch(verifyToken),
  tryCatch(verifyAdmin),
  tryCatch(deleteUser),
);

// GET One
router.get('/:id', tryCatch(getUser));

//  GET All
router.get('/', tryCatch(getAllUsers));

export default router;
