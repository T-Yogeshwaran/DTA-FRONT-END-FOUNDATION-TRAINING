function findMax() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    var s = 0;
    s = Math.max.apply(Math, nums);
    console.log("The maximum value is:" + s);
}
var Customer = /** @class */ (function () {
    function Customer(cid, cname, cloc) {
        if (cid === void 0) { cid = 0; }
        if (cname === void 0) { cname = ""; }
        if (cloc === void 0) { cloc = ""; }
        this.cid = cid;
        this.cname = cname;
        this.cloc = cloc;
    }
    Customer.prototype.showDetails = function () {
        var str = "Customer Id  : ".concat(this.cid, ", Customer Name : ").concat(this.cname, " , Customer Location : ").concat(this.cloc);
        console.log(str);
    };
    return Customer;
}());
var obj1 = new Customer();
var obj2 = new Customer(54655);
var obj3 = new Customer(54655, "Smith", "Hyd");
obj1.showDetails();
obj2.showDetails();
obj3.showDetails();
// Function Calling
console.log("------------------------");
console.log("Passing dobule Value:");
findMax(1, 5, 8, 3, 10, 2);
console.log("------------------------");
console.log("Passing Triple Values:");
findMax(1, 5, 8);
console.log("------------------------");
console.log("Passing Four Values:");
findMax(1, 5, 8, 3);
console.log("------------------------");
