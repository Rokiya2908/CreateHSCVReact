import type { HSCV } from "../types/HSCV";

interface Props {
    HSCVs: HSCV[]
}

function HSCVInformation(
    { HSCVs }: Props
) {
    return (
        <>
            {HSCVs.map((hscv) => (
                <tr key={hscv["ID"]}>
                    <td>{hscv["Doc Number"]}</td>
                    <td>{hscv["Description"]}</td>
                    <td>{hscv["Date Created"]}</td>
                    <td>{hscv["PIC"]}</td>
                    <td>{hscv["Status"]}</td>
                    <td>{hscv["Regex"]}</td>
                    <td>{hscv["Doc Related"]}</td>
                    <td>{hscv["Time Saved"]}</td>
                    <td>{hscv["Division"]}</td>
                </tr>
            ))}
        </>
    );

}



export default HSCVInformation