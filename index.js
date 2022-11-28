(async () => {

    const database = require('./db');
    const Produto = require('./produto');
    // await database.sync();

 // CREATE //   
    const novoProduto = await Produto.create({
        nome: 'BPMBERMAN',
        preco: 35,
        descricao: "jogo de bomba"

    })

 //   console.log(novoProduto);

// FIND //
//    const produtos = await Produto.findAll({
//        where : {
//            preco : 15
//        }
//    });
//    console.log(produtos);
//UPDATE//
//const produtos = await Produto.findByPk(1)
//produtos.preco = 35;
//await produtos.save();
//console.log(produtos);

//DELETE//
// await produtos.destroy();   // SELECIONANDO COM FIND BYPK

// await Produto.destroy({
//    where: {
//       preco: 15
//    }
//})


})();

