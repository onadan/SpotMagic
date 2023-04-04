import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
import { features } from "./constants/features";

const env = {
  clientId: import.meta.env.VITE_SPOTIFY_CLIENT_ID,
  redirectUri: import.meta.env.VITE_SPOTIFY_REDIRECT_URI,
  authEndpoint: import.meta.env.VITE_SPOTIFY_AUTH_ENDPOINT,
  responseType: import.meta.env.VITE_SPOTIFY_RESPONSE_TYPE,
};

const Note = () => {
  return (
    <div className="bg-primary h-[30px] text-white font-bold text-sm flex justify-center items-center">
      🚀 Made with 🤍 by &nbsp;
      <span>
        <a
          href="https://github.com/onadan"
          target="_blank"
          className="underline"
        >
          onadan
        </a>
      </span>
    </div>
  );
};

function App() {
  const [token, setToken] = useState();

  useEffect(() => {
    let token = window.localStorage.getItem("token");
    setToken(token);
  }, []);

  return (
    <>
      {/* <div className="bg-primary h-[30px] text-white font-bold text-sm flex justify-center items-center">
        🚀 Made with 🤍 by &nbsp;
        <span>
          <a
            href="https://github.com/onadan"
            target="_blank"
            className="underline"
          >
            onadan
          </a>
        </span>
      </div> */}
      <div className="w-full h-full flex flex-col justify-center items-center">
        <header className="flex flex-col items-center text-white mt-10 md:mt-20 h-full w-full">
          <h1 className="text-primary text-6xl font-bold">
            Spot<span className="text-white">Magic</span>
          </h1>
          <p className="uppercase font-semibold text-xs text-center my-4">
            Personalized auto-generated playlist in one click!
          </p>

          <div className="mt-5">
            <ConnectButton isConnected={token} logOut />
          </div>
        </header>

        {!token && (
          <section className="px-4 ">
            <div className="bg-primary max-w-[400px] w-full p-4 rounded-lg mt-10">
              <header className="text-xl font-semibold text-white border-l-4 pl-2">
                Features
              </header>
              <ul className=" text-dark font-medium">
                {features.map((feat, idx) => (
                  <li className="my-2" key={idx}>
                    - {feat.title}
                  </li>
                ))}
                <li className="my-2 font-semibold">...and more coming soon</li>
                {/* <li>Hey</li> */}
              </ul>
            </div>
          </section>
        )}

        {token && (
          <>
            <main className="flex justify-center px-4 mt-10 mb-10">
              <div className="w-full flex justify-center">
                <div className="grid sm:grid-cols-2 w-full sm:w-max gap-4">
                <Card description={"Suprise Me!"} available={true} />
                  {features.map((feat, idx) => (
                    <Card
                      key={idx}
                      description={feat.title}
                      available={feat.available}
                    />
                  ))}
                  
                </div>
              </div>
            </main>
          </>
        )}
      </div>
    </>
  );
}

export default App;

const ConnectButton = ({ isConnected }) => {
  const handleClick = () => {
    if (isConnected) {
      window.localStorage.removeItem("token");
      window.location.reload();
    } else {
      window.location.href = `${env.authEndpoint}?client_id=${env.clientId}&redirect_uri=${env.redirectUri}&response_type=${env.responseType}`;
    }
  };
  return (
    <>
      <button
        className={`${
          isConnected
            ? "bg-primary text-dark"
            : "text-primary hover:text-dark hover:bg-primary"
        } border border-primary rounded-full p-2 px-4 font-bold flex gap-2 items-center`}
        onClick={handleClick}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 30 30"
          width="30px"
          height="30px"
          fill="currentColor"
        >
          <path d="M15,3C8.4,3,3,8.4,3,15s5.4,12,12,12s12-5.4,12-12S21.6,3,15,3z M19.731,21c-0.22,0-0.33-0.11-0.55-0.22 c-1.65-0.991-3.74-1.54-5.94-1.54c-1.21,0-2.53,0.22-3.63,0.44c-0.22,0-0.44,0.11-0.55,0.11c-0.44,0-0.77-0.33-0.77-0.77 s0.22-0.77,0.66-0.77c1.43-0.33,2.861-0.55,4.401-0.55c2.53,0,4.84,0.66,6.82,1.76c0.22,0.22,0.44,0.33,0.44,0.77 C20.39,20.78,20.06,21,19.731,21z M20.94,17.921c-0.22,0-0.44-0.11-0.66-0.22c-1.87-1.21-4.511-1.87-7.37-1.87 c-1.43,0-2.751,0.22-3.74,0.44c-0.22,0.11-0.33,0.11-0.55,0.11c-0.55,0-0.881-0.44-0.881-0.881c0-0.55,0.22-0.77,0.77-0.991 c1.32-0.33,2.641-0.66,4.511-0.66c3.08,0,5.94,0.77,8.361,2.2c0.33,0.22,0.55,0.55,0.55,0.881 C21.82,17.48,21.491,17.921,20.94,17.921z M22.37,14.4c-0.22,0-0.33-0.11-0.66-0.22c-2.2-1.21-5.39-1.98-8.47-1.98 c-1.54,0-3.19,0.22-4.621,0.55c-0.22,0-0.33,0.11-0.66,0.11c-0.66,0.111-1.1-0.44-1.1-1.099s0.33-0.991,0.77-1.1 C9.39,10.22,11.26,10,13.24,10c3.41,0,6.93,0.77,9.681,2.2c0.33,0.22,0.66,0.55,0.66,1.1C23.471,13.96,23.03,14.4,22.37,14.4z" />
        </svg>
        <p>{isConnected ? "Spotify Connected" : "Connect your Spotify"}</p>
      </button>
    </>
  );
};

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
