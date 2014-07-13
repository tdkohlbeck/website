from mod_python import apache, util

def parse(req, a):
  b = '<div>'
  for c in a:
    if c == '{':
      b += '<div>'
      c = ''
    elif c == '}':
      b += '</div>'
      c = ''
    elif c == '\n':
      b += '<br/>'
      c = '' 
    b += c
  b += '</div>'
  return b
