// Generated by CoffeeScript 1.9.1
(function() {
  var copyTextToClipboard, createPath, main, setup;

  setup = function() {
    preferences.rulerUnits = Units.PIXELS;
    if (app.documents.length === 0) {
      alert('cannot access document');
      return false;
    }
    return true;
  };

  createPath = function(target) {
    if (target.parent.typename === 'Document') {
      return target.name;
    }
    return createPath(target.parent) + '.' + target.name;
  };

  main = function() {
    return copyTextToClipboard(createPath(app.activeDocument.activeLayer));
  };

  copyTextToClipboard = function(text) {
    var keyTextData, ktextToClipboardStr, textStrDesc;
    keyTextData = app.charIDToTypeID('TxtD');
    ktextToClipboardStr = app.stringIDToTypeID("textToClipboard");
    textStrDesc = new ActionDescriptor();
    textStrDesc.putString(keyTextData, text);
    return executeAction(ktextToClipboardStr, textStrDesc, DialogModes.NO);
  };

  if (setup()) {
    main();
  }

}).call(this);
