### How to replicate the bug?
1. after running `npm i` you can run the project by running `npm run serve`
2. once the build is done, open http://localhost:3000/new you see the "Hello World"
3. Now, change the url to the following and hit Enter:

http://localhost:3000/////google.com?dob=11%2f10%2f1987&username=hello&email=test@test.com

4. you see instead of being redirected to 404 page, you get redirected to google (or any other arbitary url you put instead of google.com) with all the query strings.

