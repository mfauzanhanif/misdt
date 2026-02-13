<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('beranda');
})->name('beranda');

Route::get('/profil', function () {
    return Inertia::render('profil');
})->name('profil');

Route::get('/program', function () {
    return Inertia::render('program');
})->name('program');

Route::get('/fasilitas', function () {
    return Inertia::render('fasilitas');
})->name('fasilitas');

Route::get('/ppdb', function () {
    return Inertia::render('ppdb');
})->name('ppdb');

Route::get('/kontak', function () {
    return Inertia::render('kontak');
})->name('kontak');

Route::get('/bio', function () {
    return Inertia::render('bio');
})->name('bio');
