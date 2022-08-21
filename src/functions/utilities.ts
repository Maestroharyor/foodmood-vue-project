export const Capitalize = (data: string): string => {
  if (data) {
    let result = "";
    const stringArray = data.toString().split("");
    result = stringArray[0].toUpperCase() + stringArray.slice(1).join("");
    return result;
  }
  return data;
};
