console.log("제니즈 보험 DATA 시스템이 정상 작동 중입니다.");

// 팝업창 열기
function openModal() {
    document.getElementById("asModal").style.display = "block";
    document.body.style.overflow = "hidden"; // 팝업 떴을 때 배경 스크롤 방지
}

// 팝업창 닫기
function closeModal() {
    document.getElementById("asModal").style.display = "none";
    document.body.style.overflow = "auto"; // 스크롤 복구
}

// 팝업창 바깥 어두운 영역 클릭 시 닫기
window.onclick = function(event) {
    let modal = document.getElementById("asModal");
    if (event.target == modal) {
        closeModal();
    }
}
