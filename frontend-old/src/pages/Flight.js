import { useParams } from "react-router-dom";

const Flight = () => {
  const { airline, flight } = useParams();

  // fetch from API

  return (
    <div>
      <p>Flight</p>
    </div>
  );
};

export default Flight;
