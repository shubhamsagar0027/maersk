import { Routes, Route } from "react-router-dom";
import Login from "./Login";
import Dashboard from "./Dashboard";
import LongTermValue from "./LongTermValue";
import CustomerAttrition from "./CustomerAttrition";
import MarketingBudget from "./MarketingBudget";
import PromisingLeads from "./PromisingLeads";

// Write routes here for all the routes
export const Routing = () => {
  return (
    <Routes>
      {/* Define your routes here */}
     
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/long-term-value" element={<LongTermValue />} />
      <Route path="/customer-attrition" element={<CustomerAttrition />} />
      <Route path="/marketing-budget" element={<MarketingBudget />} />
      <Route path="/promising-leads" element={<PromisingLeads />} />
      
    </Routes>
  );
};
