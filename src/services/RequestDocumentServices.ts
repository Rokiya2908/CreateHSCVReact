import * as XLSX from "xlsx"
import type { RequestDocument } from "../types/RequestDocument"

function validateEmpty(value: string) {
    return value == undefined ? "" : value
}

export async function ReadRequestDocument(
    file: File
): Promise<RequestDocument[]> {
    const data = await file.arrayBuffer()
    const workbook = XLSX.read(data)
    const worksheet = workbook.Sheets[workbook.SheetNames[0]]
    const row = XLSX.utils.sheet_to_json(worksheet)

    return row.map((row: any) => ({
        "Document ID": validateEmpty(row["ID Hệ Thống"]),
        "Document Number": validateEmpty(row["Ký Hiệu"]),
        "Document Description": validateEmpty(row["Trích Yếu"]),
        "Date Created": validateEmpty(row["Ngày BH"]),
        "Source Created": validateEmpty(row["CQ Ban Hành"]),
        "Lead": validateEmpty(row["Lãnh Đạo"]),
        "Deadline": validateEmpty(row["Thời Hạn"]),
        "Status": validateEmpty(row["Status"]),
        "Href": validateEmpty(row["Href"]),
        "Path Location": validateEmpty(row["Path Location"]),
        "Regex Result": validateEmpty(row["Regex"])
    }))
}

export async function ExportRequestDocument(
    RequestDocument: RequestDocument[]
) {

    const fileName = "Export.xlsx"
    const data = RequestDocument
    const worksheet = XLSX.utils.json_to_sheet(data)
    const workbook = XLSX.utils.book_new()
    XLSX.utils.book_append_sheet(workbook, worksheet, "Request Documents")
    XLSX.writeFile(workbook, fileName)
}

export async function GetDocument(
    DocumentID: string,
    RequestDocument: RequestDocument[]
) {
    return RequestDocument.find(item => item["Document ID"] == DocumentID)
}

export async function UpdateRequestDocument(
    data: Record<string,string>,
    RequestDocument: RequestDocument[]
) {
    return RequestDocument.map(item =>
        item["Document ID"] === data["Document ID"]
            ? data
            : item
    );
}