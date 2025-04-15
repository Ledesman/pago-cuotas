
export default function Example() {
    return (
      <>
       <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-8">
        <p className="text-gray-700">...email and role.</p>
        <Button className="bg-indigo-600 hover:bg-indigo-700">Add user</Button>
      </div>

      <div className="overflow-hidden border-b border-gray-200 rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-white">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-sm font-medium text-gray-900 tracking-wider">
                Title
              </th>
              <th scope="col" className="px-6 py-3 text-left text-sm font-medium text-gray-900 tracking-wider">
                Status
              </th>
              <th scope="col" className="px-6 py-3 text-left text-sm font-medium text-gray-900 tracking-wider">
                Role
              </th>
              <th scope="col" className="relative px-6 py-3">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          {/* <tbody className="bg-white divide-y divide-gray-200">
             {users.map((user, index) => ( 
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex flex-col">
                    <div className="text-sm font-medium text-gray-900">{user.title}</div>
                    <div className="text-sm text-gray-500">{user.subtitle}</div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-3 py-1 inline-flex text-xs leading-5 font-medium rounded-full bg-green-100 text-green-800">
                    {user.status}
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{user.role}</td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <a href="#" className="text-indigo-600 hover:text-indigo-900">
                    Edit
                  </a>
                </td>
              </tr>
            ))}
          </tbody> */}
        </table>
      </div>
    </div>
      </>
    )
  }