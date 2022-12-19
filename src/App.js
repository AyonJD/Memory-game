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

function App() {
  const allImages = [
    { id: 1, src: one },
    { id: 2, src: two },
    { id: 3, src: three },
    { id: 4, src: four },
    { id: 5, src: five },
    { id: 6, src: six },
    { id: 7, src: seven },
    { id: 8, src: eight },
    { id: 9, src: nine },
    { id: 10, src: ten },
    { id: 11, src: eleven },
    { id: 12, src: twelve },
    { id: 13, src: thirteen },
  ];

  const selectRandomFour = () => {
    const randomFour = [];
    while (randomFour.length < 4) {
      const random = Math.floor(Math.random() * allImages.length);
      if (!randomFour.includes(allImages[random])) {
        randomFour.push(allImages[random]);
      }
    }
    return randomFour;
  };

  return (
    <div className='mid_container'>
      <div className="grid grid-cols-4 w-1/2 mx-auto border-2 border-green-600 py-5 px-3">
        {selectRandomFour()?.map((image) => (
          <div className="grid-item w-2/3 border-2 border-red-400 cursor-pointer">
            <img className='' src={image.src} alt="random" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
