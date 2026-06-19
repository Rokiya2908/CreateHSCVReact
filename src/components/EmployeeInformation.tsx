import type { Employee } from "../types/Employee";

interface Props {
    Employees: Employee[]
}

function EmployeeInformation(
    { Employees }: Props
) {
    return (
        <>
            {Employees.map((employee) => (
                <tr key={employee.UserName}>
                    <td>{employee.Name}</td>
                    <td>{employee.UserName}</td>
                    <td>{employee.Division}</td>
                    <td>{employee.DocumentType}</td>
                </tr>
            ))}
        </>
    );
}

export default EmployeeInformation