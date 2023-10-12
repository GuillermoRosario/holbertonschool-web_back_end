export default function divideFunction(numerator, denominator) {
    if (denominator === 0) {
<<<<<<< HEAD
      throw new Error('cannot divide by 0');
    }
=======
      throw Error('cannot divide by 0');
    }
  
>>>>>>> 3b547ae8054efc9947a0fcaf0e1fb916dfd676fe
    return numerator / denominator;
  }