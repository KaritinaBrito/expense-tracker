import styled from "styled-components";
import { useGlobalState } from "../context/GlobalState";

const Balance = () => {
    const {transactions} = useGlobalState();

    const amounts = transactions.map(transaction => transaction.amount);
    const total = amounts.reduce((acc, item) => (acc += item), 0);
  return (
    <Container>
        <h4>Your Balance</h4>
        <h1>$ {total}</h1>
    </Container>
  )
}
const Container = styled.div`
  display: flex; 
  align-items: center; 
  justify-content: space-between;
  h1{
    color: #79155B;    

  }
`;

export default Balance