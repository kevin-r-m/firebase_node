const firebase = require('../db/connection');
const Student = require('../models/student');
const firestore = firebase.firestore();

const addStudent = async (req, res, next) => {
    try {
        const data = req.body;
        await firestore.collection('students').doc().set(data);
        res.send('Record saved successfully');
    } catch(error) {
        res.satatus(400).send(error.message);
    }
}

module.exports = {
    addStudent
}