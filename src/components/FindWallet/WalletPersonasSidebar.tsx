// Libraries
import React, { useState } from "react"
import styled from "styled-components"

// Components
import Icon from "../Icon"

// Styles
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

const Persona = styled.div<{
  selected: boolean
}>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 24px;
  background: ${(props) =>
    props.selected === true ? "#432E1B" : props.theme.colors.ednBackground};
  border: 1px solid #3d3d3d;
  border-radius: 4px;
  cursor: pointer;
`

const Title = styled.div`
  display: flex;
  align-items: center;
  gap: "1rem";
  margin-bottom: 1rem;
`

const StyledIcon = styled(Icon)<{
  selected: boolean
}>`
  fill: ${(props) =>
    props.selected === true
      ? props.theme.colors.primary
      : props.theme.colors.secondary};
`

const H3 = styled.h3`
  color: ${(props) => props.theme.colors.primary};
  margin-left: 0.5rem;
  margin-top: 0;
  margin-bottom: 0;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-column-gap: 3rem;
`

// Types
interface Personas {
  title: string
  description: string
  featureHighlight: string[]
  presetFilters: {
    android: boolean
    ios: boolean
    linux: boolean
    windows: boolean
    macOS: boolean
    firefox: boolean
    chromium: boolean
    hardware: boolean
    open_source: boolean
    non_custodial: boolean
    hardware_support: boolean
    walletconnect: boolean
    rpc_importing: boolean
    nft_support: boolean
    connect_to_dapps: boolean
    staking: boolean
    swaps: boolean
    layer_2: boolean
    gas_fee_customization: boolean
    ens_support: boolean
    erc_20_support: boolean
    buy_crypto: boolean
    withdraw_crypto: boolean
    multisig: boolean
    social_recovery: boolean
  }
}

const WalletPersonasSidebar = ({ setFilters }) => {
  console.log(setFilters)
  const [selectedPersona, setSelectedPersona] = useState(NaN)

  const personas: Personas[] = [
    {
      title: "I'm new to Ethereum",
      description: "You are a first time user looking for your first wallet",
      featureHighlight: ["feature", "feature", "feature", "feature"],
      presetFilters: {
        android: true,
        ios: true,
        linux: false,
        windows: false,
        macOS: false,
        firefox: true,
        chromium: true,
        hardware: false,
        open_source: true,
        non_custodial: true,
        hardware_support: false,
        walletconnect: true,
        rpc_importing: false,
        nft_support: true,
        connect_to_dapps: true,
        staking: false,
        swaps: false,
        layer_2: true,
        gas_fee_customization: true,
        ens_support: true,
        erc_20_support: true,
        buy_crypto: true,
        withdraw_crypto: true,
        multisig: false,
        social_recovery: false,
      },
    },
    {
      title: "I'm a hodler",
      description:
        "You are someone that has tokens and don’t want to touch them",
      featureHighlight: ["feature", "feature", "feature", "feature"],
      presetFilters: {
        android: true,
        ios: true,
        linux: true,
        windows: true,
        macOS: true,
        firefox: true,
        chromium: true,
        hardware: true,
        open_source: true,
        non_custodial: true,
        hardware_support: true,
        walletconnect: false,
        rpc_importing: false,
        nft_support: false,
        connect_to_dapps: false,
        staking: true,
        swaps: false,
        layer_2: true,
        gas_fee_customization: true,
        ens_support: false,
        erc_20_support: true,
        buy_crypto: false,
        withdraw_crypto: false,
        multisig: true,
        social_recovery: false,
      },
    },
    {
      title: "I'm use decentralized finance",
      description:
        "You are someone that follows DeFI and want’s a wallet easy to use",
      featureHighlight: ["feature", "feature", "feature", "feature"],
      presetFilters: {
        android: true,
        ios: true,
        linux: false,
        windows: false,
        macOS: false,
        firefox: true,
        chromium: true,
        hardware: true,
        open_source: true,
        non_custodial: true,
        hardware_support: true,
        walletconnect: true,
        rpc_importing: true,
        nft_support: true,
        connect_to_dapps: true,
        staking: false,
        swaps: true,
        layer_2: true,
        gas_fee_customization: true,
        ens_support: true,
        erc_20_support: true,
        buy_crypto: false,
        withdraw_crypto: false,
        multisig: false,
        social_recovery: false,
      },
    },
    {
      title: "I'm a developer",
      description:
        "You are developer and needs a wallet that helps develop dapps",
      featureHighlight: ["feature", "feature", "feature", "feature"],
      presetFilters: {
        android: true,
        ios: true,
        linux: false,
        windows: false,
        macOS: false,
        firefox: true,
        chromium: true,
        hardware: false,
        open_source: true,
        non_custodial: true,
        hardware_support: false,
        walletconnect: true,
        rpc_importing: true,
        nft_support: true,
        connect_to_dapps: true,
        staking: false,
        swaps: false,
        layer_2: true,
        gas_fee_customization: true,
        ens_support: true,
        erc_20_support: true,
        buy_crypto: false,
        withdraw_crypto: false,
        multisig: false,
        social_recovery: false,
      },
    },
    {
      title: "I use multiple chains",
      description:
        "You use wallets on other chains and wants to get in ethereum",
      featureHighlight: ["feature", "feature", "feature", "feature"],
      presetFilters: {
        android: true,
        ios: true,
        linux: false,
        windows: false,
        macOS: false,
        firefox: true,
        chromium: true,
        hardware: false,
        open_source: true,
        non_custodial: true,
        hardware_support: true,
        walletconnect: true,
        rpc_importing: true,
        nft_support: true,
        connect_to_dapps: true,
        staking: false,
        swaps: false,
        layer_2: true,
        gas_fee_customization: true,
        ens_support: true,
        erc_20_support: true,
        buy_crypto: false,
        withdraw_crypto: false,
        multisig: false,
        social_recovery: false,
      },
    },
    {
      title: "I'm all about NFT's",
      description:
        "You are someone that is all about NFTs a wallet has to ready",
      featureHighlight: ["feature", "feature", "feature", "feature"],
      presetFilters: {
        android: true,
        ios: true,
        linux: false,
        windows: false,
        macOS: false,
        firefox: true,
        chromium: true,
        hardware: false,
        open_source: true,
        non_custodial: true,
        hardware_support: true,
        walletconnect: true,
        rpc_importing: false,
        nft_support: true,
        connect_to_dapps: true,
        staking: false,
        swaps: false,
        layer_2: true,
        gas_fee_customization: true,
        ens_support: false,
        erc_20_support: false,
        buy_crypto: false,
        withdraw_crypto: false,
        multisig: false,
        social_recovery: false,
      },
    },
  ]

  return (
    <Container>
      {personas.map((persona, idx) => {
        return (
          <Persona
            selected={selectedPersona === idx}
            onClick={() => {
              setSelectedPersona(idx)
              setFilters(persona.presetFilters)
            }}
          >
            <Title>
              <StyledIcon
                name="check"
                selected={selectedPersona === idx}
                size="2rem"
              />
              <H3>{persona.title}</H3>
            </Title>
            <p>{persona.description}</p>
            <Grid>
              {persona.featureHighlight.map((feature) => (
                <p>{feature}</p>
              ))}
            </Grid>
          </Persona>
        )
      })}
    </Container>
  )
}

export default WalletPersonasSidebar
