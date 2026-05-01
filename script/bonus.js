document.getElementById("get-bonus").addEventListener("click", function (event) {
    event.preventDefault();

    const coupon = document.getElementById("coupon").value;
    const mainBalance = geetInnerTextById("main-balance");

    if (coupon.length === 4) {

        const sum = mainBalance + coupon;
        setInnerTextByIdAndValue("main-balance", sum);
        alert("You Just Successfully Claimed Your Bonus");

        // add to transection history
        const container = document.getElementById("transection-container");
        const div = document.createElement("div");
        div.classList.add("bg-white", "p-4", "m-4", "rounded-2xl");
        div.innerHTML = `
                        <div class="flex gap-6">
                            <img class="w-12" src="assets/wallet1.png" alt="">
                            <div>
                               <h3 class="font-semibold">Erned Bonus</h3>
                               <p>${amount} Taka</p>
                            </div>
                         </div>
                    `;
        container.appendChild(div);
    } else {
        alert("Enter a Valid Coupon Code");
    }
});