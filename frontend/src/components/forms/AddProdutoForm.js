import React, { useState } from 'react';
import { Button } from 'react-bootstrap';

const AddProdutoForm = props =>{
    const initFormState= {item:'', quantidade:'', valor:'' };
    const[produto, setProduto] = useState(initFormState);
    //const showpassword='text';

    const handleInputChange = event =>{
        const {name, value} = event.target;
        setProduto({...produto, [name]:value});
        
    }
    const submitForm = event =>{
        event.preventDefault();
        if (!produto.item || !produto.quantidade || !produto.valor) return;
        props.addProduto(produto);
        props.handleButtonAdd();
        alert(JSON.stringify(produto));
        setProduto(initFormState);
    }


    return(
        <div className='container'>
            <h5 className='list-group-item-primary'>Adicionar Produto</h5>
            <form 
            onSubmit={submitForm}>
                <div className='form-group' id='item'>
                    <label htmlFor='item'>Item</label>
                    <input 
                    type='text'
                    className='form-control' 
                    onChange={handleInputChange}
                    value={produto.item || ''}
                    name='item'
                    required
                    />

                   
                </div>
                <div className='form-group' id='quantidade'>
                    <label htmlFor='quantidade'>Quantidade</label>
                    <input 
                    type='number'
                    className='form-control' 
                    onChange={handleInputChange}
                    value={produto.quantidade || ''}
                    name='quantidade'
                    
                    required
                    />

                </div>
                <div className='form-group' id= 'valor'>
                    <label htmlFor='quantidade'>Valor</label>
                    <input 
                    type='number'
                    className='form-control' 
                    onChange={handleInputChange}
                    value={produto.valor || ''}
                    name='valor'
                    required
                    />

                </div>
                <div className='form-group'>
                    <Button
                        variant='primary'
                        type='submit'
                    >Adicionar </Button>                    
                </div>

            </form>

        </div>

    );

};export default AddProdutoForm;
