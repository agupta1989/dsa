class MyHashTable {
  constructor(size) {
    this.data = new Array(size || 10);
  }

  _hash(key) {
    let hash = 0;
    if (key.length === 0) return hash;
    for (let i = 0; i < key.length; i++) {
      // const chr   = key.charCodeAt(i);
      // hash  = ((hash << 5) - hash) + chr;
      // hash |= 0; // Convert to 32bit integer
      const keyCode = key.charCodeAt(i);
      hash += (keyCode * i) % this.data.length;
    }
    return hash;
  }

  set(key, value) {
    const hash = this._hash(key);
    if (!this.data[hash]) {
      this.data[hash] = [];
    }
    this.data[hash].push([key, value]);
    console.log(this.data);
  }

  get(key) {
    const hash = this._hash(key);
    const bucket = this.data[hash];
    if (bucket) {
      for (let i = 0; i < bucket.length; i++) {
        const item = bucket[i];
        if (item[0] === key) {
          return item[1];
        }
      }
    }
  }

  keys() {
    const keysArray = [];
    for (let i = 0; i < this.data.length; i++) {
      const _bucket = this.data[i];
      console.log(_bucket);
      if (_bucket && _bucket.length) {
        // _bucket.forEach((_d) => keysArray.push(_d[0]));
        keysArray.push(_bucket[0][0])
      }
    }
    return keysArray;
  }
}

const myHashTable = new MyHashTable(2);
// const hash = myHashTable._hash('grapes');
// console.log(hash);
myHashTable.set('grapes', 200);
myHashTable.set('apples', 2);

const value = myHashTable.get('grapes');
console.log(value);

const keys = myHashTable.keys();

console.log(keys);