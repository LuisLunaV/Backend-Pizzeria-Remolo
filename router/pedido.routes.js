const { Router } = require('express');

const router = Router();

router.post('/',(req, res)=>{
res.status(200).json({
    msg: 'Pedidos POST'
})
})

module.exports = router;
