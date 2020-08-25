var xhr

if (window.XMLHttpRequest){
    xhr = new XMLHttpRequest()
} else {
    xhr = new ActiveXObject("Microsoft.XMLHTTP")
}

xhr.open('GET', "https://api.xdclass.net/pub/api/v1/web/page_video?cp_id=2&c_id=110&page=1&size=20")

xhr.send(null)

xhr.onreadystatechange= function name(params){
    if (xhr.readyState===4){
        // 容错处理
        if (xhr.status===200){
        alert(xhr.responseText);
    } else {
        alert("error:", xhr.status)
    }
}
}