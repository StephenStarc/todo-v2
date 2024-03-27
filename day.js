
exports.getDate  = function(){
const date = new Date()
options = {
    weekday:'long',
    day:'numeric',
    month:'long'
}

const todayvalue = date.toLocaleDateString('en-US',options)
return todayvalue
}
