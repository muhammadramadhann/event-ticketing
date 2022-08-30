<?php

namespace App\Http\Controllers;

use App\Models\Event;
use Illuminate\Http\Request;

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
        return inertia('Event/index', [
            'events' => $events
        ]);
    }

    public function detail(Event $event)
    {
        return inertia('Event/Detail', [
            'event' => $event
        ]);
    }

    private function checkEventRegisOngoing($start_date, $current_date)
    {
        if ($current_date >= $start_date) {
            return true;
        } else {
            return false;
        }
    }

    private function checkCapacity($capacity)
    {
        if ($capacity < 1) {
            return true;
        } else {
            return false;
        }
    }

    public function selectTicket(Event $event)
    {
        // check if user is bandel try to masuk2in parameters in url-nya pfft
        $start_date = date('Y-m-d', strtotime(($event->start_date)));
        $current_date = date('Y-m-d');

        if ($this->checkEventRegisOngoing($start_date, $current_date) || $this->checkCapacity($event->capacity)) {
            return redirect()->back();
        }

        // check if event is free
        if ($event->price === 0) {
            return redirect()->route('event.detail.booking', [
                $event->slug,
                'tickets' => 1
            ]);
        }

        return inertia('Event/SelectTicket', [
            'event' => $event
        ]);
    }

    public function booking(Request $request, Event $event)
    {
        $total_tickets = $request->query('tickets');
        $start_date = date('Y-m-d', strtotime(($event->start_date)));
        $current_date = date('Y-m-d');

        if ($this->checkEventRegisOngoing($start_date, $current_date) || $this->checkCapacity($event->capacity)) {
            return redirect()->route('event.detail', $event->slug);
        }

        if ($event->price != 0 && $total_tickets > 3) {
            return redirect()->route('event.detail.booking', [
                $event->slug,
                'tickets' => 3
            ]);
        } else if ($event->price == 0 && $total_tickets > 1) {
            return redirect()->route('event.detail.booking', [
                $event->slug,
                'tickets' => 1
            ]);
        }

        return inertia('Event/BookData', [
            'event' => $event,
        ]);
    }
}
