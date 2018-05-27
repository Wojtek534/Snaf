<template>
    <div class="feature-box">
      <h2 class="feature-box__icon-header">{{boxIcon}}</h2>
      <h3 class="feature-box__header u-margin-bottom-small">{{boxTitle}}</h3>
      <p class="feature-box__text">
      {{boxContent}}
      </p>
    </div>
</template>
<script>
export default {
  props: ['boxTitle', 'boxIcon', 'boxContent']
};
</script>
