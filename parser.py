def parse(req, string):
	word = ''
	divDepth = 1

	b = '<div>'
	for char in string:
		if char == '{':
			b += '<div>'
			divDepth += 1
		elif char == '}':
			b += '</div>'
			divDepth -= 1
		elif char == '\n':
			b += '<br>'
		else:
			b += char
	b += '</div>'

	class CodeBlock(object):
		def __init__(self):
			self.x = None
			self.y = None
			self.origin = None
			self.children = None

#	for c in a:
#		if c == (' ' or '\n'):
#			if word == '{':
#				b += 'yay'
#			elif word == '}':
#				b += '</div>'
#			else:
#				b += word + c 
#			word = ''
#		else:
#			word += c

	return b
