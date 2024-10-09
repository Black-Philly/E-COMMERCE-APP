import React, { useEffect, useState} from 'react';
import image1 from "../assets/watch4.jpeg";
import image2 from "../assets/fine4.jpg";
import image3 from "../assets/dark.jpg";
import image4 from "../assets/clothes.jpg";
import image5 from "../assets/watch.jpg";
import image6 from "../assets/glasses.jpeg";
import image7 from "../assets/watch1.jpeg";
import image8 from "../assets/shoe2.jpeg";


function Carousel() {

    const images = [
        image1,
        image2,
        image3,
        image4,
        image5,
        image6,
        image7,
        image8,
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const intervalid = setInterval(() => {
            setCurrentIndex((prevIndex) => 
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
        }, 3000);   //change image every 3 seconds

        return () => clearInterval (intervalid);
    }, [images.length]);

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };


  return (
    <div className='pt-7 ' >
       
        <img 
        src={images[currentIndex]}
        alt={`Slide ${currentIndex + 1}`}
        style={{ width: '100%', height: '500px' }}
        />
    

        {/* Previous image button */}
        <button 
            onClick={goToPrevious}
            style={{
                position: 'absolute',
                top: '50%',
                left: '0',
                transform: 'translateY(-50%)',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                color:'white',
                border:'none',
                padding: '1rem',
                cursor: 'pointer'
            }}
        >
            &#10094;
        </button>

        {/* Next image button */}
        <button
            onClick={goToNext}
            style={{
                position: 'absolute',
                top: '50%',
                right: '0',
                transform: 'translateY(-50%)',
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                color:'white',
                border:'none',
                padding: '1rem',
                cursor: 'pointer'
            }}
        >
            &#10095;
        </button>

    </div>
  )
}

export default Carousel


 


