<!-- Please remove this file from your project -->
<template>
  <div class="navbar">
    <span class="icon">
        <font-awesome-icon :icon="['fa', 'fa-bars']"/>
    </span>
    <div class="logoName">HandsUp</div>
    <span class="icon">
        <font-awesome-icon :icon="['fa', 'fa-sign-out']"/>
    </span>
  </div>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>
<style lang="scss">
.navbar{
  width: 100%;
  height: 55px;
  position:fixed;
  z-index:99;
  top:0;
  left:0;
  background-color: #8DC8FF;
  color:#fff;
  font-size: 36px;
  display:flex;
  align-items:center;
  .icon{
    flex-basis: 50px;
    height: 36px;
    margin: auto 25px;
  }
  .logoName{
    flex-grow:1;
  }
}
</style>