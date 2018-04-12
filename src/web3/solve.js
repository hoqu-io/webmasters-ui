export default ({ challenge, account }) => (
  new Promise((resolve, reject) => (
    window.web3.currentProvider.sendAsync(
      { method: 'eth_signTypedData', params: [ challenge, account ], from: account },
      (error, result) => (error ? reject(error) : resolve(result))
    ))
  ).then(({ result }) => (result))
)
