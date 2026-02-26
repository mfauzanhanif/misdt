<?php

namespace App\Models;

use App\Enum\HasilPsikotes;
use App\Enum\JenisKelamin;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Candidate extends Model
{
    use HasFactory;

    protected $fillable = [
        'nik',
        'nama_lengkap',
        'tempat_lahir',
        'tanggal_lahir',
        'jenis_kelamin',
        'hasil_psikotes',
        'no_surat',
        'kode_verifikasi',
    ];

    protected static function boot()
    {
        parent::boot();

        static::creating(function ($candidate) {
            if (empty($candidate->kode_verifikasi)) {
                $candidate->kode_verifikasi = Str::random(16);
            }
        });
    }

    protected $casts = [
        'jenis_kelamin' => JenisKelamin::class,
        'hasil_psikotes' => HasilPsikotes::class,
    ];
}
