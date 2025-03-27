import { useParams } from "react-router-dom";
import { rooms } from "../data/rooms";
import "./RoomDetails.css";

const RoomDetails = () => {
  const { id } = useParams<{ id: string }>();
  const room = rooms.find((r) => r.id === Number(id));

  if (!room) {
    return <div>Quarto não encontrado</div>;
  }

  return (
    <div className="room-details">
      <h1>{room.name}</h1>
      <p>{room.description}</p>
      <div className="details">
        <p>Preço: R$ {room.price}/noite</p>
        <p>Capacidade: {room.capacity} pessoas</p>
        <p>Disponível: {room.available ? "Sim" : "Não"}</p>
      </div>
    </div>
  );
};

export default RoomDetails;
