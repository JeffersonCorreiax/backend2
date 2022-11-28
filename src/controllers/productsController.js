const path = require('path');
const fs = require("fs");
//const { Produto } = require('../../produto');
const Sequelize = require('sequelize');
const database = require('../../db');

const Produto = database.Produto;

const productsController = {
    index:  (req, res) => {
        
       return res.render('products');
    
    },
    create : async (req, res) => {

 //     const produto = req.body;
 //     console.log(produto)
  //    try {
 //        await Produto.create(produto);
 //     } catch(error){
 //        console.log(error);
 //     }
      const { nome , preco, descricao } = req.body;   

     const novoProduto = await Produto.create ({
        nome,
        preco,
        descricao
     });
    
    return res.redirect('products');
    }
}

module.exports = productsController;