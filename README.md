# Gleam Media 과제

## 과제 요약

- To-do 앱을 웹 기술을 사용하여 개발

## 개발 환경

### Front-end

- HTML
- React.js

### Back-end

- Node.js
- Express
- Knex
- MYSQL

### 폴더 구조

```bash
├── frontend
│   └── src
│       ├── Components
│       │   ├── TodoCreator.js
│       │   └── TodoItem.js
│       ├── style
│       │   ├── reset.css
│       │   ├── TodoCreator.css
│       │   ├── TodoItem.css
│       │   └── TodoMain.css
│       ├── index.js
│       └── TodoMain.js # Todo 앱 메인 페이지
│
└── backend
    └── index.js
```

### Dependencies

| Dependency     | version |
| -------------- | ------- |
| -- Frontend -- |         |
| react          | ^17.0.2 |
| axios          | ^0.21.1 |
| -- Backend --  |         |
| cors           | ^2.8.5  |
| express        | ^4.17.1 |
| knex           | ^0.95.7 |
| mysql          | ^2.18.1 |

## 실행 방법

로컬 환경에서 프로젝트를 셋팅하고 실행하기 위한 방법입니다.

### 깃 레포지토리 로컬 저장

```bash
# 레포지토리를 저장하고 싶은 로컬 디렉토리 내에서 실행
~$> git clone repo-url
```

### Front-end

```bash
# 프론트엔드 디렉토리로 이동
~$> cd frontend

# dependency(의존성 모듈) 설치
# npm, yarn 모두 작성하였으나 이 중 1가지를 택하여 설치 진행
~$> npm install
~$> yarn install

# 서버 실행
~$> npm start
~$> yarn start
```

### Back-end

```bash
# 과제 구현 환경인 mac을 기준으로 brew로 설치 진행하였습니다.
~$> brew install mysql

# 백엔드 디렉토리로 이동
~$> cd backend

# dependency(의존성 모듈) 설치
~$> npm install

# index.js파일을 실행하여 서버 연결
~$> node index.js
```

## 빌드 방법

```bash
# 프론트엔드 디렉토리로 이동
~$> cd frontend

# 빌드 진행
~$> npm run build
~$> yarn build
```
