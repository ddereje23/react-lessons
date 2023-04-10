import { Shimmer } from "react-shimmer";
import { v4 as uuidv4 } from "uuid";
const ShimmerUI = () => {
  let array = new Array(15).fill(0);
  return (
    <div className="restaurant-list">
      {array.map(() => (
        <div className="restaurant" key={uuidv4()}>
          <Shimmer width={200} height={170} />
        </div>
      ))}
    </div>
  );
};

export default ShimmerUI;
