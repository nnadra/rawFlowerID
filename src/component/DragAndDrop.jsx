import React from 'react';
import { Trash } from 'lucide-react';
import { Stage, Layer, Image as KonvaImage } from 'react-konva';
import useImage from 'use-image';
import useImageCustom from '../data/ImageCustom';

const URLImage = ({ image }) => {
  const [img] = useImage(image.src);
  if (!img) return null;

  return (
    <KonvaImage
      image={img}
      x={image.x}
      y={image.y}
      offsetX={img ? img.width / 2 : 0}
      offsetY={img ? img.height / 2 : 0}
      width={100} // misalnya ukuran gambar 100px
      height={100}
      draggable
    />
  );
};

const StaticBackground = ({ src, stageWidth, stageHeight }) => {
  const [img] = useImage(src);

  return (
    img && (
      <KonvaImage
        image={img}
        x={stageWidth / 2}
        y={stageHeight / 2}
        offsetX={img.width / 2}
        offsetY={img.height / 2}
        listening={false}
      />
    )
  );
};

const DragAndDrop = () => {
  const images = useImageCustom((state) => state.images);
  const addImage = useImageCustom((state) => state.addImage);
  const removeImage = useImageCustom((state) => state.removeImage);

  console.log("📦 Semua images dari Zustand:", images);

  const stageRef = React.useRef();
  const dragUrl = React.useRef();

  const [selectedIndex, setSelectedIndex] = React.useState(null);

  const stageWidth = window.innerWidth * 0.8; // 50% layar, biar pas sebelahan
  const stageHeight = window.innerHeight - 150; // supaya muat, minus footer height


  return (
    <div className="h-screen flex flex-col bg-white">
      <div
        className="flex-1 flex justify-center items-center border-b-1 border-amber-950"
        onDrop={(e) => {
          e.preventDefault();
          stageRef.current.setPointersPositions(e);
          const pos = stageRef.current.getPointerPosition();
          if (!pos) return;
          const fallbackPos = { x: stageWidth / 2, y: stageHeight / 2 };
          const imagePosition = pos || fallbackPos;
          const src = e.dataTransfer.getData("src");
          const price = parseInt(e.dataTransfer.getData("price")) || 0; //ambil harga

          if (src) {
            addImage({ ...imagePosition, src, price }); //kirim ke Zustand
          }
        }}
        onDragOver={(e) => e.preventDefault()}
      >
        <Stage width={stageWidth} height={stageHeight} ref={stageRef}>
          <Layer>
            <StaticBackground src="/src/assets/paper-bouquet.svg" stageWidth={stageWidth} stageHeight={stageHeight} />
            {images.map((image, index) => (
              <URLImage key={index} image={image} />
            ))}
          </Layer>
        </Stage>
      </div>

      {/* kiri bawah */}
      <div className="bg-[#FFF5E3] h-[150px] overflow-x-auto border-t-4 border-amber-950">
        <div className="flex items-center gap-4 px-4 py-4">
          {images.map((image, index) => (
            <div key={index} className="relative">
              <div
                className={`py-2 px-5 bg-white rounded-lg shadow-lg cursor-pointer ${
                  selectedIndex === index ? 'border-1 border-amber-950' : ''
                }`}
                onClick={() => setSelectedIndex(index)}
              >
                <img
                  src={image.src}
                  className="w-20"
                  draggable
                  onDragStart={(e) => {
                    dragUrl.current = e.target.src;
                  }}
                />
                <div className="text-center">
                  <h3 className="text-lg font-bold whitespace-nowrap">Flower</h3>
                </div>
              </div>
              {selectedIndex === index && (
                <div
                  className="absolute top-0 right-0 w-8 h-8 bg-amber-950 rounded-full flex items-center justify-center text-white cursor-pointer"
                  onClick={() => removeImage(index)}
                >
                  <Trash size={16} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DragAndDrop;
