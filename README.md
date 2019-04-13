# oEmbed-react

- 담당자 : 배창현
- 2019.03.30 : 프로젝트 구성(react)

---

### 몇가지 내용 정리
1. npx
```
npm = node package module 

npx create-react-app [my-app]  
npx 는 무엇일까?
npm @5.2.0 버전부터 새로 추가된 도구.

npx 는 npm 을 로컬에 글로벌로 설치하지 않고 바로 1회성으로 실행할 수 있게 해주는 도구. 
```

2. package-lock.json 이란?
```
npm @5.x.x 버전 이상을 사용하면 생성되는 파일
생성 시점은 npm i 하는 시점
생성된 node_modules 정보를 package-lock.json 에 담는다. 

이게 왜 생겼을까?

동일한 package.json이라도 서로 다른 node_modules를 만들게 되는 경우가 생깁니다.
1) npm의 버젼이 다른 경우
2) 의존성을 가진 패키지의 버젼이 업그레이드 되는 경우
3) 의존성을 가진 패키지가 의존하는 패키지의 버젼이 업그레이드 되는 경우

package.json 파일의 의존성 선언에는 version range가 사용됩니다. version range란 특정 버전이 아니라 버전의 범위를 의미.
가장 흔한 예로 npm install express를 실행하게 되면 package.json 파일에는 “^4.16.3”(Caret Ranges)로 버전 범위가 추가됩니다.
저 package.json 파일로 npm install을 실행하면 현재는 4.16.3 버전이 설치되지만 express의 새로운 minor, patch가 publish 되면 동일한 package.json 파일로 
npm install을 실행해도 4.17.3, 이나 4.16.4 같은 업데이트된 버전이 설치

만약 package-lock.json 파일이 없다면,
A 개발자는 4.17.3 버전이 설치된 환경에서 개발을 하고 있을거고,
B 개발자가 clone 받아서 npm i 하면 최신버전인 4.17.4 버전이 설치가 되어
서로 다른 의존성으로 작업을 할것임. 이러다가 누군가 작업해서 머지하고 배포를했는데..
버전이 달라서 안돌아갈수도..ㄷㄷ

```

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
