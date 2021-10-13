// step1 요구사항 구현을 위한 전략

// TODO 메뉴 추가
// - [x] 메뉴의 이름을 입력 받고 엔터키 입력으로 추가한다.
// - [ ] 메뉴의 이름을 입력 받고 확인 버튼을 클릭하면 메뉴를 추가한다.
// - [x] 추가되는 메뉴의 마크업은 `<ul id="espresso-menu-list" class="mt-3 pl-0"></ul>`안에 삽입해야 한다.
// - [x] 총 메뉴 갯수를 count하여 상단에 보여준다.
// - [x] 메뉴가 추가되고 나면, input은 빈 값을 초기화한다.
// - [x] 사용자 입력값이 빈 값이라면 추가되지 않는다.

const $ = (selector) => document.querySelector(selector);

function App() {
  // form태그가 자동으로 전송되는걸 막아준다.
  $('#espresso-menu-form').addEventListener('submit', (e) => {
    e.preventDefault();
  });

  const addMenuName = () => {
    if ($('#espresso-menu-name').value === '') {
      alert('값을 입력해주세요!');
      return; // return 값을 작성함으로써 뒤에 코드가 실행안됨.
    }

    const espressoMenuName = $('#espresso-menu-name').value;
    const menuItemTemplate = (espressoMenuName) => {
      return `<li class='menu-list-item d-flex items-center py-2'>
        <span class='w-100 pl-2 menu-name'>${espressoMenuName}</span>
        <button
          type='button'
          class='bg-gray-50 text-gray-500 text-sm mr-1 menu-edit-button'>
          수정
        </button>
        <button
          type='button'
          class='bg-gray-50 text-gray-500 text-sm menu-remove-button'>
          삭제
        </button>
      </li>`;
    };
    $('#espresso-menu-list').insertAdjacentHTML(
      'beforeend',
      menuItemTemplate(espressoMenuName)
    );
    // 메뉴 총 갯수 count
    // const 변수 = li 갯수를 카운팅해서 구하기 - html 클래스명이나 힌트들을 통해서 변수명 정하기
    const menuCount = $('#espresso-menu-list').querySelectorAll('li').length;
    $('.menu-count').innerText = `총 ${menuCount} 개`;

    // input 빈값 초기화 (코드의 순서대로 실행되기때문에 가능)
    $('#espresso-menu-name').value = '';
  };

  // 확인버튼 이벤트
  $('#espresso-menu-submit-button').addEventListener('click', () => {
    addMenuName();
  });

  // 메뉴의 이름을 입력받는건
  $('#espresso-menu-name').addEventListener('keypress', (e) => {
    if (e.key !== 'Enter') {
      return;
    }
    addMenuName();
  });
}
App();
