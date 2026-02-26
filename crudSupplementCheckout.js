let checkoutDatabase = [];

function readCheckoutData() {
  let template = "";

  if (checkoutDatabase.length === 0) {
    template += `<td colspan="7">Tidak Ada Pesanan</td> `;
  } else {
    let totalHarga = 0;
    let totalQty = 0;
    for (let i = 0; i < checkoutDatabase.length; i++) {
      totalHarga += checkoutDatabase[i].subTotal;
      totalQty += checkoutDatabase[i].quantity;
    }

    template += `
        <tr>
            <td>1</td>
            <td>Whey Protein Isolate</td> 
            <td id=total-qty>${totalQty}</td> 
            <td id=total-harga>${totalHarga}</td>
            <td class="text-center">
                <button id="del-btn" class="btn btn-danger btn-sm delete" onclick="deleteCheckoutData()">Delete</button>
            </td>
        </tr>
        <tr class="total-row">
            <td colspan="3"><strong>Total</strong></td>
            <td colspan="2"><strong>${totalHarga}</strong></td>
        </td>
    `;
    document.getElementById('container-6').style.display = ""
  }

  let tableBody = document.getElementById("checkout-body");
  tableBody.innerHTML = template;


}

function qtyAdd() {
  let qtyElement = document.getElementById("buy-qty");
  let totalBuy = Number(qtyElement.textContent);

  if (totalBuy < 99) {
    qtyElement.textContent = totalBuy + 1;
  }
}

function qtyMin() {
  let qtyElement = document.getElementById("buy-qty");
  let totalBuy = Number(qtyElement.textContent);

  if (totalBuy > 1) {
    qtyElement.textContent = totalBuy - 1;
  }
}

function createCheckoutData() {
  console.log("clicked");
  let totalBuy = Number(document.getElementById("buy-qty").textContent);
  let subTotal = 350000 * totalBuy;

  let id = 1;
  if (checkoutDatabase.length !== 0) {
    id = checkoutDatabase[checkoutDatabase.length - 1].id + 1;
  }

  let newObj = {
    id: id,
    product: "Whey Protein Isolate",
    quantity: totalBuy,
    subTotal: subTotal,
  };

  checkoutDatabase.push(newObj);
  document.getElementById("buy-qty").textContent = 1;

  readCheckoutData();
}

function deleteCheckoutData() {
  checkoutDatabase = [];
  document.getElementById('container-6').style.display = 'none'
  readCheckoutData();
}

function formatRupiah(angka) {
  return "Rp " + angka.toLocaleString("id-ID");
}

function checkoutAllData() {
  console.log("clicked");
  if (checkoutDatabase.length === 0) {
    alert("Belum ada barang yang ditambahkan!");
  } else {
    let totalHarga = Number(document.getElementById("total-harga").textContent);
    let totalQty = Number(document.getElementById("total-qty").textContent);
    // console.log(totalHarga, totalQty);

    /*Otak-atik disini */
    let productDetail = `Whey Protein Isolate x${totalQty} = ${formatRupiah(totalHarga)}`;

    document.getElementById("modal-product-detail").textContent = productDetail;
    document.getElementById("modal-total").textContent = formatRupiah(totalHarga);

    // Tampilkan modal
    let modal = new bootstrap.Modal(document.getElementById("checkoutModal"));
    modal.show();
    /*Otak-atik disini */

    checkoutDatabase = [];
    document.getElementById('container-6').style.display = 'none'
    readCheckoutData();
  }
}

readCheckoutData();
