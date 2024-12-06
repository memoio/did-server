const getDIDInfo = async (did) => {
  const url = `http://119.147.213.61:38082/did/info`;
  const params = new URLSearchParams({ did });
  const response = await fetch(`${url}?${params}`);
  const data = await response.json();
  return data;
};

// 使用示例
getDIDInfo(
  "did:memo:d687daa192ffa26373395872191e8502cc41fbfbf27dc07d3da3a35de57c2d96"
).then((info) => console.log(info));
