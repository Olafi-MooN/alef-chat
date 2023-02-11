const cryptoRelationUUID = (uuid1, uuid2) => {
  let relationCodeCrypto = 0;
  for (let i = 0; i < uuid1.length; i++) {
    const value1 = uuid1[i].charCodeAt();
    const value2 = uuid2[i].charCodeAt();
    relationCodeCrypto += value1 + value2;
  }
  return relationCodeCrypto;
}

export { cryptoRelationUUID };