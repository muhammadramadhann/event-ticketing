<?php

namespace App\Http\Controllers;

use App\Models\Event;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class EventClientController extends Controller
{
    public function index(Request $request)
    {
        // $selectedFilter = [];

        // if ($request->filters) {
        //     array_push($selectedFilter, ...$request->filters);
        //     $events = DB::table('events')->where(function ($query) use ($selectedFilter) {
        //         for ($i = 0; $i < count($selectedFilter); $i++) {
        //             if ($selectedFilter[$i] == "Online") {
        //                 $query->where('city', 'like',  '%Online%')->orWhere('category', 'like',  '%' . $selectedFilter[$i] . '%');
        //             }
        //             if ($selectedFilter[$i] == "Offline") {
        //                 $query->where('city', 'not like',  '%Online%')->orWhere('category', 'like',  '%' . $selectedFilter[$i] . '%');
        //             }
        //             $query->orWhere('category', 'like',  '%' . $selectedFilter[$i] . '%');
        //         }
        //     })->get();

        //     return inertia('Home', [
        //         'events' => $events,
        //         'selectedFilter' => $selectedFilter
        //     ]);
        // }

        $events = Event::paginate(9);
        return inertia('Home', [
            'events' => $events
        ]);
    }
}
