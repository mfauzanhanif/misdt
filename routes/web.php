<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Controller;
use App\Http\Controllers\PPDBController;

Route::get('/', [Controller::class, 'beranda'])->name('beranda');
Route::get('/profil', [Controller::class, 'profil'])->name('profil');
Route::get('/program', [Controller::class, 'program'])->name('program');
Route::get('/fasilitas', [Controller::class, 'fasilitas'])->name('fasilitas');
Route::get('/kontak', [Controller::class, 'kontak'])->name('kontak');
Route::get('/bio', [Controller::class, 'bio'])->name('bio');

Route::prefix('PPDB')->name('PPDB.')->controller(PPDBController::class)->group(function () {
    Route::get('/', 'index')->name('index');
    Route::get('/cek-hasil', 'cek')->name('cek');
    Route::post('/proses-cek', 'prosesCek')->name('prosesCek');
    Route::get('/hasil', 'hasil')->name('hasil');
    Route::get('/download-surat', 'downloadSurat')->name('downloadSurat');
});

Route::get('/verifikasi/ppdb/{kode}', [PPDBController::class, 'verifikasi'])->name('verifikasi.ppdb');
