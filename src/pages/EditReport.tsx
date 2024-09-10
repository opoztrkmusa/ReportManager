import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { TypesForm } from '../types/types';

const ReportEdit = () => {
    const { id } = useParams<{ id: string }>();
    const navigate = useNavigate();
    const [form, setForm] = useState<TypesForm | null>(null);

    useEffect(() => {
        const fetchReport = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/reports/${id}`);
                setForm(response.data);
            } catch (error) {
                console.error('Error fetching report:', error);
                navigate('/reports');
            }
        };

        fetchReport();
    }, [id, navigate]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({
            ...form!,
            [e.target.name]: e.target.value,
        });
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0] || null;
        setForm(prev => ({
            ...prev,
            taniImage: file
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (form) {
            try {
                const formData = new FormData();
                formData.append('fileNumber', form.fileNumber);
                formData.append('hastaName', form.hastaName);
                formData.append('hastaTC', form.hastaTC);
                formData.append('taniTitle', form.taniTitle);
                formData.append('taniDetail', form.taniDetail);
                formData.append('taniDate', form.taniDate);
                if (form.taniImage) formData.append('taniImage', form.taniImage);

                await axios.put(`http://localhost:5000/reports/${id}`, formData, {
                    headers: { 'Content-Type': 'multipart/form-data' }
                });
                navigate('/reports');
            } catch (error) {
                console.error('Error updating report:', error);
            }
        }
    };

    return (
        <div className='px-12'>
            <div className="flex items-center justify-center p-12">
                <div className="mx-auto w-full max-w-[550px] bg-white p-12 rounded-lg">
                    <h1 className="text-2xl font-bold mb-4">Raporu Düzenle</h1>
                    {form ? (
                        <form onSubmit={handleSubmit}>
                            <div className="mb-5">
                                <label className="mb-3 block text-base font-medium text-[#07074D]">Dosya numarası</label>
                                <input
                                    required
                                    type="text"
                                    name="fileNumber"
                                    value={form.fileNumber}
                                    onChange={handleChange}
                                    className="w-full rounded-md border border-gray-400 bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                />
                            </div>

                            <div className="mb-5">
                                <label className="mb-3 block text-base font-medium text-[#07074D]">Hasta Ad ve Soyad</label>
                                <input
                                    required
                                    type="text"
                                    name="hastaName"
                                    value={form.hastaName}
                                    onChange={handleChange}
                                    className="w-full rounded-md border border-gray-400 bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                />
                            </div>

                            <div className="mb-5">
                                <label className="mb-3 block text-base font-medium text-[#07074D]">Hasta Kimlik Numarası (TC)</label>
                                <input
                                    required
                                    type="text"
                                    name="hastaTC"
                                    value={form.hastaTC}
                                    onChange={handleChange}
                                    className="w-full rounded-md border border-gray-400 bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                />
                            </div>

                            <div className="mb-5">
                                <label className="mb-3 block text-base font-medium text-[#07074D]">Koyulan Tanı Başlığı</label>
                                <input
                                    required
                                    type="text"
                                    name="taniTitle"
                                    value={form.taniTitle}
                                    onChange={handleChange}
                                    className="w-full rounded-md border border-gray-400 bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                />
                            </div>

                            <div className="mb-5">
                                <label className="mb-3 block text-base font-medium text-[#07074D]">Tanı Detayları</label>
                                <textarea
                                    name="taniDetail"
                                    value={form.taniDetail}
                                    onChange={handleChange}
                                    required
                                    className="w-full rounded-md border border-gray-400 bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                />
                            </div>

                            <div className="-mx-3 flex flex-wrap">
                                <div className="w-full px-3 sm:w-1/2">
                                    <div className="mb-5">
                                        <label className="mb-3 block text-base font-medium text-[#07074D]">Raporun Verildiği Tarih</label>
                                        <input
                                            type="date"
                                            required
                                            name="taniDate"
                                            value={form.taniDate}
                                            onChange={handleChange}
                                            className="w-full rounded-md border border-gray-400 bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="mb-5">
                                <label className="mb-3 block text-base font-medium text-[#07074D]">Fiziksel Rapora Ait .png/.jpg Formatında Bir Adet Fotoğraf</label>
                                <input
                                    id="example1"
                                    type="file"
                                    onChange={handleFileChange}
                                    className="mt-2 block w-full text-sm file:mr-4 file:rounded-md file:border-0 file:bg-teal-600 file:py-2 file:px-4 file:text-sm file:font-semibold file:text-white hover:file:bg-teal-700 focus:outline-none disabled:pointer-events-none disabled:opacity-60"
                                />
                            </div>

                            <div className='mt-12'>
                                <button
                                    type="submit"
                                    className="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-6 text-center text-base font-semibold text-white outline-none"
                                >
                                    Güncelle
                                </button>
                            </div>
                        </form>
                    ) : (
                        <p>Yükleniyor...</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ReportEdit;
