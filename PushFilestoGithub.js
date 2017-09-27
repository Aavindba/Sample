Instructions How to connect Visual Studio code with github
Install Visual Studio Code From /*https://code.visualstudio.com/*/ its Free (Follow instructions to install on the PC )

Create Github Account (Goto https://github.com/)
Create Repository name (Public is free; Private is to be purchased)
Then it will display public link to Repository
follow the Command  
echo /*"#Repository Name"*/ >> README.md
git clone "URL"
git init /*The git init command creates a new Git repository.
 It can be used to convert an existing, unversioned project to a Git repository or initialize a new, empty repository. 
 Most other Git commands are not available outside of an initialized repository, 
 so this is usually the first command you'll run in a new project.
 Executing git init creates a .git subdirectory in the current working directory, 
 which contains all of the necessary Git metadata for the new repository. 
 This metadata includes subdirectories for objects, refs, and template files. 
 A HEAD file is also created which points to the currently checked out commit.*/
(If you get error Git not found, Goto /*https://git-scm.com/downloads*/  download file and install it. then error will be fixed )
git add README.md
git commit -m "first commit"
git remote add origin https://github.com/'/*Your username*/'/'/*"#Repository Name"*/'.git
git push -u origin master
