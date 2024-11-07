document.getElementById("applicationForm").addEventListener("submit", function (event) {
    event.preventDefault(); // 防止页面刷新

    // 创建 FormData 对象，用于收集表单数据
    const formData = new FormData();

    // 收集表单字段的值并加入到 FormData 对象
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

    // 上传身份证正反面的图片
    formData.append("idFront", document.getElementById("idFront").files[0]);
    formData.append("idBack", document.getElementById("idBack").files[0]);

    // 使用 fetch() API 将表单数据提交到后端API
    fetch('https://your-api-endpoint.com/submit', {
        method: 'POST',
        body: formData  // 通过 FormData 发送表单数据（包含文件）
    })
    .then(response => response.json())  // 如果请求成功，解析响应
    .then(data => {
        console.log('Success:', data);
        window.open("statistics.html");  // 成功后跳转到统计页面
    })
    .catch((error) => {
        console.error('Error:', error);  // 捕获错误并在控制台打印
    });
});

// 监听加载事件，渲染统计数据
window.addEventListener("load", function () {
    const dataTable = document.getElementById("dataTable");
    const latestSubmission = JSON.parse(localStorage.getItem("latestSubmission"));

    if (latestSubmission && dataTable) {
        // 清除旧表格数据
        dataTable.innerHTML = `<tr>
            <th>申请人姓名</th>
            <th>证件号码</th>
            <th>联系电话</th>
            <th>户籍地址</th>
            <th>现居住地</th>
            <th>户类型</th>
            <th>识别年度</th>
            <th>脱贫不享受政策年度</th>
            <th>识别标准</th>
            <th>饮水情况</th>
            <th>住房情况</th>
            <th>家庭务工人数</th>
            <th>务工收入(元)</th>
            <th>家庭人均纯收入</th>
            <th>登记时间</th>
        </tr>
        <tr>
            <td>${latestSubmission.name}</td>
            <td>${latestSubmission.idNumber}</td>
            <td>${latestSubmission.phone}</td>
            <td>${latestSubmission.registeredAddress}</td>
            <td>${latestSubmission.currentAddress}</td>
            <td>${latestSubmission.householdType}</td>
            <td>${latestSubmission.identifyDate}</td>
            <td>${latestSubmission.noPolicyDate}</td>
            <td>${latestSubmission.identifyStandard}</td>
            <td>${latestSubmission.waterStatus}</td>
            <td>${latestSubmission.housingStatus}</td>
            <td>${latestSubmission.workersCount}</td>
            <td>${latestSubmission.workIncome}</td>
            <td>${latestSubmission.averageIncome}</td>
            <td>${latestSubmission.registerDate}</td>
        </tr>`;
    }
});
