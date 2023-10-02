import express from 'express';
import signinDashboard from '../../controllers/dashboard/user/signinDashboard.js';
import singupDashboard from '../../controllers/dashboard/user/singupDashboard.js';
import profileDashboard from '../../controllers/dashboard/user/profileDashboard.js';
import verifyDashboardUser from '../../controllers/dashboard/user/verifyDashboardUser.js';

const router = express.Router();
router.post('/signin', signinDashboard);
router.post('/signup', singupDashboard);
router.get('/profile', profileDashboard);
router.post('/verify', verifyDashboardUser);

export default router;