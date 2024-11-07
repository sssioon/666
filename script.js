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

    const dataTable = document.getElementById("dataTable");
    dataTable.innerHTML = `<tr>
        <td>${formData.name}</td>
        <td>${formData.idNumber}</td>
        <td>${formData.phone}</td>
        <td>${formData.registeredAddress}</td>
        <td>${formData.currentAddress}</td>
        <td>${formData.householdType}</td>
        <td>${formData.identifyDate}</td>
        <td>${formData.noPolicyDate}</td>
        <td>${formData.identifyStandard}</td>
        <td>${formData.waterStatus}</td>
        <td>${formData.housingStatus}</td>
        <td>${formData.workersCount}</td>
        <td>${formData.workIncome}</td>
        <td>${formData.averageIncome}</td>
        <td>${formData.registerDate}</td>
    </tr>`;
});
