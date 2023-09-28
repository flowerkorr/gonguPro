//승인 버튼
$('.approval-btn').on('click',function (){
    let applyNumber = $(this).data('number');
    // AJAX 요청으로 데이터 수정
    $.ajax({
        type: 'get',
        url: '/admin/approvalMento?applyNumber=' + applyNumber,
        success: function () {
            alert('성공적으로 승인했습니다.');
            location.reload();
        },
        error: function (a,b,c) {
            console.error(c);
        }
    });
});
// 거부 refusal-btn
$('.refusal-btn').on('click',function (){
    let applyNumber = $(this).data('number');
    // AJAX 요청으로 데이터 수정
    $.ajax({
        type: 'get',
        url: '/admin/refusalMento?applyNumber=' + applyNumber,
        success: function () {
            alert('성공적으로 거부했습니다.');
            location.reload();
        },
        error: function (a,b,c) {
            console.error(c);
        }
    });
});


//승인 버튼
$('.approval-detail-btn').on('click',function (){
    let applyNumber = $(this).data('number');
    // AJAX 요청으로 데이터 수정
    $.ajax({
        type: 'get',
        url: '/admin/approvalMento?applyNumber=' + applyNumber,
        success: function () {
            alert('성공적으로 승인했습니다.');
            location.replace('/admin/application');
        },
        error: function (a,b,c) {
            console.error(c);
        }
    });
});
// 거부 refusal-btn
$('.refusal-detail-btn').on('click',function (){
    let applyNumber = $(this).data('number');
    // AJAX 요청으로 데이터 수정
    $.ajax({
        type: 'get',
        url: '/admin/refusalMento?applyNumber=' + applyNumber,
        success: function () {
            alert('성공적으로 거부했습니다.');
            location.replace('/admin/application');
        },
        error: function (a,b,c) {
            console.error(c);
        }
    });
});