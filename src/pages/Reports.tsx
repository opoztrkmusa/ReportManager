import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Reports = () => {
    const [reports, setReports] = useState<any[]>([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

    useEffect(() => {
        const fetchReports = async () => {
            try {
                const response = await axios.get('http://localhost:5000/reports');
                setReports(response.data);
            } catch (error) {
                console.error('Error fetching reports:', error);
            }
        };

        fetchReports();
    }, []);

    const handleDelete = async (id: string) => {
        if (window.confirm('Bu raporu silmek istediğinizden emin misiniz?')) {
            try {
                await axios.delete(`http://localhost:5000/reports/${id}`);
                setReports(reports.filter(report => report.id !== id));
            } catch (error) {
                console.error('Error deleting report:', error);
            }
        }
    };

    const filteredReports = reports
        .filter(report =>
            report.hastaName.toLowerCase().includes(searchTerm.toLowerCase()) ||
            report.hastaTC.includes(searchTerm)
        )
        .sort((a, b) =>
            sortOrder === 'asc'
                ? new Date(a.taniDate).getTime() - new Date(b.taniDate).getTime()
                : new Date(b.taniDate).getTime() - new Date(a.taniDate).getTime()
        );

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold mb-6 text-gray-800">Raporlar</h1>

            {/* Arama ve Sıralama */}
            <div className="mb-6 flex flex-col md:flex-row gap-4">
                <input
                    type="text"
                    placeholder="Hasta adı veya TC ile ara"
                    className="w-full md:w-1/2 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <select
                    value={sortOrder}
                    onChange={(e) => setSortOrder(e.target.value as 'asc' | 'desc')}
                    className="w-full md:w-1/4 p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    <option value="asc">Artan Tarih</option>
                    <option value="desc">Azalan Tarih</option>
                </select>
            </div>

            <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
                <thead>
                    <tr className="bg-gray-100 border-b">
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Dosya No</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Hasta Adı</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Hasta TC</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tanı Başlığı</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tarih</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Resim</th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">İşlemler</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredReports.map((report) => (
                        <tr key={report.id} className="border-b">
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{report.fileNumber}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{report.hastaName}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{report.hastaTC}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{report.taniTitle}</td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{new Date(report.taniDate).toLocaleDateString()}</td>
                            <td className="px-6 py-4 whitespace-nowrap">
                                <img src={report.taniImage} alt="Report" className="w-16 h-16 object-cover rounded-lg" />
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                                <Link to={`/reports/${report.id}`} className="text-blue-600 hover:text-blue-800">Detay</Link>
                                <Link to={`/reports/edit/${report.id}`} className="ml-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">Düzenle</Link>
                                <button
                                    onClick={() => handleDelete(report.id)}
                                    className="ml-4 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
                                >
                                    Sil
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Reports;
