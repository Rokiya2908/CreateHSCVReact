interface Props {
    Name: string;
    UserName: string;
    Password: string;
    Division: string;
    DocumentType: string;
}

function EmployeeInformation(
    { Name, UserName, Password, Division, DocumentType }: Props
) {
    return (
        // <table> 
        //     <thead>
        //         <tr>
        //             <th>Name</th>
        //             <th>User Name</th>
        //             <th>Division</th>
        //             <th>Document Type</th>
        //         </tr>
        //     </thead>
        //     <tr>

        //     </tr>
        // </table>
        <div>
            <p>Name : {Name}  </p>
            <p>UserName : {UserName}  </p>
            <p>Division : {Division}  </p>
            <p>Document Type : {DocumentType}  </p>
        </div>
    );
}

export default EmployeeInformation