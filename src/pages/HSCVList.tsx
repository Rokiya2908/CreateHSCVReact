import { useState, useEffect } from 'react'
import type { HSCV } from '../types/HSCV'
import { ReadHSCV } from '../services/HSCVServices'
import HSCVInformation from '../components/HSCVComponents';

function HSCVList() {

    const [HSCV, setHSCV] = useState<HSCV[]>([]);
    const HandleFileChange = async (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        const file = e.target.files?.[0];
        if (!file) return;
        const result = await ReadHSCV(file);
        setHSCV(result)
    }
    const [currentPage, setCurrentPage] = useState(1)
    const [pageSize, setPageSize] = useState(10)
    const startIndex = (currentPage - 1) * pageSize
    const pagedHSCV = HSCV.slice(startIndex, startIndex + pageSize)

    return (
        <>
            <h1>HSCV Information</h1>
            <div>
                <input
                    type="file"
                    onChange={HandleFileChange}
                />
            </div>
            <div>
                <select
                    value={pageSize}
                    onChange={(e) => setPageSize(Number(e.target.value))}>
                    <option value='10'>10</option>
                    <option value='20'>20</option>
                    <option value='50'>50</option>
                </select>
            </div>
            {pagedHSCV.length > 0 && (
                <>
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Doc Number</th>
                                <th>Description</th>
                                <th>Date Created</th>
                                <th>PIC</th>
                                <th>Status</th>
                                <th>Regex</th>
                                <th>Doc Related</th>
                                <th>Time Saved</th>
                                <th>Division</th>
                            </tr>
                        </thead>
                        <tbody>
                            <HSCVInformation HSCVs={pagedHSCV} />
                        </tbody>
                    </table>

                    <button
                        onClick={() =>
                            setCurrentPage(currentPage - 1)
                        }
                        disabled={currentPage === 1}
                    >
                        Previous
                    </button>
                    <button
                        onClick={() =>
                            setCurrentPage(currentPage + 1)
                        }
                    >
                        Next
                    </button>
                </>
            )}

        </>
    )
}

export default HSCVList