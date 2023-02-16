<template>
  <div class="swiper-container" id="floor1Swiper" ref="cur">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="carousel in list" :key="carousel.id">
        <img :src="carousel.imgUrl" />
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>

    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>

<script>
import Swiper from "swiper";
export default {
  name: "Carousel",
  props: ["list"],
  watch: {
    // bannerList初始值空数组，当服务器的数据返回以后，它的bannerList存储的属性值会发生变化
    bannerList: {
      immediate: true,
      handler(newValue, oldValue) {
        // nextTick在下次DOM更新,循环结束之后,执行延迟回调。在修改数据之后立即使用这个方法，获取更新后的DOM。
        this.$nextTick(() => {
          let mySwiper = new Swiper(this.$refs.cur, {
            loop: true,
            // 分页器
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
            },
            // 左右按钮
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
          });
        });
      },
    },
  },
};
</script>

<style>
</style>