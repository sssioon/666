document.getElementById("applicationForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = new FormData();
    formData.append("name", document.getElementById("name").value);
    formData.append("idNumber", document.getElementById("idNumber").value);
    formData.append("phone", document.getElementById("phone").value);
    formData.append("registeredAddress", document.getElementById("registeredAddress").value);
    formData.append("currentAddress", document.getElementById("currentAddress").value);
    formData.append("householdType", document.getElementById("householdType").value);
    formData.append("identifyDate", document.getElementById("identifyDate").value);
    formData.append("noPolicyDate", document.getElementById("noPolicyDate").value);
    formData.append("identifyStandard", document.getElementById("identifyStandard").value);
    formData.append("waterStatus", document.getElementById("waterStatus").value);
    formData.append("housingStatus", document.getElementById("housingStatus").value);
    formData.append("workersCount", document.getElementById("workersCount").value);
    formData.append("workIncome", document.getElementById("workIncome").value);
    formData.append("averageIncome", document.getElementById("averageIncome").value);
    formData.append("registerDate", document.getElementById("registerDate").value);
    formData.append("idCardFront", document.getElementById("idCardFront").files[0]);
    formData.append("idCardBack", document.getElementById("idCardBack").files[0]);

    // 向 API 发送数据
    fetch('API_URL', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        alert('提交成功！');
        window.location.href = "statistics.html";
    })
    .catch(error => {
        console.error('提交失败:', error);
        alert('提交失败，请稍后重试');
    });
});
