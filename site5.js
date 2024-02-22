function calculateDelivery() {
    const country = document.getElementById('country').value;
    const weight = parseFloat(document.getElementById('weight').value);
    const method = document.getElementById('method').value;
    let cost = 0;
  
    switch(country) {
      case 'USA':
        cost = 50;
        break;
      case 'Canada':
        cost = 70;
        break;
      case 'Europe':
        cost = 100;
        break;
      case 'KZ':
        cost = 60;
        break; 
      case 'Russia':
        cost = 110;
        break; 
      case 'Korea':
        cost = 160;
        break;     
      default:
        cost = 0;
       
    }
  
    if (method === 'express') {
      cost *= 1.5;
    }
  
    if (weight > 10) {
      cost += (weight - 10) * 5; // Каждый доп кг стоит $5
    }
  
    document.getElementById('result').innerHTML = `Общая стоимость доставки: $${cost.toFixed(2)}`;
  }
  