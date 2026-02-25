<!DOCTYPE html>
<html lang="id">

<head>
    <meta charset="UTF-8">
    <title>Surat Keputusan PPDB - {{ $siswa['nama'] }}</title>
    <style>
        /* Matikan margin bawaan kertas */
        @page {
            margin: 0cm;
        }

        body {
            font-family: 'Times New Roman', Times, serif;
            font-size: 11pt;
            line-height: 1.25;
            margin: 0;
            padding: 0;
        }

        /* Area Kop Surat */
        .kop-surat {
            /* Margin Atas 1cm, Kanan 2.5cm, Bawah 0, Kiri 2.5cm */
            margin: 1cm 1.5cm 0 1.5cm;
            text-align: center;
        }

        .kop-surat img {
            width: 100%;
            height: auto; /* Memastikan rasio gambar 2000x512 tetap terjaga */
            display: block;
        }

        /* Area konten surat */
        .content {
            padding: 0 2.5cm 1.5cm 2.5cm;
            /* Atas 0, Kanan 2.5cm, Bawah 1.5cm, Kiri 2.5cm */
        }

        .teks-tengah {
            text-align: center;
        }

        .teks-justify {
            text-align: justify;
        }

        table {
            width: 100%;
            border-collapse: collapse;
        }

        .tabel-identitas td {
            padding: 2px 0;
            vertical-align: top;
        }

        /* Tabel Jadwal TANPA KOTAK */
        .tabel-jadwal {
            margin-top: 5px;
            margin-bottom: 5px;
            margin-left: 15px;
        }

        .tabel-jadwal td {
            padding: 2px 0;
            vertical-align: top;
        }

        .ttd-area {
            width: 100%;
            margin-top: 15px;
            page-break-inside: avoid;
        }

        .ttd-area td {
            width: 50%;
            text-align: center;
            vertical-align: bottom;
        }

        .qr-code {
            margin: 5px auto;
        }

        /* Reset margin paragraf */
        p {
            margin: 0;
            padding: 0;
        }
    </style>
</head>

<body>
    <div class="kop-surat">
        <img src="data:image/png;base64,{!! base64_encode(file_get_contents(public_path('images/kop-surat.png'))) !!}"
            alt="Kop Surat MIS Dar Al Tauhid">
    </div>

    <br />

    <div class="content">
        <table>
            <tr>
                <td style="width: 15%;">Nomor</td>
                <td style="width: 3%;">:</td>
                <td style="width: 82%;">MI.DT.10.09/179/PPDB-II/IV/2026</td>
            </tr>
            <tr>
                <td>Lampiran</td>
                <td>:</td>
                <td>-</td>
            </tr>
            <tr>
                <td style="vertical-align: top;">Perihal</td>
                <td style="vertical-align: top;">:</td>
                <td><strong>Pemberitahuan Hasil Penerimaan Peserta Didik Baru</strong></td>
            </tr>
        </table>

        <br />
        <br />

        <p>Kepada Yth.<br>Orang Tua/Wali <strong>{{ $sapaan }} {{ $siswa['nama'] }}</strong><br>di Tempat</p>

        <br />
        <br />

        <p><strong><em>Assalamu’alaikum Warahmatullahi Wabarakatuh</em></strong></p>

        <br />

        <p class="teks-justify">Salam silaturahim kami sampaikan semoga Bapak/Ibu selalu dalam limpahan karunia dan
            rahmat Allah SWT. <em>Aamiin.</em></p>

        <br />

        <p class="teks-justify">Berdasarkan Hasil Keputusan Panitia Penerimaan Peserta Didik Baru MIS Dar Al Tauhid
            Tahun Ajaran
            2026/2027, dengan ini menetapkan :</p>

        <br />

        <table class="tabel-identitas" style="margin-left: 15px;">
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

        <br />

        @if($siswa['hasil_psikotes'] === 'SIAP')
            <p class="teks-justify">Berdasarkan hasil Psikotes Penerimaan Peserta Didik Baru Tahun Ajaran 2026/2027 terhadap
                {{ $sapaan }} <strong style="text-transform: capitalize;">{{ $siswa['nama'] }}</strong> dinyatakan
                <strong>SIAP</strong> dan <strong>LULUS</strong>. Selanjutnya, kami memohon untuk
                senantiasa melaksanakan Wawancara, Daftar Ulang dan Pengukuran Seragam pada:
            </p>

            <br />

            <div class="tabel-jadwal">
                <table>
                    <tr>
                        <td style="width: 25%;">Hari, Tanggal</td>
                        <td style="width: 3%;">:</td>
                        <td><strong>Jum'at, 3 April 2026</strong></td>
                    </tr>
                    <tr>
                        <td>Waktu</td>
                        <td>:</td>
                        <td>08.00 s.d. Selesai</td>
                    </tr>
                    <tr>
                        <td>Tempat</td>
                        <td>:</td>
                        <td>Ruang Kelas MIS Dar Al Tauhid</td>
                    </tr>
                </table>
            </div>

            <br />

            <p class="teks-justify">Saat pelaksanaan daftar ulang, Bapak/Ibu wali murid diperkenankan untuk melakukan
                pelunasan biaya administrasi <strong>minimal sebesar 50%</strong> dari total biaya yang telah ditentukan.
            </p>
        @else
            <p class="teks-justify">Berdasarkan hasil Psikotes Penerimaan Peserta Didik Baru Tahun Ajaran 2026/2027 terhadap
                {{ $sapaan }} <strong style="text-transform: capitalize;">{{ $siswa['nama'] }}</strong> dinyatakan
                <strong>{{ $siswa['hasil_psikotes'] }}</strong>. Selanjutnya, kami mengundang Bapak/Ibu beserta
                {{ $sapaan }} untuk
                mengikuti tahap <strong>Observasi Lanjutan</strong> pada:
            </p>

            <br />

            <div class="tabel-jadwal">
                <table>
                    <tr>
                        <td style="width: 25%;">Hari, Tanggal</td>
                        <td style="width: 3%;">:</td>
                        <td><strong>Selasa, 3 Maret 2026</strong></td>
                    </tr>
                    <tr>
                        <td>Waktu</td>
                        <td>:</td>
                        <td>08.00 s.d. 12.00 WIB</td>
                    </tr>
                    <tr>
                        <td>Tempat</td>
                        <td>:</td>
                        <td>Ruang Kelas MIS Dar Al Tauhid</td>
                    </tr>
                </table>
            </div>
        @endif

        <br />

        <p class="teks-justify">Demikian surat pemberitahuan ini kami sampaikan, atas perhatian dan kerjasamanya kami
            ucapkan
            terimakasih.</p>

        <br />

        <p><strong><em>Wassalamu’alaikum Warahmatullahi Wabarakatuh</em></strong></p>

        <br />

        <table class="ttd-area">
            <tr>
                <td></td>
                <td>
                    Arjawinangun, 27 Februari 2026<br>
                    Kepala MIS Dar Al Tauhid,<br>

                    <div class="qr-code">
                        <img src="data:image/svg+xml;base64,{!! base64_encode(QrCode::format('svg')->size(70)->margin(0)->generate($url_validasi)) !!}"
                            alt="QR Code Validasi">
                    </div>

                    <strong><u>Hj. Fuaidiyah, S.Pd.I.</u></strong>
                </td>
            </tr>
        </table>
    </div>

    <div
        style="position: fixed; bottom: 0; left: 0; width: 100%; border-top: 1px solid #999; padding: 8px 2.5cm; text-align: center;">
        <p style="font-size: 8pt; color: #666; line-height: 1.4; font-style: italic; margin: 0;">
            Surat ini sah, diterbitkan, distempel dan ditandatangani secara elektronik.<br>
            Untuk memastikan keaslian dokumen, silakan pindai QR Code pada surat ini.
        </p>
    </div>
</body>

</html>
