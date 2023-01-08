import abi from '@components/atoms/abi'
import ercabi from '@components/atoms/ercabi'
import Web3 from 'web3'

export const web3 = new Web3(window.ethereum)
export const C_address = '0x1241685127f6C331093BfA83fAB8fCC801d05811'
export const contract = new web3.eth.Contract(abi, C_address)
export const owner = '0xb399015Fa4645A689706EA3f859C23d717285d05'
export const erc20_address = '0x0c203a7dac20e7152c0c6535dd722cf9d0e0edd7' //ERC20 컨트랙트
export const erc20_contract = new web3.eth.Contract(ercabi, erc20_address)
// export const aaa = 'dudwkdjssl1130'
// export const bbb = 'wjddnjs2216@likelion.org'
