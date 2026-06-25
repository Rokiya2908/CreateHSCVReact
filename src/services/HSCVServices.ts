import type { HSCV } from "../types/HSCV";
import * as XLSX from "xlsx"

export async function ReadHSCV(
    file: File
): Promise<HSCV[]> {

    const data = await file.arrayBuffer()
    const workbook = XLSX.read(data)
    const worksheet = workbook.Sheets[workbook.SheetNames[0]]
    const row = XLSX.utils.sheet_to_json(worksheet)

    return row.map((row: any) => ({
        "ID" : row["HSCV ID"],
        "Doc Number" : row["Ký Hiệu"],
        "Description" : row["Trích yếu"],
        "Date Created" : row["Ngày BH"],
        "PIC" : row["Chuyên viên"],
        "Status" : row["Status"],
        "Regex" : row["RegexResult"],
        "Doc Related" : row["VB liên quan"],
        "Time Saved" : row["Thời hạn lưu trữ"],
        "Division" : row["Phân loại"]
    })).sort((a,b) => new Date(a["Date Created"]).getTime() - new Date(b["Date Created"]).getTime())
}

