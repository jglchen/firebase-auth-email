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

**iOS** and **Android** mobile apps are also delivered. The apps are developed with **React Native**, anyone who is interested can test the development builds with [iOS Simulator Build](https://expo.dev/accounts/jglchen/projects/firebase-auth-email/builds/0f15f092-b8d8-4bc1-ac03-bf703c0d3edd) and [Android Internal Distribution Build](https://expo.dev/accounts/jglchen/projects/firebase-auth-email/builds/fb497610-636a-48ef-8686-725e40d19ed1). If the build storage link has expired, please go to [https://projects-jglchen.vercel.app/en/contact](https://projects-jglchen.vercel.app/en/contact) to request build files.

### [View the App](https://firebase-auth-email.vercel.app)
### [App GitHub](https://github.com/jglchen/firebase-auth-email)
### Docker: docker run -p 3000:3000 jglchen/firebase-auth-email
### [iOS Simulator Build](https://expo.dev/accounts/jglchen/projects/firebase-auth-email/builds/0f15f092-b8d8-4bc1-ac03-bf703c0d3edd)
### [Android Internal Distribution Build](https://expo.dev/accounts/jglchen/projects/firebase-auth-email/builds/fb497610-636a-48ef-8686-725e40d19ed1)
### [React Native GitHub](https://github.com/jglchen/react-native-firebase-auth-email)
### back To [Series Home](https://jglchen.github.io/)

{% include giscus.html %}
