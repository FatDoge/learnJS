class LikeButton{
    constructor(){
        this.state={isLiked:false}
    }

    changeLikeText(){
        this.state.isLiked=!this.state.isLiked
    }

    createDOMFromString(str){
        console.log('change to dom')
        let wrapper=document.createElement('div')
        wrapper.innerHTML=str
        console.log(wrapper)
        return wrapper
    }

    render(){
        this.el=this.createDOMFromString(`
        <button class='like-button'>
            <span class='like-text'>${this.state.isLiked ? '取消' : '点赞'}</span>
            <span>👍</span>
        </button>
        `)
        this.el.addEventListener('click', this.changeLikeText.bind(this),false)
        return this.el
    }
}