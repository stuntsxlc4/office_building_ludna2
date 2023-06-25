import InfoPage from "../components/InfoPage";

import photo1 from '../assets/img.png';
import photo2 from '../assets/img_1.png'
import photo3 from '../assets/img_2.png'
import photo4 from '../assets/img4.png'
import photo5 from '../assets/img5.png'
const Gallery = () => {
    console.log(photo1);

    return <InfoPage>
        <>
            <h1>Gallery</h1>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '15px' }}>
                <img src={photo1} alt="" width="30%"/>
                <img src={photo2} alt="" width="30%"/>
                <img src={photo3} alt="" width="30%"/>
                <img src={photo4} alt="" width="30%"/>
                <img src={photo5} alt="" width="30%"/>

            </div>
          </>
    </InfoPage>
}

export default Gallery