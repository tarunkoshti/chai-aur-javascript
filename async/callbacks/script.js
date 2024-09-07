// Here we have a single operation that's split into three steps, where each step depends on the last step
// As a synchronous program, this is very straightforward.

function doStep1(init) {
    return init + 1;
  }
  
  function doStep2(init) {
    return init + 2;
  }
  
  function doStep3(init) {
    return init + 3;
  }
  
  function doOperation() {
    let result = 0;
    result = doStep1(result);
    result = doStep2(result);
    result = doStep3(result);
    console.log(`result: ${result}`);
  }
  
  doOperation();
  

  // implemented the steps using callbacks

  function doStep1(init, callback) {
    const result = init + 1;
    callback(result);
  }
  
  function doStep2(init, callback) {
    const result = init + 2;
    callback(result);
  }
  
  function doStep3(init, callback) {
    const result = init + 3;
    callback(result);
  }
  
  function doOperation() {
    doStep1(0, (result1) => {
      doStep2(result1, (result2) => {
        doStep3(result2, (result3) => {
          console.log(`result: ${result3}`);
        });
      });
    });
  }
  
  doOperation();
  
  // Because we have to call callbacks inside callbacks, we get a deeply nested doOperation() function, which is much harder to read and debug. This is sometimes called "callback hell" or the "pyramid of doom" (because the indentation looks like a pyramid on its side).


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

  function hello(error ,src){
    if(error)
      console.log(error)
    else
    console.log("hello world" + src)
  }

  function hy(src){
    console.log("hy" + src)
  }

  loadScript("https://cdn.jsdelivr.net/pm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js", hello)