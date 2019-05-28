//3.

/**
 * 무엇이 더 나은지 이야기 할 수 있을 정도의 이해는 하지 못했다.
 * 개인적으로는, class를 사용하는 방식이 깔끔하고 더 명시적이라고 생각한다.
 * 확실한 것은 es6에서 추가된 class 키워드는 클래스 기반의 언어 개발자들에게 비교적 친숙하게 다가오는 방식이라고 생각한다.
 * 그러나 class역시 내부적으로는 prototype을 기반으로 동작하기 때문에, js 개발자라면 prototype도 깊게 공부해야 한다고 생각한다.
 */

// const inherits = require('util').inherits;

// function Queue(contents = []) {
//   this.queue = [...contents];
// }
// Queue.prototype.pop = function () {
//   const value = this.queue[0];
//   this.queue.splice(0, 1);
//   return value;
// };


// function PeekableQueue(contents) {
//   Queue.apply(this, contents);
// }
// inherits(PeekableQueue, Queue);
// PeekableQueue.prototype.peek = function () {
//   return this.queue[0];
// };

class Queue {
  constructor(contents = []) {
    this.queue = [...contents];
  }

  pop() {
    const value = this.queue[0];
    this.queue.splice(0, 1);
    return value;
  }
}

class PeekableQueue extends Queue {
  peek() {
    return this.queue[0];
  }
}