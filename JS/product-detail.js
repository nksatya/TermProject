function init() {
    let course = JSON.parse(localStorage.getItem('selectedCourse'));
    console.log(course);
    document.getElementById('courseImg').src = course.imgSrc;
    document.getElementById('course-desc').innerHTML = course.courseDesc;
    document.getElementById('course-title').innerHTML = course.title;
    document.getElementById('instructor').innerHTML = course.instructor;
    document.getElementById('price').innerHTML = course.price;
    document.getElementById('time').innerHTML = course.time;
}