<?php

namespace App\Models;

use App\Enum\HasilPsikotes;
use App\Enum\JenisKelamin;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

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
    ];

    protected $casts = [
        'jenis_kelamin' => JenisKelamin::class,
        'hasil_psikotes' => HasilPsikotes::class,
    ];
}
