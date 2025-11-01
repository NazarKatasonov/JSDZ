const Transaction = {
  DEPOSIT: 'deposit',
  WITHDRAW: 'withdraw',
};




const account = {
  balance: 0,
  transactions: [],


  createTransaction(amount, type) {
    const id = new Date().getTime();
    return { id, type, amount };
  },


  deposit(amount) {
    const transaction = this.createTransaction(amount, Transaction.DEPOSIT);
    this.balance += amount;
    this.transactions.push(transaction);
    console.log(`Deposited ${amount}. New balance: ${this.balance}`);
  },


  withdraw(amount) {
    if (amount > this.balance) {
      console.log('Insufficient funds');
      return;
    }
    const transaction = this.createTransaction(amount, Transaction.WITHDRAW);
    this.balance -= amount;
    this.transactions.push(transaction);
    console.log(`Withdrew ${amount}. New balance: ${this.balance}`);
  },

 
  getBalance() {
    console.log(`Current balance: ${this.balance}`);
    return this.balance;
  },

  
  getTransactionDetails(id) {
    const transaction = this.transactions.find(({ id: txId }) => txId === id);
    if (transaction) {
      console.log('Transaction details:', transaction);
    } else {
      console.log('Transaction not found');
    }
    return transaction;
  },

  

   
  getTransactionTotal(type) {
    const total = this.transactions
      .filter(({ type: txType }) => txType === type)
      .reduce((acc, { amount }) => acc + amount, 0);
    console.log(`Total ${type}: ${total}`);
    return total;
  },
};


account.deposit(1000);
account.withdraw(200);
account.withdraw(1000); 
account.getBalance(); 
account.getTransactionTotal(Transaction.DEPOSIT); 
account.getTransactionTotal(Transaction.WITHDRAW);
account.getTransactionDetails(1609459200000);