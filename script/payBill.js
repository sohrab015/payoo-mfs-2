document.getElementById("pay-now").addEventListener("click", function (event) {
    event.preventDefault();

    const amount = getInputValueById("amount5");
    const pin = getInputValueById("pin5");
    const account = document.getElementById("account5").value;
    const mainBalance = geetInnerTextById("main-balance");

    const validBanks = ["Palli Biddut", "Gas", "Bradband"];
    const selectedBank = document.getElementById("allBank5").value;

    if (!validBanks.includes(selectedBank)) {
        alert("Please Select Type First!");
        return;
    } else {
        if (account.length === 11) {
            if (!isNaN(amount) && (amount > 0)) {
                if (!isNaN(pin)) {
                    const sub = mainBalance - amount;
                    setInnerTextByIdAndValue("main-balance", sub);
                    alert("Pay Bill Successfull");

                    // add to transection history
                    const container = document.getElementById("transection-container");
                    const div = document.createElement("div");
                    div.classList.add("bg-white", "p-4", "m-4", "rounded-2xl");
                    div.innerHTML = `
                        <div class="flex gap-6">
                            <img class="w-12" src="assets/wallet1.png" alt="">
                            <div>
                               <h3 class="font-semibold">Pay Bill</h3>
                               <p>${amount} Taka to ${selectedBank}</p>
                            </div>
                         </div>
                    `;
                    container.appendChild(div);

                } else {
                    alert("Your PIN is Wrong, Please give the correct PIN");
                }
            } else {
                alert("Enter Your Valid Positive Amount Before");
            }
        } else {
            alert("Enter a Valid Account Number");
        }
    }
});