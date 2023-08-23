import styled from "styled-components";
import { useGlobalState } from "../context/GlobalState";

const IncomeExpenses = () => {
    const {transactions} = useGlobalState();

    const amount = transactions.map(transaction => transaction.amount);
    const income = amount
        .filter((item) => item > 0)
        .reduce((acc, item) => (acc += item), 0);

    const expense = amount
        .filter(item => item < 0)
        .reduce((acc, item) => (acc += item), 0)*-1

    return (
        <Container>
            <div className="income-expense">
                <h4>Income</h4>
                <p>{income}</p>
            </div>
            <div className="income-expense">
                <h4>Expense</h4>
                <p>{expense}</p>
            </div>
        </Container>
    )
}
const Container = styled.div`
    .income-expense{
        display: flex;
        justify-content: space-between;
        margin: 20px;
        font-size: 20px
    }
`;

export default IncomeExpenses;