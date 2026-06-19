import { useState, useEffect } from 'react'
import type { Employee } from '../types/Employee'
import { getEmpolyees } from '../services/EmployeeService'
import EmployeeInformation from '../components/EmployeeInformation';

function EmoplyeeList() {

    const [Employees, setEmployee] = useState<Employee[]>([]);
    useEffect(() => {
        getEmpolyees().then(data => setEmployee(data));
    }, [])
    return (
        <>
            <h1>Employee Information</h1>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>User Name</th>
                        <th>Division</th>
                        <th>Document Type</th>
                    </tr>
                </thead>
                <tbody>
                    <EmployeeInformation Employees={Employees}/>
                </tbody>
            </table>
        </>
    )
}

export default EmoplyeeList

// const [Employees, setEmployee] = useState<Employee[]>([]);
//   useEffect(() => {
//     getEmpolyees().then(data => setEmployee(data));
//   },[])
//   return (
//     <>
//       <h1>Employee Information</h1>
//       <table>
//         <thead>
//           <tr>
//               <th>Name</th>
//               <th>User Name</th>
//               <th>Division</th>
//               <th>Document Type</th>
//           </tr>
//         </thead>
//       {Employees.map(emp =>(
//         <tr>
//           <td>{emp.Name}</td>
//           <td>{emp.UserName}</td>
//           <td>{emp.Division}</td>
//           <td>{emp.DocumentType}</td>
//         </tr>
//       ))}
//       </table>
//     </>
//   )