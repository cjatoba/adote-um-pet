<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreAdoptionRequest;
use App\Http\Resources\AdoptionResource;
use App\Models\Adoption;

class AdoptionController extends Controller
{

    /**
     * index
     *
     * @return Adoption
     */
    public function index()
    {
        return AdoptionResource::collection(Adoption::all());
    }

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
