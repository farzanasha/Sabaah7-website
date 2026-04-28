<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// --- PAGES UTAMA ---
Route::get('/', fn () => Inertia::render('Home'))->name('home');
Route::get('/about', fn () => Inertia::render('About'))->name('about');
Route::get('/businesses', fn () => Inertia::render('Businesses'))->name('businesses');
Route::get('/gallery', fn () => Inertia::render('Gallery'))->name('gallery');
Route::get('/contact', fn () => Inertia::render('Contact'))->name('contact');

// --- SISTEM PRODUK (FOLDER products) ---

// Halaman Utama Products (Membaca resources/js/Pages/products/index.jsx)
Route::get('/products', fn () => Inertia::render('products/index'))->name('products.index');

// Sub-Pages Produk
Route::get('/products/junior', fn () => Inertia::render('products/JuniorIceCream'))->name('products.junior');
Route::get('/products/soja', fn () => Inertia::render('products/Soja'))->name('products.soja');
Route::get('/products/meelantak', fn () => Inertia::render('products/MeeLantak'))->name('products.meelantak');
Route::get('/products/kecil-molek', fn () => Inertia::render('products/KecilMolek'))->name('products.kecil');

require __DIR__.'/auth.php';