setup = ->
  preferences.rulerUnits = Units.PIXELS

  if app.documents.length == 0
    alert('cannot access document')
    return false

  return true

createPath = (target) ->
  return target.name if target.parent.typename == 'Document'
  return createPath(target.parent) + '.' + target.name

main = ->
  copyTextToClipboard(createPath(app.activeDocument.activeLayer))

copyTextToClipboard = (text) ->
  keyTextData = app.charIDToTypeID('TxtD')
  ktextToClipboardStr = app.stringIDToTypeID("textToClipboard")

  textStrDesc = new ActionDescriptor()
  textStrDesc.putString(keyTextData, text)
  executeAction(ktextToClipboardStr, textStrDesc, DialogModes.NO)

if setup()
  main()
