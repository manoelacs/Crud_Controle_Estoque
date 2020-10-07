import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';

const EditProdutoForm = props =>{
    const[produto, setProduto] = useState(props.currentProduto);
    console.log(props.currentProduto);

    const handleInputChange = event =>{
        const {name, value} = event.target;
        setProduto({...produto, [name]:value});
       
    };
    const submitForm = event =>{
        event.preventDefault();
        props.updateProduto(produto.id, produto);
        props.handleShowMessege(true);
        props.setEditing(false);

    }
    useEffect(() =>{
        setProduto(props.currentProduto);
    }, [props]);

    return(
        <div className='container'>
            <form 
            onSubmit={submitForm}>
                <div className='form-group'>
                    <label htmlFor='item'>Item</label>
                    <input
                    id={produto.id}
                    value={produto.item}
                    type='text'
                    name= "item"                   
                    onChange={handleInputChange}
                    required
                    className='form-control'
                    />

                </div>
                <div className='form-group'>
                    <label htmlFor='quantidade'>Quantidade</label>
                    <input
                    type='number'
                    name='quantidade'
                    value={produto.quantidade}
                    onChange={handleInputChange}
                    required
                    className='form-control'
                    />

                </div>
                <div className='form-group'>
                    <label htmlFor='valor'>Valor</label>
                    <input
                    type='number'
                    name='valor'
                    value={produto.valor}
                    onChange={handleInputChange}
                    required
                    className='form-control'
                    />

                </div>
                <div className='form-group'>
                    <Button
                    type='submit'
                    variant='primary'>
                        Salvar
                    </Button>
                    <Button
                    onClick={() => props.setEditing(false)}
                    variant='danger'
                    >Cancelar</Button>                    
                </div>

            </form>
        </div>

    );
}; export default EditProdutoForm;