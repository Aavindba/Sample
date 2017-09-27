Instructions How to connect Visual Studio code with github
Install Visual Studio Code From https://code.visualstudio.com/ its Free (Follow instructions to install on the PC )

Create Github Account (Goto https://github.com/)
Create Repository name (Public is free; Private is to be purchased)
Then it will display public link to Repository
follow the Command  
echo /*"#Repository Name"*/ >> README.md
git init
git add README.md
git commit -m "first commit"
git remote add origin https://github.com/'/*Your username*/'/'/*"#Repository Name"*/'.git
git push -u origin master
