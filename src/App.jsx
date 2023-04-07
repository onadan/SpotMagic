import { useEffect, useState } from "react";
import ConnectButton from "./components/ConnectButton";
import SpotifyIcon from "./components/SpotifyIcon";
import Card from "./components/FeaturesCard";
import { features } from "./constants/features";
import { disconnect } from "./service/authService";
import { getUserInfo } from "./api/spotify_api";

function App() {
  const [token, setToken] = useState();
  const [connected, setConnected] = useState(false);
  const [user, setUser] = useState("");

  useEffect(() => {
    let token = window.localStorage.getItem("access_token");
    if (token) {
      setConnected(true);
      setToken(token);
    }
  }, [token]);

  // useEffect(() => {
  //   // async function getDisplayName() {
  //     // await getUserInfo();
  //     // window.localStorage.getItem("user_name");
  //   }
  //   return () => {};
  // }),
  //   [token];

  return (
    <>
      <div className="w-full h-full flex flex-col justify-center items-center">
        {!connected ? (
          <>
            {/* Heading */}
            <header className="flex flex-col items-center text-white mt-10 md:mt-20 h-full w-full">
              <p className="font-bold text-xs opacity-75">WELCOME TO</p>
              <h1 className="text-primary text-6xl font-bold">
                Spot<span className="text-white">Magic</span>
              </h1>
              <p className="uppercase font-semibold text-xs text-center my-4">
                Get Personalized auto-generated playlist in one click!
              </p>

              <div className="mt-5">
                <ConnectButton isConnected={connected} logOut />
              </div>
            </header>
          </>
        ) : (
          <>
            <div className="border-b border-primary w-full px-4 h-[60px] flex justify-between items-center">
              <p className="font-bold text-xl text-primary">
                Spot<span className="text-white">Magic</span>
              </p>
              {/* disconnect button */}
              <button
                className="bg-primary py-2 px-4 rounded-full font-semibold text-sm text-dark flex justify-center items-center gap-2"
                onClick={disconnect}
              >
                <SpotifyIcon height={"24px"} width={"24px"} />
                <p>Disconnect</p>
              </button>
            </div>

            <main className="flex justify-center px-4 mt-10 mb-10">
              <div className="w-full flex justify-center">
                <div className="grid sm:grid-cols-2 w-full sm:w-max gap-4">

                  {/* <div className="h-[100px] shadow-lg rounded-md text-dark col-span-1 sm:col-span-2 max-w-[600px] w-full flex justify-center items-center bg-white ">
                    <p className="font-medium text-xl">Welcome {user}</p>
                  </div> */}

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
    /**

    
    
      {connected && (
        <>
          <div className="w-full h-[60px] border-b-2 border-primary flex justify-between items-center text-white font-medium px-4">
            <p className="text-primary font-bold text-xl">
              Spot<span className="text-white">Magic</span>
            </p>
            <button
              className="bg-primary py-2 px-4 rounded-full font-semibold text-sm text-dark flex justify-center items-center gap-2"
              onClick={disconnect}
            >
              <SpotifyIcon height={"24px"} width={"24px"} />
              <p>Disconnect</p>
            </button>
          </div>
        </>
      )}

      <div className="w-full h-full flex flex-col justify-center items-center">
        

        

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
    */
  );
}

export default App;

{
  /* Features List */
}
{
  /* <section className="px-4 ">
              <div className="bg-primary max-w-[400px] w-full p-4 rounded-lg mt-10">
                <header className="text-xl font-semibold text-white border-l-4 pl-2">
                  Features
                </header>
                <ul className=" text-dark font-medium">
                  {features.map((feat, idx) => (
                    <li className="my-2" key={idx}>
                      ✔ {feat.title}
                    </li>
                  ))}
                </ul>
              </div>
            </section> */
}
{
  /* <section className="mt-10">
              <div className="relative border-2 border-white max-w-[400px] w-full rounded-lg px-5 py-4">
                <header className="absolute -left-1 -top-4 bg-dark pr-3 pb-2 text-xl font-semibold text-white">
                  Features
                </header>
                <ul className=" text-white font-medium">
                  {features.map((feat, idx) => (
                    <li className="my-2" key={idx}>
                      ✔  {feat.title}
                    </li>
                  ))}
                </ul>
              </div>
            </section> */
}
