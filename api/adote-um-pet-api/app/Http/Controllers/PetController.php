<?php

namespace App\Http\Controllers;

use App\Http\Requests\StorePetRequest;
use App\Models\Pet;
use Illuminate\Http\Request;

class PetController extends Controller
{

    /**
     * Get all Pets
     *
     * @return \Illuminate\Database\Eloquent\Builder[]|\Illuminate\Database\Eloquent\Collection
     */
    public function index()
    {
        return Pet::get();
    }

    /**
     * store Pet
     *
     * @param  StorePetRequest $request
     * @return Pet
     */
    public function store(StorePetRequest $request)
    {
        $dataPet = $request->validated();

        return Pet::create($dataPet);
    }
}
