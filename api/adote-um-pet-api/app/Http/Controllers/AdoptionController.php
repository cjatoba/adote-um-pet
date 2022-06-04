<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreAdoptionRequest;
use App\Models\Adoption;

class AdoptionController extends Controller
{
    /**
     * store
     *
     * @param  StoreAdoptionRequest $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreAdoptionRequest $request)
    {
        return Adoption::create($request->all());
    }
}
