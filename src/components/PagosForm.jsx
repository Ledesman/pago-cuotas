import React,{ useState} from 'react'
import {  useNavigate } from 'react-router-dom';
function PagosForm() {
  let navigate = useNavigate();

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [address1, setAddress1] = useState('');
    const [address2, setAddress2] = useState('');
    const [country, setCountry] = useState('');
    const [state, setState] = useState('');
    const [zip, setZip] = useState('');
    const [promoCode, setPromoCode] = useState('');
    const [total, setTotal] = useState(20); // Initial total from the image
  
    function handleVolver  (e)  {
      e.preventDefault();
      navigate("/")
  }


    const products = [
        { name: 'Product name', description: 'Brief description', price: 12 },
        { name: 'Second product', description: 'Brief description', price: 8 },
        { name: 'Third item', description: 'Brief description', price: 5 },
      ];
      const handlePromoCode = () => {
        if (promoCode.toUpperCase() === 'EXAMPLECODE') {
          setTotal(total - 5);
        } else {
          alert('Invalid promo code.');
        }
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
        // Process the form data here
        console.log({
          firstName,
          lastName,
          username,
          email,
          address1,
          address2,
          country,
          state,
          zip,
        });
        alert('Order submitted!');
      };
  return (
    <div>
      Forlularios de Pagos
      
      <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-8">

      <button className="btn btn-outline-success" onClick={handleVolver}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left-square-fill" viewBox="0 0 16 16">
  <path d="M16 14a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2zm-4.5-6.5H5.707l2.147-2.146a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708-.708L5.707 8.5H11.5a.5.5 0 0 0 0-1"/>
</svg></button>
      </div>
      <div style={{ display: 'flex', maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
      <div style={{ flex: 1, marginRight: '20px' }}>
        <h2>Billing address</h2>
        <form onSubmit={handleSubmit}>
          <div style={{ display: 'flex', gap: '10px', marginBottom: '15px' }}>
            <div>
              <label htmlFor="firstName">First name</label>
              <input
                type="text"
                id="firstName"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
              />
            </div>
            <div>
              <label htmlFor="lastName">Last name</label>
              <input
                type="text"
                id="lastName"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
              />
            </div>
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="username">Username</label>
            <div style={{ display: 'flex', alignItems: 'center', border: '1px solid #ccc', borderRadius: '4px', overflow: 'hidden' }}>
              <span style={{ padding: '8px', backgroundColor: '#eee' }}>@</span>
              <input
                type="text"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                style={{ flex: 1, padding: '8px', border: 'none', outline: 'none' }}
              />
            </div>
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="email">Email (Optional)</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
            />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="address1">Address</label>
            <input
              type="text"
              id="address1"
              value={address1}
              onChange={(e) => setAddress1(e.target.value)}
              style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
            />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="address2">Address 2 (Optional)</label>
            <input
              type="text"
              id="address2"
              value={address2}
              onChange={(e) => setAddress2(e.target.value)}
              style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
            />
          </div>
          <div style={{ display: 'flex', gap: '10px', marginBottom: '15px' }}>
            <div style={{ flex: 1 }}>
              <label htmlFor="country">Country</label>
              <select
                id="country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
              >
                <option value="">Choose...</option>
                <option value="Argentina">Argentina</option>
                {/* Add more countries as needed */}
              </select>
            </div>
            <div style={{ flex: 1 }}>
              <label htmlFor="state">State</label>
              <select
                id="state"
                value={state}
                onChange={(e) => setState(e.target.value)}
                style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
              >
                <option value="">Choose...</option>
                <option value="Formosa">Formosa</option>
                {/* Add more states as needed */}
              </select>
            </div>
            <div style={{ flex: 1 }}>
              <label htmlFor="zip">Zip</label>
              <input
                type="text"
                id="zip"
                value={zip}
                onChange={(e) => setZip(e.target.value)}
                style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
              />
            </div>
          </div>
          <button type="submit" style={{ backgroundColor: '#007bff', color: 'white', padding: '10px 15px', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
            Continue to Payment
          </button>
        </form>
      </div>
      <div style={{ width: '300px', padding: '20px', border: '1px solid #ccc', borderRadius: '4px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
          <h2>Your cart</h2>
          <span style={{ backgroundColor: '#007bff', color: 'white', borderRadius: '50%', width: '24px', height: '24px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>3</span>
        </div>
        {products.map((product, index) => (
          <div key={index} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
            <div>
              <div style={{ fontWeight: 'bold' }}>{product.name}</div>
              <div style={{ fontSize: '0.9em', color: '#666' }}>{product.description}</div>
            </div>
            <div>${product.price}</div>
          </div>
        ))}
        <hr style={{ borderTop: '1px solid #eee', marginBottom: '10px' }} />
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
          <div style={{ color: '#28a745', fontWeight: 'bold' }}>Promo code</div>
          <div style={{ color: '#28a745' }}>- $5</div>
        </div>
        <hr style={{ borderTop: '1px solid #eee', marginBottom: '15px' }} />
        <div style={{ display: 'flex', justifyContent: 'space-between', fontWeight: 'bold', fontSize: '1.1em' }}>
          <div>Total (USD)</div>
          <div>${total}</div>
        </div>
        <div style={{ display: 'flex', marginTop: '15px' }}>
          <input
            type="text"
            placeholder="Promo code"
            value={promoCode}
            onChange={(e) => setPromoCode(e.target.value)}
            style={{ flex: 1, padding: '8px', marginRight: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
          />
          <button
            type="button"
            onClick={handlePromoCode}
            style={{ backgroundColor: '#6c757d', color: 'white', padding: '10px 15px', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
          >
            Redeem
          </button>
        </div>
      </div>
    </div>

    </div>
    </div>
  )
}

export default PagosForm
