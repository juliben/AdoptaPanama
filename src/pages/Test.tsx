import { DogBlob } from "../components/DogBlob";
import { CatBlob } from "./../components/CatBlob";

const Test = () => {
  return (
    <div className="flex-center h-screen w-screen bg-gray-500">
      <CatBlob />
      <DogBlob />
    </div>
  );
};

export default Test;
