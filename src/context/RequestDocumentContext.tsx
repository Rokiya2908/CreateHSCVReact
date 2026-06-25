import { createContext, useContext, useState } from "react";
import type { RequestDocument } from "../types/RequestDocument";

const RequestDocumentContext = createContext<any>(null);

export function RequestDocumentProvider({ children }: any) {
    const [requestDoc, setRequestDoc] =  useState<RequestDocument[]>([]);
    const [filePath, setFilePath] = useState("")

    return (
        <RequestDocumentContext.Provider
            value={{
                requestDoc,
                setRequestDoc,
                filePath,
                setFilePath
            }}
        >
            {children}
        </RequestDocumentContext.Provider>
    );
}

export const useRequestDocument = () =>
    useContext(RequestDocumentContext);