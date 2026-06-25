import React, { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";

import { UpdateRequestDocument, GetDocument } from "../services/RequestDocumentServices";
import { useRequestDocument } from "../context/RequestDocumentContext";

function RequestDocumentEdit(
    // HandleEditRequestDocument : (data : RequestDocument) => void
) {
    const { id } = useParams()
    const { requestDoc, setRequestDoc } = useRequestDocument()
    const [RequestDocItem, setRequestDocItem] = useState<Record<string, string>>({})
    const [oldRequestDoc, setOldRequestDoc] = useState<Record<string, string>>({})
    const [showModal, setShowModal] = useState(false)
    const keys = Object.keys(RequestDocItem)
    const navigate = useNavigate()
    console.log("This is " + id)
    useEffect(() => {
        async function loadData() {
            if (!id) return;
            const data = await GetDocument(id, requestDoc);
            if (data) {
                console.log(JSON.stringify(data))
                setRequestDocItem({ ...data });
                setOldRequestDoc({ ...data });
            }
        }

        loadData();
    }, [id]);


    const HandleEditRequestDocument = async (
        e: React.MouseEvent<HTMLButtonElement>,
        data: {}
    ) => {
        if (data == null) return "dmm"
        setShowModal(true)
    }

    const HandleOnChange = async (
        e: React.ChangeEvent<HTMLInputElement>,
        key: string,
    ) => {
        if (key == "") return "DCMM"
        setRequestDocItem(prev => ({
            ...prev,
            [key]: e.target.value
        }))

    }

    const HandleCancelEdit = async () => {
        console.log("What the fuk : " + JSON.stringify(oldRequestDoc))
        setRequestDocItem(oldRequestDoc)
        setShowModal(false)
    }

    const HandleConfirmEdit = async (
        e: React.MouseEvent<HTMLButtonElement>,
        data: {}
    ) => {
        console.log(typeof(requestDoc))
        const finalData = await UpdateRequestDocument(RequestDocItem,requestDoc)
        console.log(typeof(finalData))
        setRequestDoc(finalData)
        navigate(`/RequestDocument`)
    }

    return (
        <>
            <div style={{ display: "ruby" }}>
                {/* FORM SECTION */}
                <div style={{ display: "flex", flexDirection: "column", textAlign: "left" }}>
                    {keys.map((key) => (
                        <div
                            key={key}
                            style={{
                                display: "flex",
                                marginBottom: "8px"
                            }}
                        >
                            <label
                                style={{
                                    width: "300px",
                                    fontWeight: "bold"
                                }}
                            >
                                {key} :
                            </label>

                            <input
                                type="text"
                                value={RequestDocItem[key] ?? ""}
                                onChange={(e) => HandleOnChange(e, key)}
                                style={{ width: "300px" }}
                                readOnly={key ==="Date Created" || key == "Document ID"}
                            />
                        </div>
                    ))}

                    {/* BUTTON SECTION */}
                    <div style={{ marginTop: "20px" , textAlign: "center"}}>
                        <button onClick={(e) => HandleEditRequestDocument(e, RequestDocItem)}>
                            Edit
                        </button>

                        <button onClick={HandleCancelEdit}>
                            Cancel
                        </button>
                    </div>
                </div>


                {/* MODAL */}
                {showModal && (
                    <dialog open>
                        <p>Do you want to edit this document?</p>

                        <button onClick={() => HandleConfirmEdit(null as any, RequestDocItem)}>
                            Yes
                        </button>

                        <button onClick={HandleCancelEdit}>
                            No
                        </button>
                    </dialog>
                )}
            </div>
        </>
    )
}

export default RequestDocumentEdit