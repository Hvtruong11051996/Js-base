let stuff = ['adidas', 'gucci', 'converse', 'chanel']
let option = prompt("What do u want ? ( C, R, U ,D)").toUpperCase()
console.log(option);

if (option !== 'C' && option !== 'R' && option !== 'U' && option !== 'D') {
    alert('Please re-enter !')
} else {
    if (option == 'C') {
        let new_item = prompt("name your new stuff")
        if (new_item !== '') {
            stuff.push(new_item);
        } else {
            alert('Please re-enter your name !')
        }
        // sau khi bắt lỗi chưa nhập tên cần hiện ra input nhập tên mà k cần F5

    } else if (option == ' R') {
        console.log("this is your stuff");
    } else if (option == 'U') {
        index = Number(prompt('do u want to edit?'))
        console.log(index);
        if (index !== NaN) {
            if (index < 0 || index >= stuff.length) {
                alert('Please re-enter the order number!')
            } else {
                new_value = prompt('enter new name')
                if (new_value !== '') {
                    stuff[index] = new_value
                    alert('UpDate successfully!')
                } else {
                    alert('Please re-enter your name !')
                }
            }
        } else {
            alert('Please re-enter the order number!')
        }

    } else if (option == 'D') {
        index_del = Number(prompt('do u want to edit?'))

        if (index_del == NaN) {
            alert('Please re-enter the serial number you want to delete!')
        } else {
            if (index_del < 0 || index_del >= stuff.length) {
                alert('Please re-enter the serial number you want to delete!')
            } else {
                stuff.splice(index_del, 1)
                alert('Delete successfully!')
            }
        }
    }
}

for (let i = 0; i < stuff.length; i++) {
    console.log(i, stuff[i]);
}
