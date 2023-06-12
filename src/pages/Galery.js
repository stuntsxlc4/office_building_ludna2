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

            <div>
                <img src={photo1} alt="" width="200px"/>
                <img src={photo2} alt="" width="200px"/>
                <img src={photo3} alt="" width="200px"/>
                <img src={photo4} alt="" width="200px"/>
                <img src={photo5} alt="" width="200px"/>
            </div>
          </>
    </InfoPage>
}

export default Gallery