import { FAU_CONTRACT } from '../constants'

export function getFauContract(chainId: number, web3: any) {
  const fau = new web3.eth.Contract(
    FAU_CONTRACT[chainId].abi,
    FAU_CONTRACT[chainId].address
  )
  return fau
}

export function callBalanceOf(address: string, chainId: number, web3: any) {
  return new Promise(async(resolve, reject) => {
    const fau = getFauContract(chainId, web3)

    await fau.methods
      .balanceOf(address)
      .call(
        { from: '0x0000000000000000000000000000000000000000' },
        (err: any, data: any) => {
          if (err) {
            reject(err)
          }

          resolve(data)
        }
      )
  })
}

export function callTransfer(address: string, chainId: number, web3: any) {
  return new Promise(async(resolve, reject) => {
    const fau = getFauContract(chainId, web3)

    await fau.methods
      .transfer(address, '1')
      .send({ from: address }, (err: any, data: any) => {
        if (err) {
          reject(err)
        }

        resolve(data)
      })
  })
}
