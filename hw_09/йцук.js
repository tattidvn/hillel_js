let ladder = {
    level: 0,
    up(){
        this.level++
        return this
    },
    down(){
        this.level--
        return this
    },
    showStep(){
        console.log(this.level)
        return this
    }
}
ladder.up().down().up().down().up().up().showStep().up().showStep()