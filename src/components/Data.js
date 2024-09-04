export default function getFormData() {
    return {
        name: document.querySelector("#name").value,
        email: document.querySelector("#email").value,
        phone: document.querySelector("#phone-number").value,
        schoolName: document.querySelector("#school-name").value,
        degree: document.querySelector("#degree").value,
        studyDate: document.querySelector("#study-date").value,
        company: document.querySelector("#company").value,
        responsibilities: document.querySelector("#responsibilities").value,
        workDate: document.querySelector("#work-date").value,
    }

}