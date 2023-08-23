import styled from "styled-components";
import { useGlobalState } from "../../context/GlobalState";
import TransactionItem from "./TransactionItem";

const TransactionList = () => {
    const { transactions } = useGlobalState();

    return (
        <Container>
            <h3>History</h3>
            <ul>
                {transactions.map(transaction => (
                    <TransactionItem transaction={transaction} key={transaction.id}/>
                ))}
            </ul>
        </Container>
    )
}

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
    h3{
        color: #CD6688;    
        font-size:24px; 
    }
    ul{
        width: 100%;
        display: grid;
        grid-template-columns: auto;
}
`;

export default TransactionList