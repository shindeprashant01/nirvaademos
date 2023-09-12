import React ,{useEffect}from 'react';
import './App.css';
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import PurchaseReqComponents from './components/PurchaseRequest/purchaseReqComponent';
import ExpenseReqComponents from './components/ExpenseRequest/expenseReqComponents';
import PurchaseFormComponents from './components/PurchaseForms/purchaseFormComponents';
import EmployeeRegiComponents from './components/EmployeeRegister/employeeRegiComponents';
import CustomerRegiComponents from './components/CustomerRegister/customerRegiComponents';
import NewVendorRegComponents from './components/NewVendorRegister/newVendorRegComponents';
import CreateTicketComponents from './components/CreateTickets/createTicketComponent';
import ReportAdminComponents from './components/ReportAdmin/reportAdminComponent';
import CreateProjectComponents from './components/CreateProject/createProjectComponent';
import HomeComponents from './components/HomeComponent/homeComponent';





function App() {

  useEffect(()=>{ 
     fetch('https://jsonplaceholder.typicode.com/posts/1')
     .then(res=> res.json())
     .then(data =>console.log(data))
     .catch(err => console.log(err))
  },[])
  return (
    
    <Router>
    <Routes>
    <Route  path="/" Component={HomeComponents}/>
    <Route  path="/purchase_form" Component={PurchaseFormComponents}/>
    <Route  path="/purchase_request" Component={PurchaseReqComponents}/>
    <Route  path="/expense_request" Component={ExpenseReqComponents}/>
    <Route  path="/vendor_register" Component={NewVendorRegComponents}/>
    <Route  path="/employee_register" Component={EmployeeRegiComponents}/>
    <Route  path="/customer_register" Component={CustomerRegiComponents}/>
    <Route  path="/create_tickets" Component={CreateTicketComponents}/>
    <Route  path="/report_admin" Component={ReportAdminComponents}/>
    <Route  path="/create_project" Component={CreateProjectComponents}/>
    </Routes>
    </Router>
    
  );
}

export default App;
