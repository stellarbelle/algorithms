function listNode(value){
	this.val = value;
	this.next = null;
}



function linkedList(){
	var head = null;

	this.pushFront = function(value) {
		if(head != null){
			var node = head;
			head = new listNode(value);
			head.next = node
		} else {
			head = new listNode(value);
		}
		return head;
	};

	this.popFront = function() {
		if (!head) {
			return null;
		}
		var x = head;
		head = head.next;
		return x.val;
	};

	this.front = function() {
		if (!head){
			return null;
		} else {
			return head.val;
		}
	};

	this.contains = function(value){
		var node = head
		while (node){
			if (node.val == value){
				return true
			} else {
				node = node.next
			}
		}
		return false;
	};

	this.min = function(){
		var min = head.val;
		var node = head.next;
		while (node){
			if (node.val < min){
				min = node.val;
			}
			node = node.next;
		}
		return min;
	};

	this.max = function(){
		var max = head.val;
		var node = head.next;
		while (node){
			if (node.val > max){
				max = node.val;
			}
			node = node.next;
		}
		return max;
	};

	this.mean = function(){
		var count = 1
		var total = head.val
		var node = head.next;
		while (node){
			total += node.val
			node = node.next;
			count+=1;
		}
		return total/count;
	};

}



var list = new linkedList();

list.pushFront(3);
list.pushFront(2);
list.pushFront(1);

console.log(list.mean());


