import './App.css';
import one from './Assets/1.jpg';
import two from './Assets/2.jpg';
import three from './Assets/3.jpg';
import four from './Assets/4.jpg';
import five from './Assets/5.jpg';
import six from './Assets/6.jpg';
import seven from './Assets/7.jpg';
import eight from './Assets/8.jpg';
import nine from './Assets/9.jpg';
import ten from './Assets/10.jpg';
import eleven from './Assets/11.jpg';
import twelve from './Assets/12.jpg';
import thirteen from './Assets/13.jpg';
import fourteen from './Assets/14.jpg';
import fifteen from './Assets/15.jpg';
import sixteen from './Assets/16.jpg';
import seventeen from './Assets/17.jpg';

import { useEffect, useState } from 'react';

function App() {
  const [initialFour, setInitialFour] = useState();
  const [secondFour, setSecondFour] = useState();
  const [suffeled, setSuffeled] = useState();
  const [dataWillRender, setDataWillRender] = useState(false);

  const initialImages = [
    { id: 1, src: one },
    { id: 2, src: two },
    { id: 3, src: three },
    { id: 4, src: four },
    { id: 5, src: five },
    { id: 6, src: six },
    { id: 7, src: seven },
    { id: 8, src: eight },
  ];

  const allImages = [
    { id: 9, src: nine },
    { id: 10, src: ten },
    { id: 11, src: eleven },
    { id: 12, src: twelve },
    { id: 13, src: thirteen },
    { id: 14, src: fourteen },
    { id: 15, src: fifteen },
    { id: 16, src: sixteen },
    { id: 17, src: seventeen },
  ]

  // Selecting 4 random images from allImages array for initial display
  const selectRandomFour = (arrayData) => {
    const randomFour = [];
    while (randomFour.length < 4) {
      const random = Math.floor(Math.random() * arrayData.length);
      if (!randomFour.includes(arrayData[random])) {
        randomFour.push(arrayData[random]);
      }
    }
    return randomFour;
  };

  const combineAndShuffle = (array1, array2) => {
    const combinedArray = [...array1, ...array2];
    const shuffledArray = combinedArray.sort(() => Math.random() - 0.5);
    setSuffeled(shuffledArray);
    return shuffledArray;
  };

  const handleTimer = () => {
    setTimeout(() => {
      setDataWillRender(true);
      console.log(suffeled);
    }, 5000);
  };


  useEffect(() => {
    setInitialFour(selectRandomFour(initialImages));
    setSecondFour(selectRandomFour(allImages));
    const firstFour = selectRandomFour(initialImages);
    const secondFour = selectRandomFour(allImages);
    console.log(firstFour, secondFour);
    combineAndShuffle(firstFour, secondFour);
  }, []);



  return (
    <div className='mid_container'>
      <div className="grid grid-cols-4 w-1/2 gap-y-5 mx-auto border-2 border-green-600 py-5 px-3">
        {
          !dataWillRender ? (
            <>
              {initialFour?.map((image) => (
                <div key={image?.id} className="grid-item w-2/3 border-2 border-red-400 cursor-pointer">
                  <img className='' src={image.src} alt="random" />
                </div>
              ))}
            </>
          ) : (
            <>
              {suffeled?.map((image) => (
                <div key={image?.id} className="grid-item w-2/3 border-2 border-red-400 cursor-pointer">
                  <img className='' src={image.src} alt="random" />
                </div>
              ))}
            </>
          )
        }
      </div>
      <button onClick={handleTimer} className="bg-green-500 px-5 py-2 rounded-sm text-white font-semibold">Start Game</button>
    </div>
  );
}

export default App;
