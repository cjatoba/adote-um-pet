<?php

namespace App\Http\Requests;

use App\Rules\UniqueAdoptionPet;
use Illuminate\Foundation\Http\FormRequest;

class StoreAdoptionRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'email'   => ['required', 'email', new UniqueAdoptionPet($this->pet_id ?? 0)],
            'value'   => 'required|numeric|between:10,100',
            'pet_id'  => 'required|int|exists:pets,id',
        ];
    }
}
