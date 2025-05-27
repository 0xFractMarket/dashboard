// React and external libraries
import { Link } from 'react-router-dom';
import { useConnect, useAccount, useDisconnect } from "@starknet-react/core";

// Assets

// Constants
const BODY_CLASSES = ['day', 'night'];
const DEFAULT_BODY_STYLES = {
  backgroundSize: 'cover',
  padding: '0'
};

// Components
const DisconnectButton = ({ connector, onDisconnect }) => (
  <Link
    to="/"
    key={connector.id}
    className="disconnect-button"
    onClick={onDisconnect}
  >
    <span>Disconnect</span>
  </Link>
);

const ConnectButton = ({ connector, onConnect }) => (
  <button
    key={connector.id}
    onClick={() => onConnect(connector)}
    className="button"
  >
    Connect
  </button>
);

// Main Component
const ControllerConnectButton = () => {
  // Hooks
  const { connect, connectors } = useConnect();
  const { status } = useAccount();
  const { disconnect } = useDisconnect();

  // Derived state
  const isConnected = status === "connected";

  // Event Handlers
  const handleDisconnect = () => {
    disconnect();
    localStorage.clear();

    const bodyElement = document.querySelector('.body');
    if (bodyElement) {
      BODY_CLASSES.forEach(className => bodyElement.classList.remove(className));
      Object.entries(DEFAULT_BODY_STYLES).forEach(([property, value]) => {
        bodyElement.style[property] = value;
      });
    }
  };

  const handleConnect = async (connector) => {
    await connect({ connector });
  };

  // Render
  return (
    <div className="controller-connect-container">
      {connectors.map((connector) => (
        isConnected ? (
          <DisconnectButton
            key={connector.id}
            connector={connector}
            isConnected={isConnected}
            onConnect={handleConnect}
            onDisconnect={handleDisconnect}
          />
        ) : (
          <ConnectButton
            key={connector.id}
            connector={connector}
            isConnected={isConnected}
            onConnect={handleConnect}
            onDisconnect={handleDisconnect}
          />
        )
      ))}
    </div>
  );
};

export default ControllerConnectButton;
