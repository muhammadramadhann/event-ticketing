<?php

namespace App\Http\Controllers;

use App\Models\Event;
use Illuminate\Http\Request;

class EventClientController extends Controller
{
    public function index()
    {
        $events = Event::all();
        return inertia('Home', [
            'events' => $events
        ]);
    }
}
