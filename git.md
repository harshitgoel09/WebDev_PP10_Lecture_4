# upload code to github

## First Time setup
* git config --global user.email "johndoe@example.com
* git config --global user.name "John Doe"
* git config --list   <!--To check the user name and email-->

## (You need to this always) Humesa karna hoga
* git init        <!-- esse humarin time suru hoti hoti for that particular folder -->
* git add .       <!-- add all the entites i.e. file/folder for trackin -->
* git commit -m "message" <!-- hume agar koi break point create karna ha, toh hum commit use karte ha, jisse hum pichey jaa paye time me,hum ek msg bhi add kar saktey ha for reference-->
* git log         <!--   to list all the commits -->

### Create a repo github

* git remote add origin your **Repo Name**
* git branch -M main
* git push -u origin main
<!-- Note : To ignore any file, we have to add file path in .gitignore -->
Always -> git push