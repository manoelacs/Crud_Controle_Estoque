const Produto = require('../models/produto');

class ProdutoController {
    async store(req, res) {
    const item = req.body.item;
	const quantidade = req.body.quantidade;
	const valor = req.body.valor;

      const produto = Produto.create({
        item, quantidade, valor
      })
      .then(
          produto=>res.status(201).json({
              data:produto,
              error:false,
              message:'usuario adicionado com sucesso!'

        })).catch( error => res.status(500).json({
            data:[],
            error:true,
            message:error.message
        }));
  
      //return res.json(user);
    }
  
    async index(req, res){
      const produtosList = Produto.findAll(

      ).then(produtosList =>res.status(200).json({
          data:produtosList,
          error:false,
          message:'todos os usuarios'

      })).catch(error=>res.status(500).json({
          data:[],
          error:true,
          message:error.message

      }));
  
      //return res.json(users);
    }
    async getById(req, res){
        const produto_id = req.params.id;
        const produto = Produto.findOne({
            where:{
                id:produto_id
            }
        })
        .then(produto => res.status(201).json({
            data: produto,
            error:false,
            message:`item: ${produto.name}`
        }))
        .catch(error=>res.status(500).json({
            data:[],
            error:true,
            message:error.message

        }));
       
    }
    async update(req, res){
        const produto_id=req.params.id;
        const{item, quantidade, valor} = req.body;
        const data = [item, quantidade, valor];
        Produto.update({
            item,
            quantidade,
            valor
        },{
            where:{
                id:produto_id
            }
        })
        .then(data => res.status(200).json({
            data:data,
            error:false,
            message:'dados atualizados com sucesso'
        }))
        .catch( error => res.status(500).json({
            error:true,
            message:error.message
        }))
    }
    async destroy(req, res){
        const produto_id=req.params.id;
        User.destroy({
            where:{
                id:produto_id
            }
        })
        .then(status=>res.status(201).json({
            error:false,
            message:'usuario foi deletado'
        }))
        .catch(error=>res.status(500).json({
            error:true,
            message:error.message
        }));     

    }
  }  
  module.exports = new ProdutoController();
