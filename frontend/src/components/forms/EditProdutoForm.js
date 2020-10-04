import React, { useEffect, useState } from 'react';

const EditProdutoForm = props =>{
    const[produto, setProduto] = useState(props.currentProduto);
    const handleInputChange = event =>{
        const {name, value} = event.target;
        setProduto({...produto, [name]:value});
    };
    const submitForm = event =>{
        event.preventDefault();
        props.upsateProduto(produto.id, produto);

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
                    type='text'
                    name= 'item'
                    value={produto.item}
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
                    <button
                    className='btn btn-primary'
                    onClick={() => props.setEditing(false)}
                    value='Cancelar'
                    />
                </div>

            </form>
        </div>

    );
}; export default EditProdutoForm;