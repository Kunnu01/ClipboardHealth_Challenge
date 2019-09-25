import axios from 'axios';

export const getTotalAmountToBePaidToWorker = async (workerId, setStateFn) => {
  if (!workerId) {
    setStateFn('Please enter worker Id');
  } else {
    const data = await axios.get(`/api/getDetailsOfWorker/${workerId}`);
    const { time, rate } = data.data;
    let totalAmount = 0;

    if (time > 8) {
      const overtime = time - 8;
      const overtimePay = (rate + rate * 0.1) * overtime;
      totalAmount = overtimePay + (rate * 8);
    } else {
      totalAmount = time * rate;
    }

    setStateFn(`Total amount to be paid: $${totalAmount}`);
  }
}

export const getTotalOvertimeAmountToBePaidToWorker = async (workerId, setStateFn) => {
  if (!workerId) {
    setStateFn('Please enter worker Id');
  } else {
    const data = await axios.get(`/api/getDetailsOfWorker/${workerId}`);
    const { time, rate } = data.data;
    if (time > 8) {
    const overtime = time - 8;
    const overtimePay = (rate + rate * 0.1) * overtime;
    setStateFn(`Total overtime amount to be paid: $${overtimePay}`);
    } else {
    setStateFn('Worker has not worked overtime');
    }
  }
}