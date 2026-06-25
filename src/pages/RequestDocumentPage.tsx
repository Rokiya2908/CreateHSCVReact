import React, { useEffect , useState } from "react";
import { Navigate ,useNavigate} from "react-router-dom";

import { ExportRequestDocument, ReadRequestDocument } from "../services/RequestDocumentServices";
import type { RequestDocument } from "../types/RequestDocument";
import RequestDocumentInformation from "../components/RequestDocumentComponents";
import { useRequestDocument } from "../context/RequestDocumentContext";

function RequestDocumentList() {
    const {requestDoc, setRequestDoc} = useRequestDocument()
    const {filePath, setFilePath} = useRequestDocument()
    const navigate = useNavigate()
    const HandleFileChange = async (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        const file = e.target.files?.[0]
        if (!file) return
        const requestDoc = await ReadRequestDocument(file)
        setFilePath(file.name)
        setRequestDoc(requestDoc)
    }
    const HandleExport = async (
        e: React.MouseEvent<HTMLInputElement>,
        data: RequestDocument[]
    ) => {
        if (!data) return
        ExportRequestDocument(data)
    }
    const [currentPage, setCurrentPage] = useState(1)
    const [pageSize, setPageSize] = useState(10)

    const startIndex = (currentPage - 1) * pageSize
    const pagedRequestDocument = requestDoc.slice(startIndex, startIndex + pageSize)
    const totalShowed = Math.min(
        currentPage * pageSize,
        requestDoc.length
    )
    const totalPage = Math.ceil(
        requestDoc.length / pageSize
    )

    const HandleDelete = async (
        documentId: string
    ) => {
        if (!documentId) return
        setRequestDoc((prev : RequestDocument[])=> prev.filter(
            doc => doc["Document ID"] !== documentId
        ))
    }
    const HandleEdit = async(
        documentId : string
    ) => {
        if (!documentId) return
        navigate(`/RequestDocumentEdit/${documentId}`)
    }

    return (
        <>
            <h1>Request Document Information</h1>
            <div>
                <input
                    type="file"
                    onChange={HandleFileChange}
                />
                <input
                    type="button"
                    value="Export"
                    onClick={(e) => HandleExport(e, requestDoc)}
                />
            </div>
            <div>
                <select
                    value={pageSize}
                    onChange={(e) => {
                        if (currentPage >= totalPage)
                            setCurrentPage(1)
                        setPageSize(Number(e.target.value))
                    }
                    }>
                    <option value='10'>10</option>
                    <option value='20'>20</option>
                    <option value='50'>50</option>
                    <option value='100'>100</option>
                </select>
            </div>
            {pagedRequestDocument.length > 0 && (
                <>
                    <table>
                        <thead>
                            <tr>
                                <th>Document Number</th>
                                <th>Document Description</th>
                                <th>Date Created</th>
                                <th>Lead</th>
                                <th>Deadline</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            <RequestDocumentInformation
                                RequestDocuments={pagedRequestDocument}
                                onDelete={HandleDelete}
                                onEdit={HandleEdit}
                            />
                        </tbody>
                    </table>
                    <div>
                        <p>Showed {totalShowed} in total of {requestDoc.length}</p>
                    </div>
                    <div>

                        <button
                            onClick={() => {

                                setCurrentPage(currentPage - 1)

                            }
                            }
                            disabled={currentPage === 1}
                        >
                            Previous
                        </button>
                        <button
                            onClick={() => {
                                setCurrentPage(currentPage + 1)
                            }
                            }
                            disabled={currentPage >= totalPage}
                        >
                            Next
                        </button>
                    </div>
                </>
            )}

        </>
    )
}

export default RequestDocumentList