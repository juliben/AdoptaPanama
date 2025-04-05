import { BlobOne } from "./BlobOne";
export function CatBlob({}) {
  return (
    <div className="relative h-120 w-120">
      <BlobOne />
      <img
        src="/gato.png"
        alt="gato"
        className="h-94 z-2 top-15 left-10 absolute"
      />
    </div>
  );
}
