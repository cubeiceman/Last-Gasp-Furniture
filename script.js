const items = [`chair`, `recliner`, `table`, `umbrella`];
const prices = [25.5, 37.75, 49.95, 24.89];

const boughtItems = [`chair`, `recliner`, `table`, `umbrella`];
const boughtNums = [0, 0, 0, 0]

const states = [`AL`, `AK`, `AZ`, `AR`, `CA`, `CO`, `CT`, `DE`, `DC`, `FL`, 
                `GA`, `HI`, `ID`, `IL`, `IN`, `IA`, `KS`, `KY`, `LA`, `ME`, 
                `MD`, `MA`, `MI`, `MN`, `MS`, `MO`, `MT`, `NE`, `NV`, `NH`, 
                `NJ`, `NM`, `NY`, `NC`, `ND`, `OH`, `OK`, `OR`, `PA`, `PR`, 
                `RI`, `SC`, `SD`, `TN`, `TX`, `UT`, `VT`, `VI`, `VA`, `WA`, 
                `WV`, `WI`, `WY`]

let item;
let number;
let state;
let itemTotal = 0;
let zonePrice;
let tax = 0.15;
let done = false;


function purchase() {
    while (!done) {
        // user input for the item they want to buy
        item = prompt(`What item would you like to buy today: Chair, Recliner, Table or Umbrella?`);
        while (item === null || items.indexOf(item.toLowerCase()) === -1) {
            item = prompt(`Try again. What item would you like to buy today: Chair, Recliner, Table or Umbrella?`);
        }

        // user input for how many items they want to buy
        number = prompt(`How many ${item} would you like to buy?`);
        while (number === null || number === `` || Number(number) === NaN || number < 0) {
            number = prompt(`Try again. How many ${item} would you like to buy?`);
        }

        // update map
        boughtNums[boughtItems.indexOf(item.toLowerCase())] += Number(number);

        // ask user if they are done
        done = (prompt(`Continue Shopping? y/n`) === `n`) ? true : false;
    }

    // get state
    state = prompt(`Please enter the two letter state abbreviation.`);
    while (state === null || states.indexOf(state.toUpperCase()) === -1) {
        state = prompt(`Try again. Please enter the two letter state abbreviation.`);
    }
    state = state.toUpperCase();

    // calculations
    for (let i=0; i<boughtItems.length; i++) {
        if (boughtNums[i] === 0) {
            continue;
        }
        const unitPrice = prices[items.indexOf(boughtItems[i])];
        itemTotal += unitPrice * boughtNums[i]
        addRow("purchase-info", [capitalizeFirstLetter(boughtItems[i]), boughtNums[i], unitPrice.toFixed(2), (unitPrice*boughtNums[i]).toFixed(2)]);
    }

    // zone price picker
    switch (state) {
        case `AL`:
            zonePrice = 30; 
            break;
        case `AK`:
            zonePrice = 45;
            break;
        case `AZ`:
            zonePrice = 45; 
            break;
        case `AR`:
            zonePrice = 35; 
            break;
        case `CA`:
            zonePrice = 35; 
            break;
        case `CO`:
            zonePrice = 35; 
            break;
        case `CT`:
            zonePrice = 0; 
            break;
        case `DE`:
            zonePrice = 20; 
            break;
        case `DC`:
            zonePrice = 20; 
            break;
        case `FL`:
            zonePrice = 30; 
            break;
        case `GA`:
            zonePrice = 30; 
            break;
        case `HI`:
            zonePrice = 45;
            break;
        case `ID`:
            zonePrice = 45; 
            break;
        case `IL`:
            zonePrice = 20; 
            break;
        case `IN`:
            zonePrice = 20; 
            break;
        case `IA`:
            zonePrice = 30; 
            break;
        case `KS`:
            zonePrice = 30; 
            break;
        case `KY`:
            zonePrice = 20; 
            break;
        case `LA`:
            zonePrice = 40; 
            break;
        case `ME`:
            zonePrice = 0; 
            break;
        case `MD`:
            zonePrice = 20; 
            break;
        case `MA`:
            zonePrice = 0; 
            break;
        case `MI`:
            zonePrice = 30; 
            break;
        case `MN`:
            zonePrice = 30; 
            break;
        case `MS`:
            zonePrice = 40; 
            break;
        case `MO`:
            zonePrice = 30; 
            break;
        case `MT`:
            zonePrice = 45; 
            break;
        case `NE`:
            zonePrice = 40; 
            break;
        case `NV`:
            zonePrice = 45; 
            break;
        case `NH`:
            zonePrice = 0; 
            break;
        case `NJ`:
            zonePrice = 20; 
            break;
        case `NM`:
            zonePrice = 45; 
            break;
        case `NY`:
            zonePrice = 0; 
            break;
        case `NC`:
            zonePrice = 20; 
            break;
        case `ND`:
            zonePrice = 40; 
            break;
        case `OH`:
            zonePrice = 20; 
            break;
        case `OK`:
            zonePrice = 40; 
            break;
        case `OR`:
            zonePrice = 45; 
            break;
        case `PA`:
            zonePrice = 20; 
            break;
        case `PR`:
            zonePrice = 45;
            break;
        case `RI`:
            zonePrice = 0; 
            break;
        case `SC`:
            zonePrice = 20;
            break; 
        case `SD`:
            zonePrice = 40; 
            break;
        case `TN`:
            zonePrice = 30; 
            break;
        case `TX`:
            zonePrice = 45; 
            break;
        case `UT`:
            zonePrice = 45; 
            break;
        case `VT`:
            zonePrice = 0; 
            break;
        case `VI`:
            zonePrice = 45;
            break;
        case `VA`:
            zonePrice = 20; 
            break;
        case `WA`:
            zonePrice = 45; 
            break;
        case `WV`:
            zonePrice = 20;
            break;
        case `WI`:
            zonePrice = 30;
            break; 
        case `WY`:
            zonePrice = 45;
            break;
    }

    // add rows to table to print receipt
    document.getElementById(`item-total`).innerHTML = itemTotal.toFixed(2);
    document.getElementById(`state-abbr`).innerHTML += ` [${state}]:`;
    document.getElementById(`state-fee`).innerHTML = `$${zonePrice.toFixed(2)}`;
    document.getElementById(`subtotal`).innerHTML = `$${(itemTotal + zonePrice).toFixed(2)}`;
    document.getElementById(`tax`).innerHTML = `$${(itemTotal * tax).toFixed(2)}`;
    document.getElementById(`invoice-total`).innerHTML = `$${(itemTotal + zonePrice + (itemTotal*tax)).toFixed(2)}`;

    // switch from make purchase button to tables
    document.getElementById(`receipt`).style.display = `initial`;
    document.getElementById(`purchase`).style.display = `none`;
}

// table id you want to add to, info array to loop add
function addRow(id, info) {
    const tbl = document.getElementById(id);
    const row = tbl.insertRow();
    for (let i=0; i<info.length; i++) {
        const cell = row.insertCell();
        cell.innerHTML = info[i];
    }
}

// to capitalize first letter
function capitalizeFirstLetter(str) {
    return str.substring(0, 1).toUpperCase() + str.substring(1);
}

// for shop again button (reloads page)
function reloadPage() {
    location.reload();
}