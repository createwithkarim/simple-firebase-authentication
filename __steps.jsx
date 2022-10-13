/*
-------------------
    INITIAL SETUP
-------------------
1. visit: console.firebase.google.com
2. create a new firebase project
3. visit doc (go to docs) build > Authentication > web > get started
4. Register web app > firebase project home > click web > give name and register
5. install firebase for our project: npm i firebase
6. Dangerous: get firebase config and put it in the firebase.init.js
7. export app from firebase.init.js
-----------------------
    SETUP PROVIDER
-----------------------
8. create auth using getAuth from firebase by using app from firebase.init.js
9. create a google auth provider
10 go to firebase > build > authentication > sign method
11. enable google sign in method
12. create a button for google sign in method with a handler
13. inside the event handler, call signInWithPopup with auth, provider
14. after signInPopup .then result, error
------------------------
    DISPLAY DATA
------------------------

-----------------------------
    ADD A NEW SIGN IN METHOD
-----------------------------
1. enable the sign in method
2. create github, fb, twitter etc. app create
3 get client id and secret
*/
