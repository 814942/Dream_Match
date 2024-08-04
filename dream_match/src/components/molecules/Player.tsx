import Image from "next/image";

interface PlayerProps {
  id: string;
  image: string;
}

const Player: React.FC<PlayerProps> = ({ id, image }) => {
  const handleDragStart = (event: React.DragEvent) => {
    event.dataTransfer.setData('text/plain', id);
  };

  return (
    <div
      id={id}
      draggable
      onDragStart={handleDragStart}
      className="w-16 h-16 text-white flex items-center justify-center rounded-lg border border-green"
    >
      <Image
        src={image}
        alt={id}
        height={80}
        width={80}
        className="rounded-xl"
      />
    </div>
  );
};

export default Player;
