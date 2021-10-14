const $ = (selector) => document.querySelector(selector);

const store = {
  setLocalStorage(menu) {
    localStorage.setItem('menu', JSON.stringify(menu));
  },
  getLocalStorage() {
    localStorage.getItem('menu');
  },
};

function App() {
  // 상태는 변하는 데이터 , 이 앱에서 변하는 것이 무엇인가 - (갯수,) 메뉴명
  // 갯수는 메뉴명만 알아도 알수있는 값이기 때문에 따로 localstorage에 저장되는게 아니라 관리 필요없음.

  // 메뉴 총 갯수 count
  const updateMenuCount = () => {
    const menuCount = $('#espresso-menu-list').querySelectorAll('li').length;
    $('.menu-count').innerText = `총 ${menuCount} 개`;
  };

  const addMenuName = () => {
    if ($('#espresso-menu-name').value === '') {
      alert('값을 입력해주세요!');
      return;
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

    updateMenuCount();
    // input 빈값 초기화 (코드의 순서대로 실행되기때문에 가능)
    $('#espresso-menu-name').value = '';
  };

  const updateMenuName = (e) => {
    const $menuName = e.target.closest('li').querySelector('.menu-name');
    const updatedMenuName = prompt('메뉴명을 수정하세요!', $menuName.innerText);
    $menuName.innerText = updatedMenuName;
  };

  const removeMenuName = (e) => {
    if (confirm('정말 삭제하시겠습니까?')) {
      e.target.closest('li').remove();
      updateMenuCount();
    }
  };

  $('#espresso-menu-list').addEventListener('click', (e) => {
    // 메뉴수정기능
    if (e.target.classList.contains('menu-edit-button')) {
      updateMenuName(e);
    }

    // 메뉴 삭제
    if (e.target.classList.contains('menu-remove-button')) {
      removeMenuName(e);
    }
  });

  $('#espresso-menu-form').addEventListener('submit', (e) => {
    e.preventDefault();
  });

  // 확인버튼 이벤트
  $('#espresso-menu-submit-button').addEventListener('click', addMenuName);

  // 메뉴의 이름을 입력받기
  $('#espresso-menu-name').addEventListener('keypress', (e) => {
    if (e.key !== 'Enter') {
      return;
    }
    addMenuName();
  });
}
App();
