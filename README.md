## 실행 방법

- 설치할 폴더 안에서 `git clone https://github.com/richcollector/elice-test`를 입력합니다.
- 의존성 설치를 위하여 `npm install`을 입력합니다.
- `npm run dev`로 프로젝트를 실행합니다.

## 동작 영상

|                                                    시연 elice-test                                                    |
| :-------------------------------------------------------------------------------------------------------------------: |
| ![elice](https://github.com/richcollector/richcollector-market/assets/104312779/eb49ab0e-7427-4093-b2ca-f6acec628d07) |

## 요구사항

|  세부 요구사항   |                                                                                                                                                   내용                                                                                                                                                   |
| :--------------: | :------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
|      Design      | 1300px, 810px, 500px로 분기점을 나눠 반응형 페이지를 적용하였습니다.<br/>CSS 초기화 후 GlobalStyle을 적용하여 제작하기 쉽게 설정하였습니다.<br/>styled-components 라이브러리로, Components별로 디자인 작업을 하였습니다.<br/>`ServerStyleSheet`를 설정하여, SERVER에서 부터 CSS가 적용되도록 하였습니다. |
|      Filter      |                                                       `router.query`가 변경 될 때, `router.query[key]`값을 분석하여<br/> Filter의 값을 자동세팅하고 활성화하였습니다(새로고침).<br/>`useCheck`에서 Filter값에 따라 분기별로 처리되도록 하였습니다.                                                       |
|      Search      |                                                                                 search input값의 최적화를 위해 debounce를 설정하여 사용하였습니다.</br>Filter와 마찬가지로 값을 자동세팅하고 활성화하였습니다(새로고침).                                                                                 |
|    Pagination    |                                                                                                         ` useRouter()`로 `router.query`가 변경 될 때, 1번페이지가 활성화되도록 설정 하였습니다.                                                                                                          |
| State Management |                                                                                                      router.query의 사용으로 `useState()`만을 사용하여,<br/> 추가 라이브러리 사용을 지양하였습니다.                                                                                                      |
|       API        |                server에서 API를 가져오도록 하기 위하여, Next.js를 이용하여 CROS에러를 처리하였습니다.</br> Apis.ts를 만들어 어디서나 손쉽게 API를 사용할 수 있도록 instance로 나누어 설정하였습니다.</br>hooks를 기능별로 나누어 코드의 가독성을 높이고, 유지보수가 좋게 작성하였습니다.                 |

전체적인 magic number를 최소화하기 위하여, Constant에 고정된 값들을 넣어 사용하였습니다.

## 사용 라이브러리

|       라이브러리        |                                                                                      내용                                                                                       |
| :---------------------: | :-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------: |
| husky, eslint, prettier | husky를 적용하여, 설정된 git flow를 지키지 않을 시, commit이 되지 않도록 설정하였습니다.<br/>eslint, prettier를 사전에 설정하여 공통된 코드 작업을 할 수 있도록 노력하였습니다. |
|    styled-components    |         개발 시간 단축과 컴포넌트별로 재사용이 가능한 component를 구성하고 싶어 사용하였습니다.<br/> props로 값을 바꾸어 사용자의 경험을 높이는데 주의를 기울였습니다.          |
|          axios          |                                          JSON 데이터 처리, 자동 문자열 변환(stringify), 에러처리의 편리성으로 axios를 사용하였습니다.                                           |

## 프로젝트 구조 설계

- public

  - img, svg, logo같은 정적인 이미지 파일

- src

  - common : 공통적인 사용

    - apis : api를 효과적으로 관리
    - constant : 의미있는 변수의 사용
    - hooks : 여러 곳에서 쓰이는 hook 그룹
    - styles : 공통 스타일
    - type : 자주쓰이는 타입 그룹

  - components : component별로 적용
    - filter : filter와 filterItem으로 나누어 정리
    - layout : 손이 가지 않도록 공통 layout 설정
    - list : list listCard으로 나누어 정리
    - paginations : 재사용성을 위한 분리
    - search : SearchBar, SearchIcon, SearchInput으로 나누어 정리
  - pages : page라우팅 사용
    - api : server에서 api를 가져오도록 설정
    - \_app : Layout, GlobalStyle 적용
    - \_document : `ServerStyleSheet` 설정
