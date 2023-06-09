import InfoPage from "../components/InfoPage";

const Contact = () => {
    return <InfoPage>
        <>
            <h1>Contact us</h1>
            <form action="/przetwarzanie_formularza" method="POST">
                <label htmlFor="imie_nazwisko">Imię i nazwisko:</label>
                <input type="text" id="imie_nazwisko" name="imie_nazwisko" required/>
                <label htmlFor="email">Adres e-mail:</label>
                <input type="email" id="email" name="email" required/>
                <label htmlFor="telefon">Numer telefonu:</label>
                <input type="tel" id="telefon" name="telefon" required/>
                <label htmlFor="temat">Temat wiadomości:</label>
                <input type="text" id="temat" name="temat" required/>
                <label htmlFor="wiadomosc">Treść wiadomości:</label>
                <textarea id="wiadomosc" name="wiadomosc" rows="5" cols="30" required></textarea>

                <input type="submit" value="Wyślij"/>



            </form>





        </>
    </InfoPage>
}

export default Contact