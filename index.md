---
#
# By default, content added below the "---" mark will appear in the home page
# between the top bar and the list of recent posts.
# To change the home page layout, edit the _layouts/home.html file.
# See: https://jekyllrb.com/docs/themes/#overriding-theme-defaults
#
layout: home
---

This example creates an authentication system that uses a **signed and encrypted cookie to store session data**. It uses current best practices as for authentication in the Next.js ecosystem, we use **`useUser` custom hook**  together with [swr](https://swr.vercel.app/) for data fetching.
   
- Firebase Authentication with Email Passwordless Link is used to authenticate users.
- Session data is signed and encrypted in a cookie.
      
[![firebase-auth-email-screenshot](/images/firebase-auth-email-screenshot.png)](https://firebase-auth-email.vercel.app)

**iOS** and **Android** mobile apps are also delivered. The apps are developed with **React Native**, anyone who is interested can test the apps through the [Expo Publish Link](https://expo.dev/@jglchen/firebase-auth-email) with [Expo Go](https://expo.dev/client) app. 

### [View the App](https://firebase-auth-email.vercel.app)
### [App GitHub](https://github.com/jglchen/firebase-auth-email)
### Docker: docker run -p 3000:3000 jglchen/firebase-auth-email
### [React Native Expo Publish](https://expo.dev/@jglchen/firebase-auth-email)
### [React Native GitHub](https://github.com/jglchen/react-native-firebase-auth-email)
### back To [Series Home](https://jglchen.github.io/)
