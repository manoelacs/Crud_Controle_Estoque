import React from 'react';
import {Button} from 'react-bootstrap';

const ProdutoTable = props =>{
    return(
        <table className='container'>
            <thead className='container'>
                <tr className='list-group-horizontal'>
                    <th>Item</th>
                    <th>Quantidade</th>
                    <th>Preço</th>
                    <th>Ação</th>
                </tr>

            </thead>
            <tbody className='container'>
               {
                   props.produtos.length > 0 ? (
                      props.produtos.map( produto=>(
                          <tr key = {produto.id}>
                              <td>{produto.item}</td>
                              <td>{produto.quantidade}</td>
                              <td>{produto.valor}</td>
                              <td>
                                  <Button                                   
                                    onClick={ ()=> props.editRow(produto)}
                                    variant="primary"
                                    >Editar </Button>

                                  <Button
                                    onClick={()=> props.deleteProduto(produto.id)}
                                    variant='danger'                                  
                                  >Deletar</Button>
                              </td>
                          </tr>
                      ))

                   ) : (
                       <tr>
                           <td colSpan={3}>{props.produtos[0]} Não existem produtos cadastrados</td>
                       </tr>

                   )

               }
                
            </tbody>
        </table>

    );

};
export default ProdutoTable;