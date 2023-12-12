<template>
<div class="error">
    <h1>Erreur 404 </h1>
    <h2>Cette page n'existe pas</h2>
    <img src="../components/icons/error.png" alt="page 404">
</div>

</template>


<script>

export default {
    name: "PageNotFound"
}
</script>

<style>
.error{
    display: flex ;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 35px;
}
</style>