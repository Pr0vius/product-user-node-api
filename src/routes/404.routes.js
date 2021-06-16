const { Router } = require("express");
const router = Router();

router.get('*', (req, res, next) => {
    res.status(404).json({status:404, message: "Page not Found" });
});

module.exports = router;