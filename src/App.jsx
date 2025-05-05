import { BasketProvider } from "./context/BasketContext";
import Router from "./components/Router";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import BasketPage from "./pages/BasketPage";
import ConfirmationPage from "./pages/ConfirmationPage";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import "./App.css";
const App = ({ currentPath }) => {
  // Determine which page to show based on current path
  const renderPage = () => {
    if (currentPath === "/basket") {
      return <BasketPage />;
    } else if (currentPath === "/confirmation") {
      return <ConfirmationPage />;
    } else {
      return <HomePage />;
    }
  };
  
  return (
    <BasketProvider>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Navbar />
        <main className="flex-grow">
          {renderPage()}
        </main>
      </div>
    </BasketProvider>
  );
};

// Export wrapped app with router
export default () => (
  <Router>
    <App />
  </Router>
);