document.getElementById("applicationForm").addEventListener("submit", function (event) {
    event.preventDefault();

    // 获取表单数据
    const formData = new FormData();
    formData.append("name", document.getElementById("name").value);
    formData.append("idNumber", document.getElementById("idNumber").value);
    formData.append("phone", document.getElementById("phone").value);
    formData.append("idCardImage", document.getElementById("idCardImage").files[0]);  // 上传身份证图片
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

    // 提交到数据库API（假设API URL为/api/submitForm）
    fetch('http://yourapiurl.com/api/submitForm', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        alert("提交成功！");
        window.open("statistics.html");
    })
    .catch(error => {
        console.error('Error:', error);
        alert("提交失败，请稍后再试！");
    });
});

// 显示政策“明白纸”弹窗
function showPolicy() {
    document.getElementById('policyOverlay').style.display = 'block';
}

// 关闭政策“明白纸”弹窗
function closePolicy() {
    document.getElementById('policyOverlay').style.display = 'none';
}

// 跳转到表单页面
function redirectToForm() {
    window.location.href = 'index.html';
}
