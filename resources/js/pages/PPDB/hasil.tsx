import { Link } from '@inertiajs/react';
import { cek } from '@/routes/PPDB';
import GuestLayout from '@/layouts/GuestLayout';

interface Siswa {
    nama: string;
    nik: string;
    tempat_lahir: string;
    tanggal_lahir: string;
    jenis_kelamin: 'LAKI-LAKI' | 'PEREMPUAN';
    hasil_psikotes: 'PROSES' | 'SIAP' | 'RAGU-RAGU' | 'CUKUP RAGU-RAGU';
}

export default function Hasil({ siswa }: { siswa: Siswa }) {
    const isSiap = siswa.hasil_psikotes === 'SIAP';
    const isProses = siswa.hasil_psikotes === 'PROSES';
    const Sapaan = siswa.jenis_kelamin === 'LAKI-LAKI' ? 'Ananda' : 'Adinda';

    // =========================================================================
    // DEFINISI JADWAL (Silakan ubah tanggal dan waktu di sini jika diperlukan)
    // =========================================================================
    const jadwalDiterima = {
        hariTanggal: "Jum'at, 3 April 2026",
        waktu: "08.00 WIB - Selesai",
        tempat: "MIS Dar Al Tauhid"
    };

    const jadwalObservasi = {
        hariTanggal: "Selasa, 3 Maret 2026",
        waktu: "08.00 WIB - 12.00 WIB",
        tempat: "MIS Dar Al Tauhid"
    };
    // =========================================================================

    const statusConfig = isSiap
        ? { icon: 'bg-primary-100', iconColor: 'text-primary-600', bg: 'border-primary-100 bg-primary-50', badge: 'border-primary-700 bg-primary-600 text-white', label: 'DITERIMA' }
        : isProses
            ? { icon: 'bg-sky-100', iconColor: 'text-sky-600', bg: 'border-sky-100 bg-sky-50', badge: 'border-sky-600 bg-sky-500 text-white', label: 'SEDANG DIPROSES' }
            : { icon: 'bg-amber-100', iconColor: 'text-amber-600', bg: 'border-amber-100 bg-amber-50', badge: 'border-amber-600 bg-amber-500 text-white', label: 'TAHAP OBSERVASI' };

    return (
        <GuestLayout title="Pengumuman Hasil PPDB">
            {/* Header */}
            <section className="bg-gradient-to-br from-primary-800 to-primary-900 py-16 text-white">
                <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
                    <h1 className="font-heading mb-3 text-4xl font-bold">Pengumuman Hasil Seleksi</h1>
                    <p className="text-primary-200">Penerimaan Peserta Didik Baru — Tahun Ajaran 2026/2027</p>
                </div>
            </section>

            {/* Hasil Section */}
            <section className="section-padding bg-gray-50 py-12">
                <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
                    <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
                        {/* Status Icon */}
                        <div className="mb-6 text-center">
                            <div className={`mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full ${statusConfig.icon}`}>
                                {isSiap ? (
                                    <svg className={`h-8 w-8 ${statusConfig.iconColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                ) : isProses ? (
                                    <svg className={`h-8 w-8 ${statusConfig.iconColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                ) : (
                                    <svg className={`h-8 w-8 ${statusConfig.iconColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                                    </svg>
                                )}
                            </div>

                            <h2 className="font-heading mb-1 text-2xl font-bold text-gray-900 capitalize">
                                {siswa.nama}
                            </h2>
                            <p className="font-mono text-sm text-gray-400">NIK: {siswa.nik}</p>
                            <p className="mt-2 text-sm text-gray-500">
                                Hasil Psikotes: <span className={`inline-block rounded-full px-3 py-0.5 text-xs font-semibold uppercase ${statusConfig.badge}`}>{siswa.hasil_psikotes}</span>
                            </p>
                        </div>

                        {/* Status Badge & Content */}
                        <div className={`mb-6 rounded-xl border p-5 text-left ${statusConfig.bg}`}>
                            <div className="mb-4 text-center">
                                <p className="mb-2 text-sm font-medium text-gray-600">Status:</p>
                                <div className={`inline-block rounded-lg border px-6 py-2 text-lg font-bold shadow-sm ${statusConfig.badge}`}>
                                    {statusConfig.label}
                                </div>
                            </div>

                            <div className="rounded-lg border border-gray-100 bg-white p-6 shadow-sm">
                                {isProses ? (
                                    // ==================================================
                                    // TAMPILAN JIKA STATUS: PROSES
                                    // ==================================================
                                    <div className="text-center">
                                        <p className="text-sm leading-relaxed text-gray-700">
                                            Hasil psikotes {Sapaan} <strong className="capitalize">{siswa.nama}</strong> dalam <strong>proses penilaian</strong>. Mohon bersabar, hasil akan diumumkan segera.
                                            <br /><br />
                                            Silakan cek kembali secara berkala di halaman ini untuk mengetahui status terbaru.
                                        </p>
                                    </div>
                                ) : (
                                    // ==================================================
                                    // TAMPILAN JIKA STATUS: SELAIN PROSES (SURAT RESMI)
                                    // ==================================================
                                    <div className="text-sm leading-relaxed text-gray-800 space-y-4">

                                        <p className="font-bold italic mt-5">Assalamu’alaikum Warahmatullahi Wabarakatuh</p>

                                        <p className="text-justify">
                                            Salam silaturahim kami sampaikan semoga Bapak/Ibu selalu dalam limpahan karunia dan rahmat Allah SWT. <em>Aamiin.</em>
                                        </p>

                                        <p className="text-justify">
                                            Hasil Keputusan Panitia Penerimaan Peserta Didik Baru MIS Dar Al Tauhid Tahun Pelajaran 2026/2027, dengan ini menetapkan :
                                        </p>

                                        {/* Tabel Identitas */}
                                        <div className="pl-4 py-2">
                                            <table className="w-full text-sm">
                                                <tbody>
                                                    <tr>
                                                        <td className="w-40 py-1 align-top">Nama</td>
                                                        <td className="w-4 py-1 align-top">:</td>
                                                        <td className="py-1 font-semibold capitalize">{siswa.nama}</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="w-40 py-1 align-top">Tempat, Tanggal Lahir</td>
                                                        <td className="w-4 py-1 align-top">:</td>
                                                        <td className="py-1 capitalize">{siswa.tempat_lahir}, {siswa.tanggal_lahir}</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>

                                        {isSiap ? (
                                            // -- KONTEN SURAT UNTUK YANG "SIAP" --
                                            <>
                                                <p className="text-justify">
                                                    Berdasarkan hasil Psikotes Penerimaan Peserta Didik  Tahun Ajaran 2026/2027 terhadap {Sapaan} <strong className="capitalize">{siswa.nama}</strong> dinyatakan <strong>{siswa.hasil_psikotes}</strong> dan <strong className="text-primary-700">LULUS</strong>. Selanjutnya, kami memohon untuk senantiasa melaksanakan Wawancara, Daftar Ulang dan Pengukuran Seragam pada:
                                                </p>

                                                <div className="pl-4 py-2 bg-gray-50 rounded-lg border border-gray-200 p-4 mt-3 mb-3 shadow-sm">
                                                    <table className="w-full text-sm">
                                                        <tbody>
                                                            <tr>
                                                                <td className="w-28 py-1 align-top font-medium">Hari, Tanggal</td>
                                                                <td className="w-4 py-1 align-top">:</td>
                                                                <td className="py-1 font-bold text-gray-900">{jadwalDiterima.hariTanggal}</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="w-28 py-1 align-top font-medium">Waktu</td>
                                                                <td className="w-4 py-1 align-top">:</td>
                                                                <td className="py-1">{jadwalDiterima.waktu}</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="w-28 py-1 align-top font-medium">Tempat</td>
                                                                <td className="w-4 py-1 align-top">:</td>
                                                                <td className="py-1">{jadwalDiterima.tempat}</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>

                                                {/* Informasi Tambahan Pembayaran 50% */}
                                                <p className="text-sm text-primary-900">
                                                    Saat pelaksanaan daftar ulang, Bapak/Ibu wali murid diperkenankan untuk melakukan pelunasan biaya administrasi <strong>minimal sebesar 50%</strong> dari total biaya yang telah ditentukan.
                                                </p>
                                            </>
                                        ) : (
                                            // -- KONTEN SURAT UNTUK YANG "RAGU-RAGU / CUKUP RAGU-RAGU" --
                                            <>
                                                <p className="text-justify">
                                                    Berdasarkan hasil Psikotes Penerimaan Peserta Didik  Tahun Ajaran 2026/2027 terhadap {Sapaan} <strong className="capitalize">{siswa.nama}</strong> dinyatakan <strong>{siswa.hasil_psikotes}</strong>. Selanjutnya, kami mengundang Bapak/Ibu beserta ananda untuk mengikuti tahap <strong>Observasi Lanjutan</strong> pada:
                                                </p>

                                                <div className="pl-4 py-2 bg-gray-50 rounded-lg border border-gray-200 p-4 mt-3 mb-3 shadow-sm">
                                                    <table className="w-full text-sm">
                                                        <tbody>
                                                            <tr>
                                                                <td className="w-28 py-1 align-top font-medium">Hari, Tanggal</td>
                                                                <td className="w-4 py-1 align-top">:</td>
                                                                <td className="py-1 font-bold text-gray-900">{jadwalObservasi.hariTanggal}</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="w-28 py-1 align-top font-medium">Waktu</td>
                                                                <td className="w-4 py-1 align-top">:</td>
                                                                <td className="py-1">{jadwalObservasi.waktu}</td>
                                                            </tr>
                                                            <tr>
                                                                <td className="w-28 py-1 align-top font-medium">Tempat</td>
                                                                <td className="w-4 py-1 align-top">:</td>
                                                                <td className="py-1">{jadwalObservasi.tempat}</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </>
                                        )}

                                        <p className="text-justify mt-4">
                                            Demikian pemberitahuan ini kami sampaikan, atas perhatian dan kerjasamanya kami ucapkan terimakasih.
                                        </p>

                                        <p className="font-bold italic mt-5">Wassalamu’alaikum Warahmatullahi Wabarakatuh</p>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Area Tombol Aksi */}
                        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                            {/* Tombol Kembali (Yang Sudah Ada) */}
                            <Link
                                href={cek.url()}
                                className="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-gray-200 px-6 py-3 text-sm font-semibold text-gray-700 transition-all hover:border-primary-200 hover:bg-primary-50 hover:text-primary-700"
                            >
                                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                                </svg>
                                Kembali ke Pencarian
                            </Link>
                            {/* Tombol Download Surat PDF (BARU) */}
                            {/* Kita render tombol ini HANYA jika statusnya SIAP atau RAGU-RAGU (Bukan PROSES) */}
                            {!isProses && (
                                <a
                                    href={`/PPDB/download-surat?nik=${siswa.nik}`}
                                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary-600 px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:bg-primary-700 hover:shadow-xl"
                                >
                                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                    </svg>
                                    Unduh Surat Resmi (PDF)
                                </a>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </GuestLayout>
    );
}
