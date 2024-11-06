// 게시글 목록을 저장할 배열
const posts = [];

// DOMContentLoaded 이벤트 리스너를 통해 DOM이 완전히 로드된 후에 실행
document.addEventListener('DOMContentLoaded', () => {
    // 게시글 작성 폼 제출 이벤트 리스너 추가
    document.getElementById('postForm').addEventListener('submit', function(event) {
        event.preventDefault(); // 기본 제출 동작 방지 (페이지 새로고침 방지)

        // 입력된 제목과 내용을 가져오기
        const title = document.getElementById('title').value;
        const content = document.getElementById('content').value;

        // 게시글 추가: 제목과 내용을 객체 형태로 배열에 추가
        posts.push({ title, content });
        displayPosts(); // 게시글 목록 표시 함수 호출
        this.reset(); // 폼 초기화 (입력 필드 비우기)
    });
});

// 게시글 목록 표시 함수
function displayPosts() {
    const postList = document.getElementById('postList'); // 게시글 목록을 표시할 요소 선택
    postList.innerHTML = ''; // 기존 게시글 목록 초기화 (이전 내용을 지움)

    // 저장된 게시글 배열을 순회하며 게시글을 화면에 추가
    posts.forEach((post) => {
        const postDiv = document.createElement('div'); // 새로운 div 요소 생성
        postDiv.className = 'post'; // 생성한 div에 'post' 클래스 추가
        // 제목과 내용을 포함하는 HTML 설정
        postDiv.innerHTML = `<h3>${post.title}</h3><p>${post.content}</p>`;
        postList.appendChild(postDiv); // 게시글 목록에 새로운 게시글 추가
    });
}
