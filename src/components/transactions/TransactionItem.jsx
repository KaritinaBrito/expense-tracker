import styled from "styled-components";
import {FaRegTrashCan} from 'react-icons/fa6';
import { useGlobalState } from "../../context/GlobalState";

const TransactionItem = ({transaction}) => {
    const {deleteTransaction} = useGlobalState();

    return (
        <Container>
            <p>{transaction.description}</p>
            <div className="price-add">
                <span>$ {transaction.amount}</span>
                <button onClick={() => {deleteTransaction(transaction.id)}}><FaRegTrashCan/></button>
            </div>
        </Container>        
        
    )
}

const Container= styled.li`
    background: #445069;
    display: flex; 
    justify-content: space-between;
    align-items: center;
    width: 250px;
    border-radius: 15px;
    margin-bottom: 20px;
    padding-left: 15px;
    padding-right: 15px;
    padding: 5px 10px;
    gap: 15px;
    p{
        font-weight: 700;
        width: 100%;
    }
    .price-add{
        display: flex; 
        justify-content: space-between;
        width: 100%;
        gap: 5px
    }
    button{
        background: transparent;
        svg{
            color: #B9B4C7;
            &:hover{
                cursor: pointer;
                font-size: 18px;
                color: white;
            }
        }
    }
`;

export default TransactionItem