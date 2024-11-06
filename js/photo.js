function showCategory(category) {
    const domesticGallery = document.getElementById('domesticGallery'); //국내
    const foreignGallery = document.getElementById('foreignGallery'); //국외
    const allPhotos = document.querySelectorAll('.photo'); //모든사진

    // 모든 사진 숨기기
    allPhotos.forEach(photo => {
        photo.style.display = 'none'; // 모든 사진 숨김
    });

    // 카테고리에 따른 동작
    if (category === 'out') {
        domesticGallery.style.display = 'none'; // 국내 사진 숨김
        foreignGallery.style.display = 'block'; // 국외 사진 갤러리 보이기

        // 국외 버튼 보이기
        document.getElementById('malaysiaButton').style.display = 'block';
        document.getElementById('japanButton').style.display = 'block';
        document.getElementById('bangkokButton').style.display = 'block';

    } else if (category === 'in') {
        foreignGallery.style.display = 'none'; // 국외 사진 숨김
        domesticGallery.style.display = 'block'; // 국내 사진 갤러리 보이기

        // 제주도 버튼 보이기
        document.getElementById('jejuButton').style.display = 'block';

    } else if (category === 'jejudo') {
        const jejuPhotos = document.querySelector('.photo.jeju');
        domesticGallery.style.display = 'block'; // 국내 사진 갤러리 보이기
        jejuPhotos.style.display = 'block'; // 제주도 사진 보이기

    } else {
        // 선택한 국외 카테고리에 따른 사진 보이기
        const selectedPhotos = document.querySelector(`.photo.${category}`);
        foreignGallery.style.display = 'block'; // 국외 사진 갤러리 보이기
        selectedPhotos.style.display = 'block'; // 선택한 카테고리의 사진 보이기
    }
}
