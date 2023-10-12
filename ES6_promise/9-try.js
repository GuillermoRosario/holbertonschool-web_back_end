export default function guardrail(mathFunction) {
    const queue = [];
<<<<<<< HEAD
    try {
      queue.push(mathFunction());
    } catch (err) {
      queue.push(`Error: ${err.message}`);
    }
    queue.push('Guardrail was processed');
=======
    let value;
  
    try {
      value = mathFunction();
    } catch (err) {
      value = err.toString();
    }
  
    queue.push(value);
    queue.push('Guardrail was processed');
  
>>>>>>> 3b547ae8054efc9947a0fcaf0e1fb916dfd676fe
    return queue;
  }