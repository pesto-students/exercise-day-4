# Questions

1) What would be the output of the following code ?
    ```
    var obj = {
      message: 'Hello',
      innerMessage: function () {
        (function () {
          console.log(this.message);
        }());
      }
    };
    console.log(obj.innerMessage());
    ```

2) What would be the output of the following code ?
    ```
    var obj = {
      message: 'Hello',
      innerMessage: function () {
        var self = this;
        (function () {
          console.log(self.message);
        }());
      }
    };
    console.log(obj.innerMessage());
    ```

3) What would be the output of the following code ?
    ```
    function myFunc(){
      console.log(this.message);
    }
    myFunc.message = "Hi John";
      
    console.log(myFunc());
    ```

4) What would be the output of the following code ?
    ```
    function myFunc() {
      myFunc.message = 'Hi John';
      console.log(myFunc.message);
    }
    console.log(myFunc());
    ```