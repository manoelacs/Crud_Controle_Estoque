import React from 'react';
import api from '../api';
import EditProdutoForm from '../components/forms/EditProdutoForm';
import ProdutoTable from '../components/table/ProdutoTable'
import AddProdutoForm from '../components/forms/AddProdutoForm';
import FlashMessage from 'react-flash-message';
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


class Home extends React.Component{
    constructor(props){
        super(props);
        
        this.state = {
            produtos:[],
            currentProduto:{
                id:null,
                item:"",
                quantidade:'',
                valor:''
            },
            editing:false,
            buttonAdd:false,
            showMessege:false
        };
        this.handleChangeTable = this.handleChangeTable.bind(this);
        
    }
    
    componentDidMount(){
        this.handleChangeTable();

    };
    async handleChangeTable(){
        const response = await api.get('');
        const produtos = response.data.data;
          console.log(produtos);
            this.setState({
              produtos:produtos
              //setProdutos:response.data
            });
    }
    handleButtonAdd = () => {
        const state = this.state.buttonAdd;
        this.setState({
            buttonAdd: !state
        });
    }
    handleShowMessege = (ativo) => {
        const troca = this.state.showMessege;
        this.setState({
            showMessege: !troca
        });

    }

    addProduto = produto => {
       api.post('/create', produto)
        .then( res => { 
            this.setState({
                showMessege:true
            });
            console.log('Produto adicionado');
            this.handleChangeTable();
        }).catch( error=> {
            console.log("Erro ao adicionar produto");

        });
    }
    updateProduto = (id, produto) =>{
        api.put(`/update/${id}`, produto)
        .then(res => {
            console.log('Produto atualizado');
            this.handleChangeTable();
            this.setState({
                currentProduto:{
                    id:null,
                    item:'',
                    quantidade:'',
                    valor:''
                }
            });
            this.setEditing(false);

        }).catch(error=>{ 
            console.log('erro ao atualizar produto');
        });
    }
    editRow = produto => {
      
        this.setEditing(true);
        
        this.setState({currentProduto:{id:produto.id,  item:produto.item,
             quantidade:produto.quantidade, valor:produto.valor}});
        console.log(this.currentProduto);
        
    }
    setEditing = isEditing =>{
        this.setState({
            editing: isEditing
        });
    }

    deleteProduto = id => {
        api.delete(`/delete/${id}`)
        .then(res=>{
            console.log('produto deletado');
            this.handleChangeTable();
        });
    }


    



    render(){
        const produtos = this.state.produtos;
        const buttonAdd = this.state.buttonAdd;        

        return(
            <div>
                
                <div className ='container'>
                    { 
                        this.state.editing ?(
                            <div>
                                <h4 className='list-group-item-primary'>Editar Produto</h4>
                                <EditProdutoForm
                                    editing = {this.state.editing}
                                    currentProduto = {this.state.currentProduto}
                                    updateProduto = {this.updateProduto}
                                    showMessege = {this.state.showMessege}
                                    handleShowMessege = {this.handleShowMessege}
                                    setEditing = {this.setEditing}

                                />
                               {this.state.showMessege &&  
                                                            <div>
                                                                <FlashMessage duration={5000}>
                                                                    <strong>I will disapper in 5 seconds!</strong>
                                                                </FlashMessage>
                                                            </div>
                                }

                            </div>

                        ) : (
                            <div>
                                <Button
                                variant = 'primary' 
                                onClick={this.handleButtonAdd}
                                >Adicionar Produto</Button>
                                {
                                    buttonAdd && <AddProdutoForm 
                                    addProduto={this.addProduto}
                                    handleButtonAdd={this.handleButtonAdd}                                   
                                     
                                     />
                                }
                                

                            </div>


                        )

                    }

                </div>
                <div className='container'>
                    <h5 className='list-group-item list-group list-group-item-primary'>Lista de Produtos cadastrados</h5>
                    <ProdutoTable 
                         produtos = {produtos}
                         editRow = {this.editRow}
                         deleteProduto = {this.deleteProduto}/>              
                </div>
            </div>


        );
    }

}; export default Home