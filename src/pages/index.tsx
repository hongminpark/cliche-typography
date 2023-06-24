import Head from "next/head";

export default function Home() {
  const [imgSrc, setImgSrc] = useState("");
  const [showRandomImage, setShowRandomImage] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      const randomImage = images[Math.floor(Math.random() * images.length)];
      setImgSrc(randomImage);
    }, 200);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const handleImageClick = (event: React.MouseEvent) => {
    event.stopPropagation(); // Prevent the event from bubbling up to the main div
    setShowRandomImage(true);
  };

  const handleScreenClick = () => {
    setShowRandomImage(false);
  };

  return (
    <>
      <Head>
        <meta name="description" content="case" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main
        className="flex min-h-screen flex-col items-center justify-center bg-white"
        onClick={handleScreenClick}
      >
        {!showRandomImage && (
          <img
            src={imgSrc}
            className="h-40 cursor-pointer object-contain"
            onClick={handleImageClick}
          />
        )}
        {showRandomImage && <RandomImageComponent />}
      </main>
    </>
  );
}

import { useEffect, useState } from "react";
import { images, searchMap } from "~/data/images";

const RandomImageComponent = () => {
  const [letters, setLetters] = useState<string[]>([]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const input = event.target.value;
    const cleanedInput = input.replace(/[^a-zA-Z]/g, "").toLowerCase();
    setLetters(cleanedInput.split(""));
  };

  const getRandomImage = (images: string | any[]) => {
    return images[Math.floor(Math.random() * images.length)];
  };

  return (
    <div className="relative flex h-screen items-center justify-center">
      {letters.length > 0 && (
        <div className="absolute inset-0 flex items-center justify-center">
          {letters.map((letter, idx) => (
            <img
              key={idx}
              src={getRandomImage(searchMap[letter])}
              className="h-10 object-contain"
            />
          ))}
        </div>
      )}
      <input
        type="text"
        className={`w-20 cursor-text border-b-2 border-black font-medium ${
          letters.length > 0 ? "opacity-0" : ""
        } focus:outline-none`}
        onChange={handleInputChange}
        onClick={(e) => {
          e.stopPropagation();
          console.log("click");
        }}
      />
    </div>
  );
};
