import { BlobTwo } from "./BlobTwo";
import { BlobTwoClipPath } from "./BlobTwoClipPath";
export function DogBlob({}) {
  return (
    <div className="relative w-full h-auto max-w-[500px] mx-auto ">
      <BlobTwo />
      <BlobTwoClipPath />
      <img
        src="/perro.png"
        alt="perro"
        className="w-1/2 inset-0 absolute scale-x-[-1] translate-[9.5%] translate-x-[53%] "
        style={{ clipPath: "url(#blob-two)" }}
      />
    </div>
  );
}
