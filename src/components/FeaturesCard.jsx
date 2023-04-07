const Card = ({ description, available }) => {
    return (
      <div
        className={`${
          !available && "opacity-75 hover:scale-100"
        } bg-primary w-full sm:w-[300px] h-[150px] rounded-lg backdrop-blur shadow-lg flex flex-col justify-center items-center p-4 text-white font-semibold text-center gap-4 cursor-pointer  ease-in-out duration-100`}
      >
        <p>{description}</p>
        {available ? (
          <>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
              />
            </svg>
          </>
        ) : (
          <>
            <p>Coming Soon!</p>
          </>
        )}
      </div>
    );
  };

  export default Card