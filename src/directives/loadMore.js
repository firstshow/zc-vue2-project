export default {
    bind(el, binding, vnode) {
        console.log('000');
        el.addEventListener('scroll', scrollAction.bind(el,{binding, vnode}), false);
    },
    inserted(){
        console.log('111');
    },
    update(){
        console.log('222');
    },
    componentUpdated(){
        console.log('333');
    },
    unbind(el, binding, vnode){
        console.log('444');
        el.removeEventListener('scroll', scrollAction.bind(el,{binding, vnode}), false);
    }
}

function scrollAction(obj){
    let boxHeight = this.clientHeight,
        scrollHeight = this.scrollHeight,
        scrollTop = this.scrollTop;

    if(boxHeight + scrollTop + 10 > scrollHeight){
        this.getAttribute('load-disabled') && obj.binding.value()
    }
}
