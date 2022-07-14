export const getUrlParams = (
  pathString: string,
  patternString: string
): Object => {
  const result: { [key: string]: string } = {};
  const allPatterns = patternString.split("/");
  const allPaths = pathString.split("/");

  allPatterns.some((pattern, index) => {
    if (index < allPaths.length) {
      const isUrlParam = pattern.startsWith(":");
      if (isUrlParam) {
        const paramName = pattern.substring(1);
        result[paramName] = allPaths[index];
        // return false to continue the .some() loop
        return false;
      } else {
        if (pattern !== allPaths[index]) {
          // return true to break the .some() loop
          return true;
        }
        // return false to continue the .some() loop
        return false;
      }
    }
    // return true to break the .some() loop
    return true;
  });

  return result;
};
