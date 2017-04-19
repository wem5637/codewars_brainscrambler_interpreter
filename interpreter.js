const Interpreter = function() {
    return {
        read: function(input) {

            this.A = [];
            this.A.value = 0;
            this.B = [];
            this.A.value = 0;
            this.C = [];
            this.A.value = 0;
            this.stack = this.A;
            this.right = this.B;
            this.left = this.C;
            var out = "";
            input = input.split('');

            while (input.length > 0) {
                var ok = input.shift();
                if (ok === "+") {
                    this.stack[0]++;
                } else if (ok === "-") {
                    this.stack[0]--;
                } else if (ok === "<") {
                    this.left.push(this.stack[0]);
                } else if (ok === ">") {
                    this.right.push(this.stack[0]);
                } else if (ok === "*") {
                    this.stack.unshift(0);

                } else if (ok === "^") {

                } else if (ok === "#") {
                    var ok = this.stack;
                    this.stack = this.right;
                    this.right = this.left;
                    this.left = ok;
                } else if (ok === ",") {

                    if (!isNaN(input[0]) && !isNaN(input[1])) {
                        this.stack.unshift(input.shift()+input.shift());
                    } else {
                        this.stack.unshift(input.shift());
                    }

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

//brainscrambler esoteric programming #3 on codewars
