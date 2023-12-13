<script setup>
import { RouterLink ,RouterView } from 'vue-router'

</script>

<template>
  <header>
    <RouterLink to="/" exact><img alt="Logo" class="logo" src="./components/icons/logo1-removebg-preview.png" width="125" height="125" /></RouterLink>
    <nav>
      <button class="bouton1 " ><RouterLink to="/about">A propos</RouterLink></button>
      <button class="bouton2 " ><RouterLink to="/creation">Création</RouterLink></button>
      <button class="bouton3 " ><RouterLink to="/contact">Contact</RouterLink></button>
    </nav>
  </header>

  <RouterView />
  <footer>
    <p class="up-date"><small>Dernière mise à jour le</small></p>
    <figure>
      <a href="https://www.linkedin.com" target="_blank"><img src="./components/icons/linkedin.svg" alt="Logo Linkedin"></a>
      <a href="https://twitter.com" target="_blank"><img src="./components/icons/twitter.svg" alt="Logo Twitter "></a>
      <a href="https://github.com" target="_blank"><img src="./components/icons/github.svg" alt="Logo GitHub"></a>
    </figure>
  </footer>
</template>

<style scoped>
header {
  background-color: #191545;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
}

nav {
  display: flex;
  gap: 50px;
  margin-left: auto;
}

nav a {
  text-decoration: none;
  color: white;
}

.bouton1 {
  background-color: #a51d67;
  border-radius: 50px;
  height: 30px;
  width: 100px;
}

.bouton2 {
  background-color: #f5394b;
  border-radius: 50px;
  height: 30px;
  width: 100px;
}

.bouton3 {
  background-color: #f69f33;
  border-radius: 50px;
  height: 30px;
  width: 100px;
}

footer{
  background-color: #191545;
  display: flex ;
  justify-content: space-between;
}
footer p {
  display: flex;
  justify-content:center;
  align-items: center;
  color:white;
  
}

.up-date{ 
  flex: 1;
}
footer a img {
  height: 50px;
  width: 50px;

}

figure{
  display: flex;
  justify-content: center;
  flex:1 ;
  gap:20px;
  padding: 0;
  margin-right: 0;
  margin-left: 0;
}

.router-link-exact-active{
  text-decoration: underline;
}
</style>
