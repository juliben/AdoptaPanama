type Props = {
  log: any;
};

const Debug = ({ log }: Props) => {
  return (
    <button
      onClick={() => console.log(log)}
      className="bg-primary px-4 py-2 text-lg shadow rounded-full m-5"
    >
      Debug
    </button>
  );
};

export default Debug;
