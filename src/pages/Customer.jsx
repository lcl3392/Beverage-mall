 
import CustomerLIst from '../components/CustomerLIst';
import Footer from '../components/Footer';
import Header from '../components/Header';
import './Customer.css'
 
const Customer = () => {
 
 
    return (
        <>
        <Header/>
            <div className="inner">
                <h3> 고객문의 </h3>
                 <CustomerLIst />
            </div>
        <Footer/>
        </>
    );
};

export default Customer;