const express = require('express');
const router = express.Router();
const controller = require('../controllers/campaignController');

router.post('/', controller.createCampaign);
router.get('/', controller.getAllCampaigns);
router.get('/:id', controller.getCampaignById);
router.put('/:id', controller.updateCampaign);
router.delete('/:id', controller.deleteCampaign);

module.exports = router;
