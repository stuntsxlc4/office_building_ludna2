import InfoPage from "../components/InfoPage";
import {useState} from "react";

const Contact = () => {
    const [info, setInfo] = useState('');
    const [name, setName] = useState('');
    // const [phone, setPhone] = useState('');
    // const [phone, setPhone] = useState('');
    // const [phone, setPhone] = useState('');
    // const [phone, setPhone] = useState('');

    const [error, setError] = useState(false);


    const handleSubmit = (e) => {
        e.preventDefault();
        setError(false);

        if (name.length < 5) {
            setError('Imię jest za krótkie');
            return;
        }

        // if(phone.length < 5) {
        //     setError('Imię jest za krótkie');
        // }


        setInfo('Formularz zosta wysłąny')
        setName('');
    }

    return <InfoPage>
        <>
            <h1>Contact us</h1>
            <form onSubmit={handleSubmit} method="POST">
                <label htmlFor="imie_nazwisko">Imię i nazwisko:</label>
                <input type="text" id="imie_nazwisko" name="imie_nazwisko" value={name}
                       onChange={(e) => setName(e.target.value)}/>

                <label htmlFor="email">Adres e-mail:</label>
                <input type="email" id="email" name="email"/>

                <label htmlFor="telefon">Numer telefonu:</label>
                <input type="tel" id="telefon" name="telefon"/>

                <label htmlFor="temat">Temat wiadomości:</label>
                <input type="text" id="temat" name="temat"/>

                <label htmlFor="wiadomosc">Treść wiadomości:</label>
                <textarea id="wiadomosc" name="wiadomosc" rows="5" cols="30"></textarea>

                <input type="submit" value="Wyślij"/>

            </form>
            <div style={{background: 'red'}}>{error}</div>
            <div style={{background: 'green'}}>{info}</div>

            <p>Ludna 2 00-406 Warszawa</p>

        </>
    </InfoPage>
}

export default Contact