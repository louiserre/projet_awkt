import xss from "xss";

export function cleanedData(datas) {
  return  datas.map(data => xss(data)) 
}