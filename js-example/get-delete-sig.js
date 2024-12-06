const getDeleteMsg = async (did) => {
  const url = `http://119.147.213.61:38082/did/deletesigmsg`;
  const params = new URLSearchParams({ did });
  const response = await fetch(`${url}?${params}`);
  const data = await response.json();
  return data.msg;
};

// 使用示例
getDeleteMsg(
  "did:memo:d687daa192ffa26373395872191e8502cc41fbfbf27dc07d3da3a35de57c2d96"
).then((msg) => console.log(msg));
