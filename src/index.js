function calculateDeposite(target, balance) {
  const result = target - balance;
  const way = result < 0 ? "출금" : result > 0 ? "입금" : "-";
  const amount = Math.abs(result);

  return `${way} ${amount || ""}`;
}
