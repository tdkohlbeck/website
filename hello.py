from parser import parse
from mod_python import apache, util

def handler(req):
	#initialize shit
	req.log_error('handler')
	req.content_type = 'text/html'
	req.send_http_header()

	# send first half of index.html
	f = open('/srv/www/indexBegin.html', 'r')
	for line in f: 
		req.write(line)

	#   if: a form has been submitted
	# then: execute parse
	form = util.FieldStorage(req)
	if form:
		req.write(parse(req, form['textarea']))

	# send second half of index.html
	f = open('/srv/www/indexEnd.html', 'r')
	for line in f:
		req.write(line)

	return apache.OK
