const createDID = async (sig) => {
  const url = `http://119.147.213.61:38082/did/create`;
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ sig }),
  });
  const data = await response.json();
  return data.did;
};

// 使用示例
createDID(
  "0x2f5e3836589095e338d396453c1f0fa0f80623c896d4d1e84bff7684d5cf774013f37c9c2ea832ef7827d74d6c2eb2fe8df32119e394309cc25c2712d8e086f101"
).then((did) => console.log(did));
