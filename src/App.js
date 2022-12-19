import './App.css';

function App() {
  const allImages = [
    { id: 1, src: 'https://ibb.co/8M2gHB6' },
    { id: 2, src: 'https://ibb.co/PxMrLbq' },
    { id: 3, src: 'https://ibb.co/C7nTL2P' },
    { id: 4, src: 'https://ibb.co/8NnCqrp' },
    { id: 5, src: 'https://ibb.co/rsZ11z9' },
    { id: 6, src: 'https://ibb.co/2KRR1KL' },
    { id: 7, src: 'https://ibb.co/tb64tSC' },
    { id: 8, src: 'https://ibb.co/CQRKxdj' },
    { id: 9, src: 'https://ibb.co/gSPPBxX' },
    { id: 10, src: 'https://ibb.co/sHn4v9L' },
    { id: 11, src: 'https://ibb.co/3hy83FW' },
    { id: 12, src: 'https://ibb.co/t2jXXmr' },
    { id: 13, src: 'https://ibb.co/w0BTJZC' },
  ];

  const selectRandomFour = () => {
    //dont repeat the same image
    const randomFour = [];
    while (randomFour.length < 4) {
      const random = Math.floor(Math.random() * allImages.length);
      if (!randomFour.includes(random)) {
        randomFour.push(allImages[random]);
      }
    }
    return randomFour;
  };

  console.log(selectRandomFour());

  return (
    <div>
      OK
    </div>
  );
}

export default App;
