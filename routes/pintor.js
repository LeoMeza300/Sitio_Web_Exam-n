const express =require('expres');

Let pintor = require('../controllers/pintoresController.js');


Let router = express.Router();

router.get('/', pintor.list);

module.exports = router;
