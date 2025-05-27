import { ControllerConnector } from "@cartridge/connector";

const options = {
  chains: [
    {
      rpcUrl: "https://api.cartridge.gg/x/starknet/sepolia",
    },
  ],
  defaultChainId: "0x534e5f5345504f4c4941",
};

const cartridgeConnector = new ControllerConnector(
  options,
);

export default cartridgeConnector;
