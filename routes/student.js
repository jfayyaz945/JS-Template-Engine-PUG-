const path = require('path');
const express = require('express');

const rootDir = require('../helpers/path');
const adminData= require('./admin');

const router = express.Router();

router.get('/', (req, res, next) => {
    const students = adminData.students
    res.render('student', {studs: students, docTitle: 'Students', path: '/'});
    /* console.log(adminData.products);
    res.sendFile(path.join(rootDir, 'views', 'shop.html')); */
});

module.exports = router;