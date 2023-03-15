interface Props {
  isLoading: boolean;
  isPaused?: boolean;
}

const AudioLoader = ({ isLoading, isPaused }: Props) => {
  if (isLoading) return null;
  if (!isPaused) return null;

  return (
    <div className="flex items-center justify-center w-full mt-4">
      <div className="flex justify-center items-center space-x-1 text-sm text-white">
        <svg
          fill="currentColor"
          className="w-6 h-6 animate-spin"
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            d="M15.165 8.53a.5.5 0 01-.404.58A7 7 0 1023 16a.5.5 0 011 0 8 8 0 11-9.416-7.874.5.5 0 01.58.404z"
            fill="currentColor"
            fillRule="evenodd"
          />
        </svg>

        <div>Loading station ...</div>
      </div>
    </div>
  );
};

export default AudioLoader;
