function init(event) {
    let count = document.getElementById('count');
    let cart = JSON.parse(localStorage.getItem('cart'));
    count.innerHTML = cart.count;
}


function storeData(event) {
    let title = event.srcElement.parentElement.childNodes[3].innerHTML;
    let price = event.srcElement.parentElement.childNodes[7].innerHTML;
    let instructor = event.srcElement.parentElement.childNodes[5].innerHTML;
    let imgSrc = event.srcElement.src;
    let type = event.srcElement.parentElement.parentElement.id;
    let courseDesc = ""
    let time = ""
    if (type === "health") {
        courseDesc = "This course is based on the tried and true principles of Yoga 15—a comprehensive, non-spiritual program of yoga videos designed to accelerate your performance and support your recovery. What makes this style of yoga different is that it's not only about what you accomplish in your practice but also about what your practice can help you to accomplish in other areas of your life.";
        time = "20 Hrs"
    }
    else if (type === "Marketing") {
        courseDesc = "Unlock the power of strategic marketing with our comprehensive \"Strategic Marketing Mastery\" course. In today's fast-paced and competitive business landscape, successful marketing goes beyond mere promotion—it's about crafting compelling narratives, understanding consumer behavior, and creating strategies that drive business growth. This course is designed to equip you with the knowledge and skills needed to excel in the dynamic world of modern marketing.";
        time = "30 Hrs"
    }
    else if (type === "Software") {
        courseDesc = "The Comprehensive Software Development Fundamentals course is designed to provide a solid foundation for aspiring software developers and individuals interested in entering the world of programming and software engineering. This immersive course caters to both beginners with no prior coding experience and those with some familiarity with programming concepts.\nThroughout the course, students will embark on a journey to understand the fundamental principles of software development, programming languages, and the entire software development lifecycle. They will gain practical skills in designing, writing, and debugging code, as well as a deep comprehension of the underlying logic and problem-solving strategies.";
        time = "40 Hrs"
    }
    else if (type === "Personality") {
        courseDesc = "Delve into the fascinating realm of human personalities with our immersive course, \"Unveiling Personalities: Exploring the Depths of Human Behavior.\" This course offers a captivating journey into the intricate and multifaceted world of individual differences, examining the factors that shape and define the way people think, feel, and interact with the world around them.\nGuided by seasoned psychologists and experts in personality theory, this course combines theoretical knowledge with practical insights, empowering you to better understand yourself and those around you. Through a blend of engaging lectures, interactive activities, case studies, and group discussions, you will gain a comprehensive understanding of various personality frameworks and their real-world applications."
        time = "30 Hrs"
    }
    else if (type === "Finance") {
        courseDesc = "The \"Fundamentals of Financial Management\" course provides students with a comprehensive understanding of the essential concepts and principles that underpin effective financial decision-making within organizations. This course serves as a cornerstone for anyone seeking to build a strong foundation in the field of finance, whether they are aspiring finance professionals or individuals looking to enhance their personal financial literacy.\nThroughout the course, students will delve into key topics such as financial analysis, valuation, risk management, and capital budgeting. They will gain insight into the tools and techniques used to assess the financial health of businesses, make informed investment choices, and manage resources efficiently."
        time = "20 Hrs"
    }
    else {
        courseDesc = "Step into the captivating world of music with our \"Exploring Musical Dimensions\" course, designed to introduce you to the diverse and enriching realms of sound. Whether you're a seasoned musician or a complete novice, this course offers an immersive experience that delves into the fundamental aspects of music, fostering a deeper understanding and appreciation for its intricacies.\nThroughout this course, you'll embark on a multifaceted journey that spans various musical genres, historical periods, and cultural influences. From classical symphonies to contemporary pop hits, from ancient folk tunes to avant-garde compositions, you'll discover the fascinating tapestry of human expression through sound."
        time = "50 Hrs"
    }


    let course = { title, price, instructor, imgSrc, courseDesc, time };
    localStorage.setItem('selectedCourse', JSON.stringify(course));
    window.open('https://nksatya.github.io/TermProject/HTML/product-detail.html', '_self');
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