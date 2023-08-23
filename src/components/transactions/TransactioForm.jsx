import { useState } from "react"
import {useGlobalState} from '../../context/GlobalState';
import styled from "styled-components";


const TransactioForm = () => {
    const {addTransaction} = useGlobalState();
    const [description, setDescription] = useState('');
    const [amount, setAmount] = useState(0);

    const onSubmit = (e) => {
        e.preventDefault();
        addTransaction({
            id: window.crypto.randomUUID(),
            description, 
            amount: +amount,
        });
    }
    return (
        <Container>
            <form onSubmit={onSubmit}>
                <input 
                    type="text" 
                    placeholder="Enter a description" 
                    onChange={(e) => setDescription(e.target.value)}
                />
                <input 
                    type="number" 
                    step={"0.01"} 
                    placeholder="$ 00.00" 
                    onChange={(e) => setAmount(e.target.value)
                }/>
                <button>Add Transaction</button>
            </form>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    input{
        background: #445069;
        color: #C8FFE0;
        margin-bottom: 20px;
        width: 100%;
        border-radius: 15px;
        height: 40px;
        padding-left: 15px;
        padding-right: 15px;
        display: block;
        &:focus{
            outline: none;
            border: 1px solid #FCE9F1
        }
    }
    button{
        background: #183D3D;
        display: block;
        border-radius: 15px;
        padding-left: 15px;
        padding-right: 15px;
        color: #C8FFE0;
        height: 40px;
        width: 100%;
        &:hover{
            cursor: pointer;
        }
    }
`;
export default TransactioForm