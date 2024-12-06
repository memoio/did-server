const deleteDID = async (sig, did) => {
  const url = `http://119.147.213.61:38082/did/delete`;
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ sig, did }),
  });
  const data = await response.json();
  return data;
};

// 使用示例
deleteDID(
  "0x582594f99c594ff1b6a6c0af31bdce9c9a62637d4d461eb0c246b84ce7bb1b03",
  "did:memo:d687daa192ffa26373395872191e8502cc41fbfbf27dc07d3da3a35de57c2d96"
).then((result) => console.log(result));
