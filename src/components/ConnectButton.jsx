import { requestAuthorization } from "../service/authService";
import SpotifyIcon from "./SpotifyIcon";

const ConnectButton = ({ isConnected }) => {
  return (
    <>
      <button
        className={`${
          isConnected
            ? "bg-primary text-dark"
            : "text-primary hover:text-dark hover:bg-primary"
        } border border-primary rounded-full p-2 px-4 font-bold flex gap-2 items-center my-10`}
        onClick={requestAuthorization}
      >
        <SpotifyIcon />

        <p>{isConnected ? "Spotify Connected" : "Connect your Spotify"}</p>
      </button>
    </>
  );
};

export default ConnectButton;
