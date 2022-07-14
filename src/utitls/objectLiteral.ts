export const objectLiteral = <T>(source: T, target: T) => {
  const sourceKeys = Object.keys(source);
  const targetKeys = Object.keys(target);
  let result: any = {};

  const allKeys = new Set([...sourceKeys, ...targetKeys]);

  allKeys.forEach((key) => {
    const sourceValue = source[key as keyof typeof source];
    const targetValue = target[key as keyof typeof source];

    if (sourceValue !== targetValue) {
      result[key] = {
        old: sourceValue || null,
        new: targetValue || null,
      };
    }
  });

  return result;
};
