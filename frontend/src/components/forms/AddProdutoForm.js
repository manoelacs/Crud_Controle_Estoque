import React, { useState } from 'react';

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
        alert(JSON.stringify(produto));
        setProduto(initFormState);
    }


    return(
        <div className='container'>
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
                    name='quantidade'
                    value={produto.item || ''}
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
                    <button
                    type='submit'
                    className='btn btn-primary'
                    value='Submit'
                    />
                </div>

            </form>

        </div>

    );

};export default AddProdutoForm;
