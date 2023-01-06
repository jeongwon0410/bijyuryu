import abi from '@components/atoms/abi'

import Web3 from 'web3'

export const web3 = new Web3(window.ethereum)
export const C_address = '0x91690F1353f5b37C0Ec5B601bE06fEEED2c76ffd'
export const contract = new web3.eth.Contract(abi, C_address)
export const owner = '0x7fe8149477ab0ff1b145c41a76c7de0ee28d59d8'
export const aaa = 'dudwkdjssl1130@'
export const bbb = 'wjddnjs2216@likelion.org'
