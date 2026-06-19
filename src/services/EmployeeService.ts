import type { Employee } from "../types/Employee";

export async function getEmpolyees(): Promise<Employee[]> {
    return [
        {
            Name: "Huy",
            UserName: "Huy Sung",
            Password: "Eo",
            Division: "Cam Sung",
            DocumentType: "Noob",
        },
        {
            Name: "Khang",
            UserName: "KhangVM",
            Password: "DCM",
            Division: "IT",
            DocumentType: "NO",
        }
    ]
}