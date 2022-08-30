<?php

use App\Http\Controllers\EventClientController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', [EventClientController::class, 'index'])->name('event');
Route::prefix('event')->group(function () {
    Route::get('{event:slug}', [EventClientController::class, 'detail'])->name('event.detail');
    Route::get('{event:slug}/select-ticket', [EventClientController::class, 'selectTicket'])->name('event.detail.select');
    Route::get('{event:slug}/booking', [EventClientController::class, 'booking'])->name('event.detail.booking');
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->name('dashboard');

require __DIR__ . '/auth.php';
