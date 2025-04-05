export const LinePath = () => {
  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 426 229"
      fill="none"
      className="relative translate-x-[-8%] translate-y-[-2%] scale-105 z-20"
    >
      <path
        id="curve"
        d="M1 228C21.6667 205.333 73.8 160 133 156C207 151 211.5 151.5 236.5 145.5C261.5 139.5 271.5 137.5 307.5 115.5C333.305 99.7305 359.833 69.5 369.5 60.5L425 1"
        stroke="white"
        strokeWidth="18"
      />
      <text className="text-xs" fill="black">
        {[...Array(5)].map((_, index) => (
          <textPath
            key={index}
            xlinkHref="#curve"
            href="#curve"
            startOffset={index * 20 + "%"}
            dominantBaseline={"middle"}
          >
            Adopta
          </textPath>
        ))}
      </text>
    </svg>
  );
};
