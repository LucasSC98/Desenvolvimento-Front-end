import { Link } from "react-router-dom";
import { rooms } from "../data/rooms";
import "./Rooms.css";

const Rooms = () => {
  return (
    <div className="rooms-container">
      <h1>Nossos Quartos</h1>
      <div className="rooms-grid">
        {rooms.map((room) => (
          <div key={room.id} className="room-card">
            <h2>{room.name}</h2>
            <p>{room.description}</p>
            <p className="price">R$ {room.price}/noite</p>
            <Link to={`/room/${room.id}`} className="view-details">
              Ver Detalhes
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rooms;
