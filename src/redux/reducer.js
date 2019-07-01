export default function counter(state=0,actions) {
    switch(actions.type){
        case 'inc' :
            return state + actions.num
            break;
        case 'dec' :
            return state -actions.num
            break;
        default :
             return state
    }   
}
