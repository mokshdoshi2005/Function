'''#SERVER

from flask import Flask
from flask_mako import MakoTemplates, render_tempate 

app = Flash(__name__)
mako = MakoTemplates(app)

@app.route("/mako")
def jinjaversion():
    return render_tempate("index.html")

if __name__ == "__main__":
    app.run()


#file=open("index.html",'r')
#p=file.read()
#print(p)

'''

def var():
    return 'hello'