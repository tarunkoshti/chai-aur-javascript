function loadScript(url, callback){
    let script = document.createElement('script')
    script.src = url
    script.onload = function () {
    console.log("loaded script" + url)
    callback(null, url)
    }
    script.onerror = function () {
    console.log("loaded script" + url)
    callback(new Error("src got some error"), url)
    }
    document.body.append(script)
  }

//   function hello(error ,src){
//     if(error)
//       console.log(error)
//     else
//     console.log("hello world" + src)
//   }

//   function hy(error, src){
//     if(error){
//         console.log(error)
//         return;
//     }

//   }

  loadScript("https://cdn.jsdelivr.net/pm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js", function hy(error, src){
    if(error){
        console.log(error)
        return;
    }
        loadScript("https://cdn.jsdelivr.net/pm/bootstrap@5.3.3/dist/js/bootstrap2.bundle.min.js", function hy(error, src){
            if(error){
            console.log(error)
            return;
            }
                loadScript("https://cdn.jsdelivr.net/pm/bootstrap@5.3.3/dist/js/bootstrap3.bundle.min.js", function hy(error, src){
                    if(error){
                        console.log(error)
                        return;
                    }
                    console.log("compelete")
                })
        })
  })