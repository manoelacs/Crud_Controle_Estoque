import React from 'react';
import ProdutoTable from '../components/table/ProdutoTable'


class Home extends React.Component{

    render(){
        const {produtos} = this.state;
        const buttonAdd = this.state.ativo;
        return(
            <div>
                {}
                <div>

                </div>
                <div className='container'>
                    <h5 className='list-group-item list-group list-group-item-primary'>Lista de Produtos cadastrados</h5>
                    <ProdutoTable 
                    produtos = {this.produtos}
                    editRouw = {this.editRouw}
                    deleteProdutos = {this.deleteProdutos}/>              
                </div>
            </div>


        );
    }

}; export default Home