var RetiredForagerBee = function() {
  ForagerBee.call(this);
  this.age = 40;
  this.job = 'gamble';
  this.canFly = false;

};

RetiredForagerBee.prototype = Object.Create(ForagerBee.prototype);
RetiredForagerBee.prototype.constructor = RetiredForagerBee;

RetiredForagerBee.prototype.forage = function(){
  return 'I am too old, let me play cards instead';
};

RetiredForagerBee.prototype.gamble(treasure) {
  this.treasureChest.push(treasure);
};
