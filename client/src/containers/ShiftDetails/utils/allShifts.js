import axios from 'axios';

export const getTotalAmountToBePaid = async (setStateFn) => {
  const result = await axios.get('/api/getAllDetails');

  let totalAmountToBePaid = 0;

  for (let worker of result.data) {
    const { time, rate } = worker;
    let totalAmount = 0;
    if (time > 8) {
      const overtime = time - 8;
      const overtimePay = (rate + rate * 0.1) * overtime;
      totalAmount = overtimePay + (rate * 8);
    } else {
      totalAmount = time * rate;
    }
    totalAmountToBePaid += totalAmount;
  }

  totalAmountToBePaid = parseFloat(Math.round(totalAmountToBePaid * 100) / 100).toFixed(2);
  setStateFn(`Total amount to be paid: ${totalAmountToBePaid}`)
}

export const getTotalOvertimeAmountToBePaid =  async (setStateFn) => {
  const result = await axios.get('/api/getAllDetails');

  let totalAmountToBePaid = 0;

  for (let worker of result.data) {
    const { time, rate } = worker;
    if (time > 8) {
      const overtime = time - 8;
      const overtimePay = (rate + rate * 0.1) * overtime;
      totalAmountToBePaid += overtimePay;
    }
  }

  totalAmountToBePaid = parseFloat(Math.round(totalAmountToBePaid * 100) / 100).toFixed(2);
  setStateFn(`Total overtime amount to be paid: ${totalAmountToBePaid}`)
}

export const getTotalWorkersLessThan8Hrs = async (setStateFn) => {
  const result = await axios.get('/api/getAllDetails');
  const { data } = result;
  const workersWhoWorkedLess = data.filter(worker => worker.time < 8);

  setStateFn(`${workersWhoWorkedLess.length} workers worked less than 8 hrs`);
}

export const getTotalWorkersMoreThan8Hrs = async (setStateFn) => {
  const result = await axios.get('/api/getAllDetails');
  const { data } = result;
  const workersWhoWorkedMore = data.filter(worker => worker.time > 8);

  setStateFn(`${workersWhoWorkedMore.length} workers worked more than 8 hrs`);
}

export const getTotalWorkersEqual8Hrs = async (setStateFn) => {
  const result = await axios.get('/api/getAllDetails');
  const { data } = result;
  const workers = data.filter(worker => worker.time === 8);

  setStateFn(`${workers.length} workers worked only for 8 hrs`);
}
