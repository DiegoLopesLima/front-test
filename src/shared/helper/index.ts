export const dynamicClassName = (classNames: any) => {
  if (Array.isArray(classNames)) {
    return { className: classNames.join(' ') };
  } else if (typeof classNames === 'object') {
    return {
      className: Object.keys(classNames)
        .map(className => {
          if (typeof classNames[className] === 'function') {
            return className;
          } else {
            return classNames[className] ? className : null;
          }
        })
        .filter(className => className)
        .join(' ')
    };
  }
};

export const getParamsAsQueryString = (params: object = {}, prefix: string = '') => {
  const keys = Object.keys(params);

  return (keys.length ? prefix : '') + Object.keys(params)
    .map(param => `${param}=${escape(params[param])}`)
    .join('&');
};
