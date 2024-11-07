document.getElementById("openFormButton").addEventListener("click", function () {
    window.location.href = "index_form.html"; // 跳转到填写表单的页面
});

document.getElementById("applicationForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = {
        name: document.getElementById("name").value,
        idNumber: document.getElementById("idNumber").value,
        phone: document.getElementById("phone").value,
        registeredAddress: document.getElementById("registeredAddress").value,
        currentAddress: document.getElementById("currentAddress").value,
        householdType: document.getElementById("householdType").value,
        identifyDate: document.getElementById("identifyDate").value,
        noPolicyDate: document.getElementById("noPolicyDate").value,
        identifyStandard: document.getElementById("identifyStandard").value,
        waterStatus: document.getElementById("waterStatus").value,
        housingStatus: document.getElementById("housingStatus").value,
        workersCount: document.getElementById("workersCount").value,
        workIncome: document.getElementById("workIncome").value,
        averageIncome: document.getElementById("averageIncome").value,
        registerDate: document.getElementById("registerDate").value,
        idCardFront: document.getElementById("idCardFront").files[0],
        idCardBack: document.getElementById("idCardBack").files[0],
    };

    // 假设数据存储到 localStorage
    localStorage.setItem("latestSubmission", JSON.stringify(formData));

    // 提交后，跳转到统计页面
    window.location.href = "statistics.html";
});
