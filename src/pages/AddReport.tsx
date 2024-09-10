import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addReport } from '../redux/raporlarSlice';
import { TypesForm } from '../types/types';

const AddReport = () => {
    const dispatch = useDispatch();
    const [form, setForm] = useState<TypesForm>({
        fileNumber: '',
        hastaName: '',
        hastaTC: '',
        taniTitle: '',
        taniDetail: '',
        taniDate: '',
        taniImage: null,
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setForm(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0] || null;
        setForm(prev => ({
            ...prev,
            taniImage: file
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Validation checks
        const fileNumberPattern = /^[0-9]{6,}$/; // En az 6 haneli
        const hastaTCPattern = /^[0-9]{11}$/; // 11 haneli

        if (!fileNumberPattern.test(form.fileNumber)) {
            alert('Dosya numarası en az 6 haneli olmalıdır.');
            return;
        }

        if (!hastaTCPattern.test(form.hastaTC)) {
            alert('Hasta TC Kimlik Numarası 11 haneli olmalıdır.');
            return;
        }

        // Dispatch form data to redux store
        dispatch(addReport(form));

        // Reset form values
        setForm({
            fileNumber: '',
            hastaName: '',
            hastaTC: '',
            taniTitle: '',
            taniDetail: '',
            taniDate: '',
            taniImage: null,
        });

        // Optionally, clear file input
        (document.getElementById('example1') as HTMLInputElement).value = '';
    };
 


    return (
        <div className='px-12'>
            <div className="flex items-center justify-center p-12">
                <div className="mx-auto w-full max-w-[550px] bg-white p-12 rounded-lg">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-5">
                            <label className="mb-3 block text-base font-medium text-[#07074D]">Dosya numarası</label>
                            <input
                                required
                                type="text"
                                name="fileNumber"
                                value={form.fileNumber}
                                onChange={handleChange}
                                placeholder="123456"
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
                                placeholder="Ali Veli"
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
                                placeholder="12345678901"
                                className="w-full rounded-md border border-gray-400 bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                                pattern="\d{11}" // 11 haneli numara
                                title="11 haneli bir TC Kimlik Numarası giriniz."
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
                                placeholder="Örnek Tanı Başlığı"
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
                                placeholder="Tanı detaylarını buraya yazın"
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
                                required
                                type="file"
                                onChange={handleFileChange}
                                accept=".png,.jpg"
                                className="mt-2 block w-full text-sm file:mr-4 file:rounded-md file:border-0 file:bg-teal-600 file:py-2 file:px-4 file:text-sm file:font-semibold file:text-white hover:file:bg-teal-700 focus:outline-none disabled:pointer-events-none disabled:opacity-60"
                            />
                        </div>

                        <div className='mt-12'>
                            <button
                                type="submit"
                                className="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-6 text-center text-base font-semibold text-white outline-none">
                                Raporu Ekle
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddReport;
