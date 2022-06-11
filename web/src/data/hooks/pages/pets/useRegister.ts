import { useState } from "react";
import { ApiService } from "../../../services/ApiService";
import { AxiosError } from "axios";

export function useRegister() {
    const [name, setName] = useState(''),
        [history, setHistory] = useState(''),
        [picture, setPicture] = useState(''),
        [message, setMessage] = useState('');

    function register() {
        if (formValidation()) {
            ApiService.post('/pets', {
                name,
                history,
                picture
            }).then(() => {
                formClear();
                setMessage('Pet cadastrado com sucesso!');
            }).catch((error: AxiosError) => {
                // setMessage(error.message);
                setMessage(error.response?.data.message);
            });
        } else {
            setMessage('Preencha todos os campos');
        }
    }

    function formValidation() {
        return name.length > 2 && history.length > 20 && picture.length > 5;
    }

    function formClear() {
        setName('');
        setHistory('');
        setPicture('');
    }

    return {
        name,
        setName,
        history,
        setHistory,
        picture,
        setPicture,
        message,
        setMessage,
        register
    }
}