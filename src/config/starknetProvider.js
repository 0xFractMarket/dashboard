import React from "react";
import { sepolia, mainnet } from "@starknet-react/chains";
import {
    jsonRpcProvider,
    StarknetConfig,
    starkscan,
} from "@starknet-react/core";
import cartridgeConnector from "./cartridgeConnector";

export default function StarknetProvider({ children }) {

    // Configure RPC provider
    const provider = jsonRpcProvider({
        rpc: (chain) => {
            switch (chain) {
                case mainnet:
                    return { nodeUrl: 'https://api.cartridge.gg/x/starknet/mainnet' }
                case sepolia:
                default:
                    return { nodeUrl: 'https://api.cartridge.gg/x/starknet/sepolia' }
            }
        },
    })
    return (
        <StarknetConfig
            autoConnect
            chains={[mainnet, sepolia]}
            connectors={[cartridgeConnector]}
            explorer={starkscan}
            provider={provider}
        >
            {children}
        </StarknetConfig>
    );
}
