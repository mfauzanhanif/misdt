<?php

namespace App\Http\Controllers;

use Inertia\Inertia;

class Controller
{
    public function beranda()
    {
        return Inertia::render('beranda');
    }

    public function profil()
    {
        return Inertia::render('profil');
    }

    public function program()
    {
        return Inertia::render('program');
    }

    public function fasilitas()
    {
        return Inertia::render('fasilitas');
    }

    public function kontak()
    {
        return Inertia::render('kontak');
    }

    public function bio()
    {
        return Inertia::render('bio');
    }
}
