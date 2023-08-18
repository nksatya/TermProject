function init() {
    let course = JSON.parse(localStorage.getItem('selectedCourse'));
    console.log(course);
    document.getElementById('courseImg').src = course.imgSrc;
    document.getElementById('course-desc').innerHTML = course.courseDesc;
    document.getElementById('course-title').innerHTML = course.title;
    document.getElementById('instructor').innerHTML = course.instructor;
    document.getElementById('price').innerHTML = course.price;
    document.getElementById('time').innerHTML = course.time;

    let count = document.getElementById('count');
    let cart = JSON.parse(localStorage.getItem('cart'));
    count.innerHTML = cart.count;
}

function increaseCount(event) {
    let count = parseInt(document.getElementById('count').innerHTML);
    let localCart = JSON.parse(localStorage.getItem('cart'));
    let clickedId = event.currentTarget.id;
    if (localCart.id.includes(clickedId)) {
        localCart.id.splice(localCart.id.indexOf(clickedId), 1);
        localCart.count = localCart.count - 1;
        document.getElementById('count').innerHTML = localCart.count;
        localStorage.setItem('cart', JSON.stringify(localCart));
    }
    else {
        count = count + 1;
        localCart.id.push(event.currentTarget.id);
        let cart = { "count": JSON.stringify(count), "id": localCart.id };
        localStorage.setItem('cart', JSON.stringify(cart));
        document.getElementById('count').innerHTML = count;
    }
}

function buyNow() {
    alert('Transfering you to external payment website.');
}