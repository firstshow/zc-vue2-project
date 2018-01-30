export default {
    bind(el, binding, vnode, oldVnode){
        scrollAction.call(el,{el, binding, vnode, oldVnode});
    },

}

function scrollAction(e){
    e.el.addEventListener('scroll', function(){
        let boxHeight = this.clientHeight,
            scrollHeight = this.scrollHeight,
            scrollTop = this.scrollTop;

        console.log(boxHeight);
        console.log(scrollHeight);
        console.log(scrollTop);
        console.log(e.binding);
        console.log(e.el.getAttribute('load-disabled'));

        if(boxHeight + scrollTop + 10 > scrollHeight){
            e.el.getAttribute('load-disabled') && e.binding.value()
        }
    }, false)
}
