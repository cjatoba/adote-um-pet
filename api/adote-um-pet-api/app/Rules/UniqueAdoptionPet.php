<?php

namespace App\Rules;

use App\Models\Adoption;
use App\Models\Pet;
use Illuminate\Contracts\Validation\Rule;

class UniqueAdoptionPet implements Rule
{
    /**
     * Create a new rule instance.
     *
     * @return void
     */
    public function __construct(
        private int $petId
    )
    {}

    /**
     * Determine if the validation rule passes.
     *
     * @param  string  $attribute
     * @param  mixed  $value
     * @return bool
     */
    public function passes($attribute, $value)
    {
        $adoption = Adoption::where('email', $value)
            ->where('pet_id', $this->petId)
            ->first();

        return !$adoption;
    }

    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message()
    {
        return 'Você já adotou este pet.';
    }
}
