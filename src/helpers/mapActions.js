const mapActions = (actions, actionPrefix) => {
  if (!Array.isArray(actions)) throw new Error('actions must be an array');
  return actions.reduce((mapping, action) => {
    mapping[action] = `${actionPrefix}/${action}`;
    return mapping;
  }, {});
};

export default mapActions;
