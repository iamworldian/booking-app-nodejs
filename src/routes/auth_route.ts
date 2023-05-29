import { Router } from 'express';
import { login, register } from '../Controller/auth_controller';
import tryCatch from '../utils/tryCatch';

const router = Router();

// Register user
router.post('/register', tryCatch(register));
// login user
router.post('/login', tryCatch(login));
export default router;
