import React, { useState } from 'react';
import './Sns.css';

const Sns = () => {
  const [imageData, setImageData] = useState([
    {
      src: 'https://www.selecto.co.kr/upload/picture_file/mainSns/20231010103252_o2xqz7.jpg',
      alt: 'Coffee',
      description: `[NEW MENU]
                    고소한 가을을 만나다 & 옥수수 오트 프라페
                    짭쪼름한 옥수수 크런치와 달콤고소한 
                    옥수수 오트 쉐이크의 단짠단짠 프라페`,
    },
    {
      src: 'https://www.selecto.co.kr/upload/picture_file/mainSns/20231005104919_4ieyh8.jpg',
      alt: 'Coffee',
      description: `[NEW MENU]
                    고소한 가을을 만나다 & 옥수수 오트 카페라떼
                    화사한 산미의 에스프레소에 달콤한 옥수수
                    크림과 오트가 조화로운 커피
                    `,
    },
    {
      src: 'https://www.selecto.co.kr/upload/picture_file/mainSns/20231005104909_zfya9d.jpg',
      alt: 'Coffee',
      description: `[NEW MENU]
                    고소한 가을을 만나다 & 옥수수 오트 카페라떼
                    옥수수와 곡물 오트라떼의 고소함이 밸런스가
                    좋은 시원한 라떼
                    `,
    },
  ]);

  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section className="sns_wrap">
      <div className="inner">
        <div className="sns_header">
          <div>
            <img src="https://www.selecto.co.kr/assets/images/main/m-6th_sec-header_icon.svg" alt="" />
            <p>selecto_coffee</p>
          </div>
        </div>
        <div className="sns_imgs">
          <div className="imgs_inner">
            {imageData.map((item, index) => (
              <div
                key={index}
                className="image_container"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <img src={item.src} alt={item.alt} className="cursor" />
                {hoveredIndex === index && (
                  <div className="tooltip">
                    {item.description.split('\n').map((line, i) => (
                      <p key={i}>{line}</p>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sns;
