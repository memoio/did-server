const getSigMsg = async (chain, publicKey) => {
  const url = `http://119.147.213.61:38082/did/createsigmsg`;
  const params = new URLSearchParams({ chain, publicKey });
  const response = await fetch(`${url}?${params}`);
  const data = await response.json();
  return data.msg;
};

getSigMsg(
  "memo",
  "0x03ecc373891778bed36426ddcd682bf1e0b5a99a8d8534be05a000ddc4faaccea0"
).then((msg) => console.log(msg));
