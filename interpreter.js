const Interpreter = function() {
    return {
        read: function(input) {
            //console.log(input);
            // this.A = [];
            // this.A.value = 0;
            // this.B = [];
            // this.A.value = 0;
            // this.C = [];
            // this.A.value = 0;
            // this.stack = this.A;
            // this.right = this.B;
            // this.left = this.C;
            if(!this.stack){
            this.stack=[];
            }
            if(!this.right){
            this.right=[];
            }
            if(!this.left){
            this.left=[];
            }
            
            var out = "";
            input = input.split('');
            if(!this.stack[0]){
            this.stack.unshift(0);
            }
            while (input.length > 0) {
                var ok = input.shift();
                //console.log(ok);
                if (ok === "+") {
                    this.stack[0]++;
                } else if (ok === "-") {
                    this.stack[0]--;
                } else if (ok === "<") {
                    this.left.unshift(this.stack[0]);
                } else if (ok === ">") {
                    this.right.unshift(this.stack[0]);
                } else if (ok === "*") {
                    this.stack.unshift(0);

                } else if (ok === "^") {

                } else if (ok === "#") {
                    var ok = this.stack;
                    this.stack = this.right;
                    this.right = this.left;
                    this.left = ok;
                } else if (ok === ",") {

                  var num="";
                  while(!isNaN(input[0])){
                    num+=input.shift();
                  }
                   this.stack.unshift(num);

                } else if (ok === ".") {
                    out += this.stack[0];
                } else if (ok === "[") {
                    if (this.stack[0] > 0) {
                        var rej = input.join("");
                        rej = rej.split("]");
                        var loopedinput = rej[0];

                        input = loopedinput + "[" + input.join("");
                        input = input.split("");

                    } else {
                        var rej = input.join("");
                        rej = rej.split("]");
                        input = rej[1].split("");

                    }
                }


            }
            return out;
        }
    };
}

//brainscrambler esoteric programming #3
