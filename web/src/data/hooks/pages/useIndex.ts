import { useState, useEffect } from "react";
import { Pet } from '../../@types/Pet';
import { ApiService } from '../../services/ApiService';
import { AxiosError } from "axios";

export function useIndex() {
    const [petsList, setPetsList] = useState<Pet[]>([]),
    [selectedPet, setSelectedPet] = useState<Pet | null>(null),
    [email, setEmail] = useState<string>(''),
    [value, setValue] = useState<number>(0),
    [message, setMessage] = useState<string>('');

    useEffect(() => {
        ApiService.get('/pets')
            .then(response => {
                setPetsList(response.data);
            })
    }, [])

    useEffect(() => {
        if (selectedPet === null) {
            formClear();
        }
    }, [selectedPet]);

    function handleAdopt() {
        if (selectedPet !== null) {
            if (validateAdoptionData()) {
                ApiService.post('/adocoes', {
                    pet_id: selectedPet.id,
                    email,
                    value
                })
                    .then(() => {
                        setSelectedPet(null);
                        setMessage('Pet adotado com sucesso!');
                    })
                    .catch((error: AxiosError ) => {
                        setMessage(error.response?.data.message);
                    })
            } else {
                setMessage('Por favor preencha todos os campos');
            }
        }
    }

    function validateAdoptionData() {
        return email.length > 0 && value.toString.length > 0;
    }

    function formClear() {
        setEmail('');
        setValue(0);
    }

    return {
        petsList,
        selectedPet,
        setSelectedPet,
        email,
        setEmail,
        value,
        setValue,
        message,
        setMessage,
        handleAdopt
    };
}