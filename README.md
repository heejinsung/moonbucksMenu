step1 요구사항 구현을 위한 전략 - 돔 조작과 이벤트 핸들링으로 메뉴 관리

TODO 메뉴 추가
- 메뉴의 이름을 입력 받고 엔터키 입력으로 추가한다.
- 추가되는 메뉴의 마크업은 `<ul id="espresso-menu-list" class="mt-3 pl-0"></ul>`안에 삽입해야 한다.
- 메뉴가 추가되고 나면, input은 빈 값을 초기화한다.
- 사용자 입력값이 빈 값이라면 추가되지 않는다.

TODO 메뉴 수정 
- 메뉴의 수정 버튼클릭 이벤트를 받고, 메뉴 이름 수정할 수 있다.
- 메뉴 수정시 브라우저에서 제공하는 'propmt' 인터페이스를 활용한다.
- 메뉴 삭제 버튼을 이용하여 메뉴 삭제 할 수 있다.
- 메뉴 수정시 브라우저에서 제공하는 'confirm' 인터페이스를 활용한다.
- 총 메뉴 갯수를 count하여 상단에 보여준다.

step2 요구사항 - localstorage & 상태관리로 메뉴 관리

- localStorage에 데이터를 저장하여 새로고침해도 데이터가 남아있게 한다.
- 에스프레소, 프라푸치노, 블렌디드, 티바나, 디저트 각각의 종류별로 메뉴판을 관리할 수 있게 만든다.
- 페이지에 최초로 접근할 때는 에스프레소 메뉴가 먼저 보이게 한다.
- 품절 상태인 경우를 보여줄 수 있게, 품절 버튼을 추가하고 sold-out class를 추가하여 상태를 변경한다.

TODO localStorage Read & Write
- localStorage에 데이터를 저장한다.
- localStorage에 있는 데이터를 읽어온다.

TODO 카테고리별 메뉴판 관리
- 에스프레소 메뉴판 관리
- 프라푸치노 메뉴판 관리
- 블렌디드 메뉴판 관리
- 티바나 메뉴판 관리
- 디저트 메뉴판 관리 

TODO 페이지 접근 시 최초 데이터 Read & Rendering
- 페이지에 최초로 접근할 때 localStorage에 에스프레소 메뉴들을 읽어온다.
- 에스프레소 메뉴를 페이지에 그려준다.

TODO 품절 상태 관리
- 품절 상태인 경우를 보여줄 수 있게, 품절 버튼을 추가하고 sold-out class를 추가하여 상태를 변경한다.
- 품절 버튼을 추가한다.
- 품절 버튼을 클릭하면 localStorage에 상태값이 저장된다.
- click event에서 가장 가까운 li 태그 class 속성 값에 sold-out을 추가한다.