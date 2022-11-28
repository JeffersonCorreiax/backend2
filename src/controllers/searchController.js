const path = require('path');
const fs = require("fs");
const { Produto } = require('../../produto');
const Sequelize = require('sequelize');
const database = require('../../db');

const searchController = {
    index: (req, res) => {
        res.render('search')
    }
}



module.exports = searchController;