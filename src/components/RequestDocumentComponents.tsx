import React, { useEffect, useState } from "react";

import type { RequestDocument } from "../types/RequestDocument";


interface Props {
    RequestDocuments: RequestDocument[]
    onDelete : (documentId : string) => void
    onEdit : (documentId : string) => void
}

function RequestDocumentInformation(
    { RequestDocuments , onDelete, onEdit}: Props
) {

    return (
        <>
            {RequestDocuments.map((RequestDocument) => (
                <tr key={RequestDocument["Document ID"]}>
                    <td>{RequestDocument["Document Number"]}</td>
                    <td>{RequestDocument["Document Description"].substring(0, 50) + "..."}</td>
                    <td>{RequestDocument["Date Created"]}</td>
                    <td>{RequestDocument["Lead"]}</td>
                    <td>{RequestDocument["Deadline"]}</td>
                    <td>
                        <input type="button" value="Delete" 
                        onClick={() => onDelete(RequestDocument["Document ID"])}/>
                        <input type="button" 
                        onClick={() => onEdit(RequestDocument["Document ID"])}
                        value="Edit"/>
                    </td>
                </tr>
            ))}
        </>
    );

}


export default RequestDocumentInformation