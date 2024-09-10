import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

const ReportDetail = () => {
    const { id } = useParams<{ id: string }>();
    const [report, setReport] = useState<any | null>(null);

    useEffect(() => {
        const fetchReport = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/reports/${id}`);
                setReport(response.data);
            } catch (error) {
                console.error('Error fetching report details:', error);
            }
        };

        fetchReport();
    }, [id]);

    if (!report) return <div>Loading...</div>;

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Rapor Detayı</h1>
            <div className="bg-white shadow-md rounded-lg p-6">
                <div className="mb-4">
                    <h2 className="text-xl font-semibold">Dosya Numarası:</h2>
                    <p>{report.fileNumber}</p>
                </div>
                <div className="mb-4">
                    <h2 className="text-xl font-semibold">Hasta Adı:</h2>
                    <p>{report.hastaName}</p>
                </div>
                <div className="mb-4">
                    <h2 className="text-xl font-semibold">Hasta TC:</h2>
                    <p>{report.hastaTC}</p>
                </div>
                <div className="mb-4">
                    <h2 className="text-xl font-semibold">Tanı Başlığı:</h2>
                    <p>{report.taniTitle}</p>
                </div>
                <div className="mb-4">
                    <h2 className="text-xl font-semibold">Rapor Tarihi:</h2>
                    <p>{new Date(report.taniDate).toLocaleDateString()}</p>
                </div>
                <div className="mb-4">
                    <h2 className="text-xl font-semibold">Resim:</h2>
                    <img src={report.taniImage} alt="Report" className="w-full h-auto" />
                </div>
                <div className="mt-4 flex space-x-4">
                    <Link to={`/reports`}>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded">Geri Dön</button>
                    </Link>
                    <Link to={`/reports/edit/${report.id}`}>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded">Düzenle</button>
                    </Link>
                    <button
                        onClick={() => {
                            if (window.confirm('Bu raporu silmek istediğinizden emin misiniz?')) {
                                axios.delete(`http://localhost:5000/reports/${report.id}`).then(() => {
                                    window.location.href = '/reports';
                                });
                            }
                        }}
                        className="bg-red-500 text-white px-4 py-2 rounded"
                    >
                        Sil
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReportDetail;
