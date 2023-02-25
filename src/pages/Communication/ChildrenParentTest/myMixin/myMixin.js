export default {
    methods: {
        giveMoney(money) {
            this.money -= money;
            //$parent,VC一个属性,可以获取当前组件(属性|方法)
            this.$parent.money += money;
        },
    },
}