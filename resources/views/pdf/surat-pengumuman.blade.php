<!DOCTYPE html>
<html lang="id">

<head>
    <meta charset="UTF-8">
    <title>Surat Pengumuman PPDB - {{ $siswa['nama'] }}</title>
    <style>
        /* Pengaturan ukuran kertas F4 dan margin dihandle langsung oleh DomPDF melalui @page */
        @page {
            /* Margin: Atas 1cm, Kanan 2cm, Bawah 2cm, Kiri 2cm */
            margin: 1cm 2cm 2cm 2cm;
        }

        body {
            font-family: 'Times New Roman', Times, serif;
            font-size: 12pt;
            line-height: 1.15;
            margin: 0;
            padding: 0;
            color: #000;
        }

        /* Area Kop Surat */
        .kop-surat {
            text-align: center;
            margin-bottom: 15px;
        }

        .kop-surat img {
            width: 100%;
            height: auto;
            /* Memastikan rasio gambar 2000x512 tetap terjaga */
            display: block;
        }

        /* Pengaturan Teks */
        .teks-justify {
            text-align: justify;
        }

        .mb-2 {
            margin-bottom: 10px;
        }

        .mb-3 {
            margin-bottom: 15px;
        }

        .mt-3 {
            margin-top: 15px;
        }

        /* Pengaturan Tabel Global */
        table {
            width: 100%;
            border-collapse: collapse;
        }

        td {
            vertical-align: top;
        }

        /* Tabel Kop/Meta Surat */
        .tabel-meta td {
            padding: 2px 0;
        }

        /* Tabel Identitas & Jadwal (Indentasi ke dalam) */
        .tabel-indent {
            margin-left: 30px;
            width: 90%;
            margin-bottom: 10px;
        }

        .tabel-indent td {
            padding: 2px 0;
        }

        /* Area Tanda Tangan */
        .ttd-area {
            width: 100%;
            margin-top: 25px;
            page-break-inside: avoid;
        }

        .ttd-area td.kosong {
            width: 65%;
        }

        .ttd-area td.isi {
            width: 35%;
            text-align: left;
        }

        .qr-code {
            margin: 10px 0;
        }

        /* Footer Elektronik Absolut di Bawah */
        .footer-elektronik {
            position: fixed;
            bottom: -30px;
            /* Masuk ke dalam area margin bottom 2cm */
            left: 0;
            width: 100%;
            border-top: 1px solid #000;
            padding-top: 5px;
            text-align: center;
        }

        .footer-elektronik p {
            font-size: 9pt;
            color: #333;
            line-height: 1.2;
            font-style: italic;
            margin: 0;
        }

        /* Reset margin paragraf bawaan browser */
        p {
            margin: 0 0 10px 0;
        }
    </style>
</head>

<body>
    <div class="kop-surat">
        <img src="data:image/png;base64,{!! base64_encode(file_get_contents(public_path('images/kop-surat.png'))) !!}"
            alt="Kop Surat MIS Dar Al Tauhid">
    </div>

    <table class="tabel-meta mb-3">
        <tr>
            <td style="width: 12%;">Nomor</td>
            <td style="width: 2%;">:</td>
            <td style="width: 86%;">MI.DT.10.09/179/{{ $siswa['no_surat'] ?? '...' }}/II/2026</td>
        </tr>
        <tr>
            <td>Lampiran</td>
            <td>:</td>
            <td>-</td>
        </tr>
        <tr>
            <td>Perihal</td>
            <td>:</td>
            <td><strong>Pengumuman Hasil Penerimaan Peserta Didik Baru</strong></td>
        </tr>
    </table>

    <p class="mb-3">
        Yth. Orang Tua/Wali <strong>{{ $sapaan }} {{ $siswa['nama'] }}</strong><br>
        di <br>
        Tempat
    </p>

    <p><strong><em>Assalamu’alaikum Warahmatullahi Wabarakatuh</em></strong></p>

    <p class="teks-justify mb-3">
        Salam silaturahim kami sampaikan semoga Bapak/Ibu selalu dalam limpahan karunia dan rahmat Allah SWT.
        <em>Aamiin.</em>
    </p>

    <p class="teks-justify">
        Hasil Keputusan Panitia Penerimaan Peserta Didik Baru MIS Dar Al Tauhid Tahun Pelajaran 2026/2027, dengan ini
        menetapkan:
    </p>

    <table class="tabel-indent mt-3 mb-3">
        <tr>
            <td style="width: 35%;">Nama</td>
            <td style="width: 3%;">:</td>
            <td style="width: 62%; text-transform: capitalize;"><strong>{{ $siswa['nama'] }}</strong></td>
        </tr>
        <tr>
            <td>Tempat, Tanggal Lahir</td>
            <td>:</td>
            <td style="text-transform: capitalize;">{{ $siswa['tempat_lahir'] }}, {{ $siswa['tanggal_lahir'] }}</td>
        </tr>
    </table>

    @if($siswa['hasil_psikotes'] === 'SIAP')
        <p class="teks-justify">
            Berdasarkan hasil Psikotes Penerimaan Peserta Didik Baru Tahun Ajaran 2026/2027 terhadap {{ $sapaan }}
            <strong style="text-transform: capitalize;">{{ $siswa['nama'] }}</strong> dinyatakan
            <strong>{{ $siswa['hasil_psikotes'] }}</strong> dan <strong>DITERIMA</strong>. Selanjutnya, kami mengundang
            Bapak/Ibu beserta {{ $sapaan }} untuk mengikuti tahapan <strong>Daftar Ulang</strong>,
            <strong>Wawancara</strong>,
            dan <strong>Pengukuran Seragam</strong>, yang akan dilaksanakan pada:
        </p>

        <table class="tabel-indent mt-3 mb-3">
            <tr>
                <td style="width: 35%;">Hari, Tanggal</td>
                <td style="width: 3%;">:</td>
                <td><strong>Jum'at, 3 April 2026</strong></td>
            </tr>
            <tr>
                <td>Waktu</td>
                <td>:</td>
                <td>08.00 WIB s.d. Selesai</td>
            </tr>
            <tr>
                <td>Tempat</td>
                <td>:</td>
                <td>MIS Dar Al Tauhid</td>
            </tr>
        </table>

        <p class="teks-justify mb-3">
            Saat pelaksanaan daftar ulang, Bapak/Ibu diperkenankan untuk melunasi biaya pendaftaran <strong>minimal
                50%</strong> dari total biaya yang telah ditentukan.
        </p>

    @else
        <p class="teks-justify">
            Berdasarkan hasil Psikotes Penerimaan Peserta Didik Baru Tahun Ajaran 2026/2027 terhadap {{ $sapaan }}
            <strong style="text-transform: capitalize;">{{ $siswa['nama'] }}</strong> dinyatakan
            <strong>{{ $siswa['hasil_psikotes'] }}</strong>. Selanjutnya, kami mengundang Bapak/Ibu beserta {{ $sapaan }}
            untuk mengikuti tahapan <strong>Observasi Lanjutan</strong>, yang akan dilaksanakan pada:
        </p>

        <table class="tabel-indent mt-3 mb-3">
            <tr>
                <td style="width: 35%;">Hari, Tanggal</td>
                <td style="width: 3%;">:</td>
                <td><strong>Selasa, 3 Maret 2026</strong></td>
            </tr>
            <tr>
                <td>Waktu</td>
                <td>:</td>
                <td>08.00 WIB s.d. Selesai</td>
            </tr>
            <tr>
                <td>Tempat</td>
                <td>:</td>
                <td>MIS Dar Al Tauhid</td>
            </tr>
        </table>
    @endif

    <p class="teks-justify mb-3">
        Demikian pengumuman ini kami sampaikan, atas perhatian dan kerjasamanya kami ucapkan terimakasih.
    </p>

    <p><strong><em>Wassalamu’alaikum Warahmatullahi Wabarakatuh</em></strong></p>
    <br>
    <p style="text-align: right;">Arjawinangun, 27 Februari 2026</p>

    <table class="ttd-area">
        <tr>
            <td class="kosong"></td>
            <td class="isi">
                Kepala MIS Dar Al Tauhid<br>

                <div class="qr-code">
                    <img src="data:image/svg+xml;base64,{!! base64_encode(QrCode::format('svg')->size(100)->margin(0)->generate($url_validasi)) !!}"
                        alt="QR Code Validasi">
                </div>

                <strong><u>Hj. Fuaidiyah, S.Pd.I.</u></strong>
            </td>
        </tr>
    </table>

    <div class="footer-elektronik">
        <p>
            Surat ini diterbitkan, distempel dan ditandatangani secara elektronik.<br>
            Untuk memastikan keaslian dokumen, silakan pindai QR code pada surat ini.
        </p>
    </div>

</body>

</html>
