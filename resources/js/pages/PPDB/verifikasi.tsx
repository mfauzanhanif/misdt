import GuestLayout from '@/layouts/GuestLayout';
import { Link } from '@inertiajs/react';

interface Props {
    status_validasi: 'VALID' | 'INVALID' | 'TIDAK_DITEMUKAN';
    pesan?: string;
    siswa?: {
        nama: string;
        nik_masked: string;
        tempat_lahir: string;
        tanggal_lahir: string;
        hasil_psikotes: string;
    };
}

export default function Verifikasi({ status_validasi, pesan, siswa }: Props) {
    const isValid = status_validasi === 'VALID';

    return (
        <GuestLayout title="Verifikasi Dokumen">
            {/* Header */}
            <section className="bg-gradient-to-br from-primary-800 to-primary-900 py-16 text-white">
                <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
                    <h1 className="font-heading mb-3 text-4xl font-bold">Verifikasi Dokumen</h1>
                    <p className="text-primary-200">Sistem Verifikasi e-Doc — MIS Dar Al Tauhid</p>
                </div>
            </section>

            {/* Content */}
            <section className="section-padding bg-gray-50">
                <div className="mx-auto max-w-xl px-4 sm:px-6 lg:px-8">
                    <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">

                        {/* Icon & Status */}
                        <div className="mb-8 text-center">
                            <div className={`mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full ${isValid ? 'bg-primary-100' : 'bg-red-100'
                                }`}>
                                {isValid ? (
                                    <svg className="h-10 w-10 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                ) : (
                                    <svg className="h-10 w-10 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                )}
                            </div>

                            <h2 className={`font-heading text-2xl font-bold uppercase tracking-wide ${isValid ? 'text-primary-700' : 'text-red-600'
                                }`}>
                                {isValid ? 'Dokumen Asli' : 'Tidak Valid'}
                            </h2>
                            <p className="mt-2 text-sm text-gray-500">
                                {isValid
                                    ? 'Surat ini sah dan resmi diterbitkan oleh sistem e-Doc MIS Dar Al Tauhid.'
                                    : pesan}
                            </p>
                        </div>

                        {/* Data Siswa */}
                        {isValid && siswa && (
                            <div className="mb-6 rounded-xl border border-gray-100 bg-gray-50 p-6">
                                <h3 className="mb-4 border-b border-gray-200 pb-2 text-xs font-bold uppercase tracking-wider text-gray-400">
                                    Informasi Tercantum
                                </h3>

                                <dl className="space-y-4 text-sm">
                                    <div>
                                        <dt className="mb-1 text-gray-500">Nama Peserta Didik</dt>
                                        <dd className="text-lg font-bold capitalize text-gray-900">{siswa.nama}</dd>
                                    </div>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <dt className="mb-1 text-gray-500">NIK</dt>
                                            <dd className="font-mono font-medium text-gray-800">{siswa.nik_masked}</dd>
                                        </div>
                                        <div>
                                            <dt className="mb-1 text-gray-500">TTL</dt>
                                            <dd className="font-medium capitalize text-gray-800">{siswa.tempat_lahir}, {siswa.tanggal_lahir}</dd>
                                        </div>
                                    </div>
                                    <div>
                                        <dt className="mb-1 text-gray-500">Status Seleksi</dt>
                                        <dd>
                                            <span className={`inline-block rounded-full px-3 py-0.5 text-xs font-semibold uppercase ${siswa.hasil_psikotes === 'SIAP'
                                                ? 'bg-primary-600 text-white'
                                                : 'bg-amber-500 text-white'
                                                }`}>
                                                {siswa.hasil_psikotes === 'SIAP' ? 'LULUS (SIAP)' : siswa.hasil_psikotes}
                                            </span>
                                        </dd>
                                    </div>
                                </dl>
                            </div>
                        )}

                        {/* Detail Penerbitan */}
                        {isValid && (
                            <div className="mb-6 rounded-xl border border-gray-100 bg-gray-50 p-6">
                                <h3 className="mb-4 border-b border-gray-200 pb-2 text-xs font-bold uppercase tracking-wider text-gray-400">
                                    Detail Penerbitan
                                </h3>
                                <dl className="space-y-3 text-sm">
                                    <div className="flex items-start gap-3">
                                        <dt className="w-36 shrink-0 text-gray-500">Diterbitkan oleh</dt>
                                        <dd className="font-medium text-gray-800">: Sistem e-Doc MIS Dar Al Tauhid</dd>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <dt className="w-36 shrink-0 text-gray-500">Distempel oleh</dt>
                                        <dd className="font-medium text-gray-800">: MIS Dar Al Tauhid</dd>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <dt className="w-36 shrink-0 text-gray-500">Ditandatangan oleh</dt>
                                        <dd className="font-medium text-gray-800">: Hj. Fuaidiyah, S.Pd.I.</dd>
                                    </div>
                                    <div className="flex items-start gap-3">
                                        <dt className="w-36 shrink-0 text-gray-500">Titi Mangsa</dt>
                                        <dd className="font-medium text-gray-800">: 27 Februari 2026</dd>
                                    </div>
                                </dl>
                            </div>
                        )}

                        {/* Tombol Kembali */}
                        <div className="mt-8 text-center">
                            <Link
                                href="/"
                                className="inline-flex items-center gap-2 rounded-xl border-2 border-gray-200 px-6 py-3 text-sm font-semibold text-gray-700 transition-all hover:border-primary-200 hover:bg-primary-50 hover:text-primary-700"
                            >
                                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                                </svg>
                                Kembali ke Beranda
                            </Link>
                        </div>
                    </div>

                    {/* Footnote */}
                    <p className="mt-6 text-center text-xs text-gray-400">
                        Waktu Scan: {new Date().toLocaleString('id-ID')}
                    </p>
                </div>
            </section>
        </GuestLayout>
    );
}
