let elementStyle = document.createElement('div').style
let vendors = (() => {
  let transformNames = {
    webkit: 'webkitTransform',
    Moz: 'MozTransform',
    O: 'OTransform',
    ms: 'msTransform',
    standard: 'transform'
  }
  for( let key in transformNames){
    if(elementStyle[transformNames[key]]!==undefined){
      return key
    }
  }
  return false
})()

export function preFixStyle(style) {
  if(vendors==false){
    return false
  }
  if(vendors=='standard'){
    return style
  }
  return vendors+style.charAt(0).toUpperCase()+style.substr(1)
}
