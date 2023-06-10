import InfoPage from "../components/InfoPage";

const Location = () => {
    return <InfoPage>
        <>
            <h1>Lokalizacja</h1>
            <p>Sąsiedztwo oferuje szereg obiektów handlowych, kulturalnych i usługowych – sklepy, bary, kawiarnie i restauracje, muzea i teatry, a także banki oraz centra medyczne.</p>

                <p>Lokalizacja inwestycji oddaje ducha nowoczesnego środowiska miejskiego. Ludna 2 jest doskonale skomunikowany z liniami metra, autobusowymi, tramwajowymi i kolejowymi, zapewniającymi dostępność z każdej dzielnicy i przedmieścia.</p>
            <h2>Mapa Ludna 2, Warszawa</h2>

            <iframe
                width="600"
                height="450"
                src="https://www.google.com/maps?q=Ludna%202,%20Warszawa&output=embed"
                allowFullScreen
            ></iframe>

            <p>
                Adres: Ludna 2, Warszawa
                Koordynaty GPS: 52.222222, 21.111111
            </p>
        </>
    </InfoPage>
}

export default Location