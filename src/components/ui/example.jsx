
export default function Example() {
    return (
      <>
         <div className="max-w-3xl mx-auto p-6">
      <form className="space-y-0">
        <div className="py-4 flex items-center border-b border-gray-100">
          <label htmlFor="firstName" className="w-1/3 text-gray-800 font-medium">
            First name
          </label>
          <input
            id="firstName"
            type="text"
            className="w-2/3 p-2 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-200"
          />
        </div>

        <div className="py-4 flex items-center border-b border-gray-100">
          <label htmlFor="lastName" className="w-1/3 text-gray-800 font-medium">
            Last name
          </label>
          <input
            id="lastName"
            type="text"
            className="w-2/3 p-2 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-200"
          />
        </div>

        <div className="py-4 flex items-center border-b border-gray-100">
          <label htmlFor="email" className="w-1/3 text-gray-800 font-medium">
            Email address
          </label>
          <input
            id="email"
            type="email"
            className="w-2/3 p-2 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-200"
          />
        </div>

        <div className="py-4 flex items-center border-b border-gray-100">
          <label htmlFor="country" className="w-1/3 text-gray-800 font-medium">
            Country
          </label>
          <div className="w-2/3 relative">
            <select
              id="country"
            //  value={country}
            //  onChange={(e) => setCountry(e.target.value)}
              className="w-full p-2 border border-gray-200 rounded-md appearance-none focus:outline-none focus:ring-1 focus:ring-gray-200"
            >
              <option value="United States">United States</option>
              <option value="Canada">Canada</option>
              <option value="United Kingdom">United Kingdom</option>
              <option value="Australia">Australia</option>
              <option value="Germany">Germany</option>
              <option value="France">France</option>
              <option value="Japan">Japan</option>
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
              <ChevronDown className="h-4 w-4 text-gray-500" />
            </div>
          </div>
        </div>

        <div className="py-4 flex items-center border-b border-gray-100">
          <label htmlFor="streetAddress" className="w-1/3 text-gray-800 font-medium">
            Street address
          </label>
          <input
            id="streetAddress"
            type="text"
            className="w-2/3 p-2 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-200"
          />
        </div>

        <div className="py-4 flex items-center border-b border-gray-100">
          <label htmlFor="city" className="w-1/3 text-gray-800 font-medium">
            City
          </label>
          <input
            id="city"
            type="text"
            className="w-2/3 p-2 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-200"
          />
        </div>

        <div className="py-4 flex items-center border-b border-gray-100">
          <label htmlFor="stateProvince" className="w-1/3 text-gray-800 font-medium">
            State / Province
          </label>
          <input
            id="stateProvince"
            type="text"
            className="w-2/3 p-2 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-200"
          />
        </div>

        <div className="py-4 flex items-center border-b border-gray-100">
          <label htmlFor="zipPostalCode" className="w-1/3 text-gray-800 font-medium">
            ZIP / Postal code
          </label>
          <input
            id="zipPostalCode"
            type="text"
            className="w-2/3 p-2 border border-gray-200 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-200"
          />
        </div>
      </form>
    </div>
      </>
    )
  }