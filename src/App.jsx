import styled from 'styled-components';
import Balance from './components/Balance';
import Header from './components/Header';
import IncomeExpenses from './components/IncomeExpenses';
import TransactioForm from './components/transactions/TransactioForm';
import TransactionList from './components/transactions/TransactionList';
import { GlobalProvider } from './context/GlobalState';
import ExpenseChart from './components/ExpenseChart';

function App() {

  return (
    <GlobalProvider>
      <Container>
        <div className="table-container">
          <div className="header">
            <Header />
            <div className="body">
              <div className="balance">
                <IncomeExpenses />
                <Balance />
                <TransactioForm />
              </div>
              <div className="transactionlist">
                <ExpenseChart />
                <TransactionList />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </GlobalProvider>
  )
}

const Container = styled.div`
  background: #040D12;
  color: #93B1A6;
  height: 100vh;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  .table-container{
    width: 80%;
    display: flex;
    align-items: center;
    justify-content: center; 
  }
  .header{
    background: #001C30;
    border-radius: 15px;
    padding: 20px;
    width: 100%;  
  }
  .body{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 40px;
  }
  .balance{
    display: flex;
    flex-direction: column;
    flex: 1 1 0%;
  }
  .transactionlist{
    display: flex;
    flex-direction: column;
    justify-content: center;  
    align-items: center;
    flex: 1 1 0%;
  }
`;

export default App
