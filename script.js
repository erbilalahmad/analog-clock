setInterval(()=>{
    let d=new Date()
    htime=d.getHours()
    mtime=d.getMinutes()
    stime=d.getSeconds()
    hrotaition=(30*htime) + (mtime/2)
    mrotaition=6*mtime
    srotaition=6*stime
    hour.style.transform=`rotate(${hrotaition}deg)`;
    minute.style.transform=`rotate(${mrotaition}deg)`;
    second.style.transform=`rotate(${srotaition}deg)`;
},1000)