import { VictoryPie, VictoryLabel } from "victory";
import { useGlobalState } from "../context/GlobalState";
import {BsPieChartFill} from 'react-icons/bs'
import styled from "styled-components";

const ExpenseChart = () => {
    const {transactions} =  useGlobalState();


    const totalIncome = transactions
        .filter((transaction) => transaction.amount > 0)
        .reduce((acc, transaction) => (acc += transaction.amount ), 0);
    console.log(totalIncome);

    const totalExpense = transactions
        .filter((transaction) => transaction.amount < 0)
        .reduce((acc, transaction) => (acc += transaction.amount ), 0)*-1;
    console.log(totalExpense);

    const expensePercentage = Math.round((totalExpense/totalIncome)*100);
    const incomePercentage = 100- (expensePercentage);
    console.log(expensePercentage, '-', incomePercentage);

    if(totalIncome === 0 && totalExpense ===0){
        return(
            <ContainerEmpty>
                <BsPieChartFill/>
                <h1>Do not data yet</h1>
            </ContainerEmpty>
        )
    }
    return (
        <Container>
            <VictoryPie
                colorScale={["#8B9A46", "#C70039"]}
                data={[
                    { x: "Incomes", y: incomePercentage },
                    { x: "Expenses", y: expensePercentage},
                ]}
                animate={{
                    duration: 200,
                }}
                labelComponent={<VictoryLabel
                        angle={60}
                        style={{
                            fill: "white",
                        }}
                />}
                classname="victory-pie"
            />
        </Container>
    )
}
const ContainerEmpty = styled.div`
display: flex;
flex-direction: column;
align-items: center;
width: 50%;
height: 50%;
    svg{
        width: 80%;
        height: 40%;
    }
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
    width: 100%;
    .victory-pie{
        width: 50%;
        height: 50%;
    }
`;

export default ExpenseChart