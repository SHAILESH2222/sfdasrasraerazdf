const React = require('react');

const keyStore = require('../store/keyStore.js');
const keyDispatcher = require('../dispatcher/keyDispatcher.js');

function buttonToggles() {

  let keyStates = keyStore.getKeyStates();
  let buttonStates = keyStore.getButtonStates();

  let buttons = ['left', 'right', 'middle'].map((button, i) => {
    let active = buttonStates[button];
    let className = button + ' ' + (active ? 'active' : '');
    function onClick() {
      keyDispatcher.dispatch({ type: 'click', button: button });
    }
    function onDoubleClick() {
      keyDispatcher.dispatch({ type: 'toggle-button', button: button});
    }
    return (
      <button
        className={className}
        key={i}
        onClick={onClick}
        onDoubleClick={onDoubleClick}
      >
          {button}
      </button>
    );
  });

  let keys = ['control', 'shift', 'alt', 'meta'].map((key, i) => {
    let active = keyStates[key];
    let className = key + ' ' + (active ? 'active' : '');
    function onClick() {
      keyDispatcher.dispatch({ type: 'tap-key', key: key });
    }
    function onDoubleClick() {
      keyDispatcher.dispatch({ type: 'toggle-key', key: key});
    }
    return (
      <button
        className={className}
        key={i}
        onClick={onClick}
        onDoubleClick={onDoubleClick}
      >
        {key}
      </button>
    );
  });

  return (<div className="button-toggles">
    {buttons}
    {keys}
  </div>);
}

module.exports = buttonToggles;
