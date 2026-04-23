<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', fn () => Inertia::render('Home'));
Route::get('/about', fn () => Inertia::render('About'));
Route::get('/businesses', fn () => Inertia::render('Businesses'));
Route::get('/products', fn () => Inertia::render('Products'));
Route::get('/contact', fn () => Inertia::render('Contact'));
require __DIR__.'/auth.php';