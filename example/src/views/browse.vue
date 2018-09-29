<template>
  <scroll-container>
    <div class="browse-view">
      <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  </scroll-container>
</template>

<style scoped>
  .browse-view{
    flex:  1 auto;
    display: flex;
    justify-content: center;
  }

  ul{
    display: flex;
    max-width: 1200px;
    width: 100%;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 50px;
    list-style: none;
    margin: 0 auto;
  }

  li{
    background-color: #c8c8c8;
    width:  30%;
    height: 50vw;
    max-height: 450px;
    margin-top: 2.5vw;
    margin-bottom: 2.5vw;
  }
</style>

