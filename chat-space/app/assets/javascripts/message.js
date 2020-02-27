$(function(){
  function buildHTML(message){
    if (message.image){
      let html = 
            `<div class="main-chat__contents__content" data-message-id=${message.id}>
              <div class="main-chat__contents__content__top">
                <div class="main-chat__contents__content__top--user-name">
                  ${message.user_name}
                </div>
                <div class="main-chat__contents__content__top--date">
                  ${message.created_at}
                </div>
              </div>
              <div class="main-chat__contents__content__message">
                <p class="lower-message__content">
                  ${message.content}
                </p>
              </div>
              <img src=${message.image} >
            </div>`
      return html;
    } else {
      let html = 
        `<div class="main-chat__contents__content" data-message-id=${message.id}>
          <div class="main-chat__contents__content__top">
            <div class="main-chat__contents__content__top--user-name">
              ${message.user_name}
            </div>
            <div class="main-chat__contents__content__top--date">
              ${message.created_at}
            </div>
          </div>
          <div class="main-chat__contents__content__message">
            <p class="lower-message__content">
              ${message.content}
            </p>
          </div>
        </div>`
      return html;
    };
  }
  $("#new_message").on("submit", function(e){
    e.preventDefault();
    let formData = new FormData(this);
    let url = $(this).attr("action");
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })
    .done(function(data){
      let html = buildHTML(data);
      $(".messages").append(html);
      $('.messages').animate({ scrollTop: $('.messages')[0].scrollHeight});
      $(".form__submit").prop("disabled", false);
      $('form')[0].reset();


    })
    .fail(function() {
      alert("メッセージ送信に失敗しました");
      $(".form__submit").prop("disabled", false);
    });
  })
});