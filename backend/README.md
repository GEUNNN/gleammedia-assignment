# Gleam Media 과제전형 백엔드

## 데이터베이스

`gleam_todo` 데이터베이스를 생성하여 todos 테이블에서 작업을 진행하였습니다.
todos 테이블의 컬럼 이름과 타입은 아래와 같습니다.

![](https://images.velog.io/images/xoxobabegirl/post/615f47c2-c957-4963-b692-e0c53dcb57ee/image.png)

## knex 사용 이유

express만 사용할 경우 백엔드에서 과도한 시간을 투자할 것 같다는 생각을 해 라이브러리를 사용하기로 했습니다. 또한, MYSQL 쿼리문을 보다 쉽게 작성하기 위해서 knex를 정했습니다.
Sequelize와 knex 중에서 고민을 했으나 오래전이지만 사용 경험이 있어 구현 시간을 줄일 수 있고 라이브러리 사용 목적인 쿼리문 작성을 위해 나온 knex를 선택했습니다.
