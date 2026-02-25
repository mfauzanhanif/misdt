import { useForm } from '@inertiajs/react';
import { FormEventHandler } from 'react';
import { prosesCek } from '@/routes/PPDB';
import GuestLayout from '@/layouts/GuestLayout';

export default function Index() {
    const { data, setData, post, processing, errors } = useForm({
        nik: '',
        tanggal_lahir: '',
    });

    const submit: FormEventHandler = (e) => {
        e.preventDefault();
        post(prosesCek.url());
    };

    return (
        <GuestLayout title="Pengumuman Hasil Psikotes PPDB">
            {/* Header */}
            <section className="bg-gradient-to-br from-primary-800 to-primary-900 py-16 text-white">
                <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
                    <h1 className="font-heading mb-3 text-4xl font-bold">Pengumuman Hasil Psikotes</h1>
                    <p className="text-primary-200">Penerimaan Peserta Didik Baru — Tahun Ajaran 2026/2027</p>
                </div>
            </section>

            {/* Form Section */}
            <section className="section-padding bg-gray-50">
                <div className="mx-auto max-w-lg px-4 sm:px-6 lg:px-8">
                    <div className="mb-8 text-center">
                        <h2 className="font-heading mb-3 text-2xl font-bold text-gray-900">
                            Cek <span className="text-gradient">Hasil</span> Psikotes
                        </h2>
                        <p className="text-sm text-gray-500">
                            Masukkan NIK dan tanggal lahir anak untuk melihat hasil
                        </p>
                    </div>

                    <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
                        {(errors as Record<string, string>).pesan && (
                            <div className="mb-6 flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 p-4">
                                <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-100">
                                    <svg className="h-3.5 w-3.5 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </div>
                                <p className="text-sm text-red-700">{(errors as Record<string, string>).pesan}</p>
                            </div>
                        )}

                        <form onSubmit={submit} className="space-y-5">
                            <div>
                                <label className="mb-2 block text-sm font-medium text-gray-700">NIK Anak</label>
                                <input
                                    type="text"
                                    value={data.nik}
                                    onChange={(e) => setData('nik', e.target.value)}
                                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition-all focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20"
                                    placeholder="Masukkan 16 digit NIK"
                                    required
                                />
                                {errors.nik && <span className="mt-1.5 block text-xs text-red-500">{errors.nik}</span>}
                            </div>

                            <div>
                                <label className="mb-2 block text-sm font-medium text-gray-700">Tanggal Lahir</label>
                                <input
                                    type="text"
                                    value={data.tanggal_lahir}
                                    onChange={(e) => setData('tanggal_lahir', e.target.value)}
                                    className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition-all focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20"
                                    placeholder="DDMMYYYY (Cth: 17082018)"
                                    required
                                />
                                {errors.tanggal_lahir && <span className="mt-1.5 block text-xs text-red-500">{errors.tanggal_lahir}</span>}
                            </div>

                            <button
                                type="submit"
                                disabled={processing}
                                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary-600 px-8 py-3.5 text-sm font-semibold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:bg-primary-700 hover:shadow-xl disabled:opacity-70"
                            >
                                {processing ? (
                                    <>
                                        <svg className="h-4 w-4 animate-spin" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                                        </svg>
                                        Memeriksa Data...
                                    </>
                                ) : (
                                    'Cek Hasil Psikotes'
                                )}
                            </button>
                        </form>
                    </div>

                    <p className="mt-6 text-center text-sm text-gray-500">
                        Ada kendala? <a href="https://wa.me/6285624568440" target="_blank" rel="noopener noreferrer" className="font-semibold text-primary-600 hover:text-primary-700 underline underline-offset-2">Hubungi Operator via WhatsApp</a>
                    </p>
                </div>
            </section>
        </GuestLayout>
    );
}
