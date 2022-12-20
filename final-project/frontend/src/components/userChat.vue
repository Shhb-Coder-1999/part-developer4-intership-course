<template>
  <div class="userChat">
    <div class="message userChat__message">
      <div class="msg message__msg">
        <p class="msg__text">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
          صنعت چاپ و با استفاده از طراحان گرافیک است. لورم ایپسوم متن ساختگی با
          تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
        </p>
        <div class="details msg__details"></div>
      </div>
      <div class="reply message__reply">
        <div class="icon icon__reply">جواب</div>
        <div class="date date__reply"><p>1400/06/23 12:30</p></div>
      </div>
    </div>
    <div class="Reply userChat__Reply">
      <div class="msg Reply__msg">
        <p class="msg__text">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است. لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
          صنعت چاپ و با استفاده از طراحان گرافیک است. لورم ایپسوم متن ساختگی با
          تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.
        </p>
        <div class="details msg__details"></div>
      </div>
      <div class="reply Reply__reply">
        <div class="date date__reply"><p>1400/06/23 12:30</p></div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style scoped lang="scss">
.userChat {
  width: 100%;
  background: $pure-white;
  border-radius: 24px;
  padding: 15px 21px;
  display: flex;
  flex-direction: column;
  align-items: center;

  &__Reply {
    margin: 10px 0px;
  }

  .message {
    width: 100%;
    display: flex;

    &__msg {
      width: 75%;
    }
    &__reply {
      width: 25%;
    }

    .msg {
      &__text {
        font-weight: 400;
        font-size: 14px;
        line-height: 30px;
        color: $black;
      }
    }

    .reply {
      padding: 0px 10px;
      display: flex;
      justify-content: space-around;
    }

    .icon {
      font-weight: 400;
      font-size: 10px;
      line-height: 15px;
      color: $blue;
      background: #ccedff;
      width: 40px;
      height: 20px;
      text-align: center;
      border-radius: 12px;
      padding: 3px 3px;
    }

    .date {
      font-weight: 400;
      font-size: 12px;
      line-height: 24px;
      color: $gray;
    }
  }

  .Reply {
    display: flex;
    background: $blueSurface;
    color: $black;
    border-radius: 24px;
    padding: 10px 15px;

    &__reply {
      width: 35%;
    }

    .msg {
      font-weight: 400;
      font-size: 12px;
      line-height: 30px;
    }

    .date {
      font-weight: 400;
      font-size: 12px;
      line-height: 24px;
      color: $gray;
      text-align: center;
    }
  }
}
</style>
