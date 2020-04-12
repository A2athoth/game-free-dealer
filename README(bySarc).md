# FreeDealer

무료 게임 관련 각종 정보들을 쉽게 파악하고 정리할 수 있는것을 목표로 하는 프로젝트

할인하는 게임 체크 api

타겟 선정은
특정 0원 딜 사이트?
주소입력?

크롤링할 데이터
뭔게임/장르/정가/설명/리뷰등급/발매일/지원언어?

출력 언어
한글/영어

이제 언어나 한번에 불러올 여러 url값들 반복,
크롤링할 데이터 재확인 및 정리
게임 명 검색을 통한 방법(검색어와 한번 비교 검증)

나중에 저거 서비스로 낼때는 광고도 달까 생각중이라 ㅎ 게임 정보 넣으면 원하는 정보들(선별적) 정리해주는거지. 굳이 스팀 페이지 안들어가도 말야.
쓰는 사람 없더라도 말야.

나중엔 최저가 사이트의 값도 살짝 긁든 api쓰든 해서 최저가 체크

실행 명령어

npm run url
npm run search

---------------------------
메모

설치

npm init -y
npm init 명령어를 사용하면 프로젝트에 대한 여러 가지 정보를 입력하도록 요구받는다. 이때 입력된 정보를 바탕으로 npm은 package.json 파일을 생성한다. 일단 기본 설정값으로 생성된 package.json 파일을 수정하는 방법이 더 편리할 수 있으므로 npm init 명령어에 --yes 또는 -y 옵션을 추가한다. 그러면 기본 설정값으로 package.json 파일을 생성한다.

npm install --save axios cheerio
http가져올 액시오스랑 크롤링에 쓸 큐리오 가져오기
(얘네 둘 지우고 puppeteer만 남김)
npm install --save puppeteer

https://velog.io/@yesdoing/Node.js-%EC%97%90%EC%84%9C-%EC%9B%B9-%ED%81%AC%EB%A1%A4%EB%A7%81%ED%95%98%EA%B8%B0-wtjugync1m
https://jongmin92.github.io/2017/05/26/Emily/4-crawling/
https://donghyunkims.github.io/javascript/2018/10/06/crawling.html
https://solbel.tistory.com/441

------------------------------------

퍼펫티어 쓰는 티스토리 로그인 시도.
자체 브라우져가 떠서 크롤링함

npm install --save puppeteer

http://magic.wickedmiso.com/139?category=781075
http://magic.wickedmiso.com/140?category=781075
http://magic.wickedmiso.com/141?category=781075
https://beomi.github.io/2017/01/20/HowToMakeWebCrawler-With-Login/
https://beomi.github.io/2017/02/27/HowToMakeWebCrawler-With-Selenium/

--------------------------------

https://sheldhe93.tistory.com/6
리액트로 api 호출(ajax같은 느낌)

-------------------------------
refer

https://store.steampowered.com/app/952060/RESIDENT_EVIL_3/
https://store.steampowered.com/app/1089090/ONE_PIECE_PIRATE_WARRIORS_4/
https://store.steampowered.com/app/271590/Grand_Theft_Auto_V/

https://store.steampowered.com/app/12210/Grand_Theft_Auto_IV_The_Complete_Edition/
리뷰가 전체만 있는애

https://store.steampowered.com/app/1085660/Destiny_Guardians/
최근과 전체 평가 좀 다른애

----------------

리액트 설치
npm install -g create-react-app
생성할 폴더 가서
create-react-app .
이게 현재 폴더에서 생성 뒤에 .대신 폴더 이름 붙이면 그 경로로 폴더 만들어서 생성
