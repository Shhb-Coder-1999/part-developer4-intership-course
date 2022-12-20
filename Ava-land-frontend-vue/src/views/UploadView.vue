<template>
  <div class="upload">
    <vBreadcrumbs class="Breadcrumbs" />
    <vUploadBox />
    <vMusicInfo class="MusicInfo" :showTitle="true" />
  </div>
</template>

<script setup>
import vUploadBox from "../components/appUploadBox.vue";
import vMusicInfo from "../components/musicInfo.vue";
import vBreadcrumbs from "../components/appBreadcrumbs.vue";
</script>

<style lang="scss" scoped>
.upload {
  margin: 46px 42px 0px 120px;
  padding-bottom: 130px;
}
.MusicInfo {
  margin: 46px 0px 0px 0px;
}

.Breadcrumbs {
  margin: 52px 0px 0px 0px;
}

@media only screen and (max-width: 768px) {
  .upload {
    margin: 46px 25px 0px 25px;
    padding-bottom: 130px;
  }
}
</style>
