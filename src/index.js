document
  .querySelector("#calculate")
  .addEventListener("click", onClickCalculate);

function calculateDeposit(target, balance) {
  const result = target - balance;
  const way = result < 0 ? "출금" : result > 0 ? "입금" : "-";
  const amount = Math.abs(result);

  return `${way} ${amount || ""}`;
}

function onClickCalculate() {
  const rows = document
    .querySelector("table")
    .querySelector("tbody")
    .querySelectorAll("tr");

  for (const row of rows) {
    const targetStr = row.querySelector(".target input").value;
    const balanceStr = row.querySelector(".balance input").value;

    const targetNum = Number(targetStr);
    const balanceNum = Number(balanceStr);

    const deposit = calculateDeposit(targetNum, balanceNum);

    const depositEl = row.querySelector(".deposit");
    depositEl.innerHTML = deposit;
  }
}
