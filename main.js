document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.querySelector('.menu-bar'); // Select the menu icon
    const subMenuWrap = document.getElementById('subMenu'); // Select the submenu wrapper

    menuIcon.addEventListener('click', function() {
        subMenuWrap.classList.toggle('open-menu'); // Toggle the class to open/close the menu
    });
});

const downloadBtn = document.querySelector(".download-btn");
const fileLink = "https://drive.google.com/uc?export=download&id=1-5hbcdrHmvBq07p8MDz42vZ5UIGKqfxv";

const initTimer = () => {
    if(downloadBtn.classList.contains("disable-timer")) {
        return location.href = fileLink;
    }
    let timer = downloadBtn.dataset.timer;
    downloadBtn.classList.add("timer");
    downloadBtn.innerHTML = `Your download will begin in <b>${timer}</b> seconds`;
    const initCounter = setInterval(() => {
        if(timer > 0) {
            timer--;
            return downloadBtn.innerHTML = `Your download will begin in <b>${timer}</b> seconds`;
        }
        clearInterval(initCounter);
        location.href = fileLink;
        downloadBtn.innerText = "Your file is downloading...";
        setTimeout(() => {
            downloadBtn.classList.replace("timer", "disable-timer");
            downloadBtn.innerHTML = `<span class="icon material-symbols-rounded">vertical_align_bottom</span>
                                     <span class="text">Download Again</span>`;
        }, 3000);
    }, 1000);
}

downloadBtn.addEventListener("click", initTimer);

document.addEventListener('DOMContentLoaded', () => {
    const faqs = document.querySelectorAll(".faq");

    faqs.forEach((faq) => {
        faq.addEventListener("click", () => {
            faq.classList.toggle("active");
            const answer = faq.querySelector(".answer");
            if (answer.style.maxHeight) {
                answer.style.maxHeight = null;
            } else {
                answer.style.maxHeight = answer.scrollHeight + "px";
            }
        });
    });
});

