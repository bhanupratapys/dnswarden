function copyToClipboard (str) {
  var el = document.createElement('textarea')
  el.value = str.innerText
  el.setAttribute('readonly', '')
  el.style = {position: 'absolute', left: '-9999px'}
  document.body.appendChild(el)
  el.select()
  el.setSelectionRange(0, 99999)
  document.execCommand('copy')
  document.body.removeChild(el)
}