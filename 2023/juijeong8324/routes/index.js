const express = require('express');
var router = express.Router();

/* GET HOME */
router.get('/', function(req, res){
    res.render('main.html');
});

router.get('/api/v1/juijeong8324', function(req, res){
    res.status(200).json({
        "message" : "hello get api v1/juijeong8324"
    });
});

router.get('/healthcheck', function(req, res){
    res.send("hello get api /healthcheck");
});

// router 객체 모듈화해서 내보내기
module.exports = router;