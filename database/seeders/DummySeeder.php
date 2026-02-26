<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Str;
use App\Models\Candidate;

class DummySeeder extends Seeder
{
    public function run(): void
    {
        Candidate::insert([
            [
                'nik' => '3213062112010001',
                'nama_lengkap' => 'M Fauzan Hanif',
                'tempat_lahir' => 'Subang',
                'tanggal_lahir' => '2001-12-21',
                'jenis_kelamin' => 'LAKI-LAKI',
                'hasil_psikotes' => 'SIAP',
                'no_surat' => '001',
                'kode_verifikasi' => Str::random(16),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'nik' => '3209012345670002',
                'nama_lengkap' => 'Siti Aisyah',
                'tempat_lahir' => 'Cirebon',
                'tanggal_lahir' => '2018-05-10',
                'jenis_kelamin' => 'PEREMPUAN',
                'hasil_psikotes' => 'CUKUP RAGU-RAGU',
                'no_surat' => '002',
                'kode_verifikasi' => Str::random(16),
                'created_at' => now(),
                'updated_at' => now(),
            ],
            [
                'nik' => '3209012345670003',
                'nama_lengkap' => 'Muhammad Rizki',
                'tempat_lahir' => 'Cirebon',
                'tanggal_lahir' => '2019-01-25',
                'jenis_kelamin' => 'LAKI-LAKI',
                'hasil_psikotes' => 'PROSES',
                'no_surat' => '003',
                'kode_verifikasi' => Str::random(16),
                'created_at' => now(),
                'updated_at' => now(),
            ],
        ]);
    }
}
