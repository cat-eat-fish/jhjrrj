<template>
  <div class="home">
    <MyHead></MyHead>
        <p>
            404
        </p>
    <MyFoot></MyFoot>
  </div>
</template>

<script>
import MyHead from "@/components/myhead"
import MyFoot from "@/components/myfoot"
export default {
    components:{
        MyHead,MyFoot
    },
    name: 'no404',
    data () {
        return {

        }
    },
}
</script>
<style scoped lang="scss">
    p{
        text-align: center;
        font-size: 40px;
    }
</style>    
