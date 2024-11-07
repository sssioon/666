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
        registerDate: document.getElementById("registerDate").value
    };

    // 将数据存入 localStorage 实现数据持久化并在统计页面显示
    localStorage.setItem("latestSubmission", JSON.stringify(formData));

    // 重定向到统计页面
    window.open("statistics.html");
});

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
