function toggleDropdown(dropdownId) {
    var dropdown = document.getElementById(dropdownId);
    if (dropdown) {
        dropdown.style.display = 'block';
    }
}

function hideDropdown(dropdownId) {
    var dropdown = document.getElementById(dropdownId);
    if (dropdown) {
        dropdown.style.display = 'none';
    }
}

// Add a function to handle hover over department links
function toggleDeptDropdown(deptDropdownId) {
    // Hide all department dropdowns
    hideDropdown('dept1Dropdown');
    hideDropdown('dept2Dropdown');
    hideDropdown('dept3Dropdown');

    // Show the specific department dropdown
    toggleDropdown(deptDropdownId);
}

// Linking Google Sheets using API
const apiKey = 'AIzaSyCq53rlZyOPBK08mVycRnxtMOvqoXk-s6M';
const overall_spreadsheetId = '149O4oT6Ym2H3sk2DbUSJcaJYlrBHIt30AjkSbWRUdMY';
const dept1_overall_spreadsheetId = '1z9E7kCOf0FxOBAQBFelufVa0DHK6xCBp3HnEZZtbidY';
const dept2_overall_spreadsheetId = '1ygfSuYmDcoIoxyjkyZ8UJivNJCDBD3abDR2Dlqc260E';
const dept3_overall_spreadsheetId = '1pYfeELKPwJYTO6yCWz9w6VroMxU7HdOH4opdu4gbRtg';
const dept1_m1_spreadsheetId = '1tgzNTLK2-aZAA44-mEeey31WBGoU76wyNALWYEs4XaI';
const dept1_m2_spreadsheetId = '1EU6FF8-v6LY2T0ivS90J6544dilX1tesw7VLPbFYmjs';
const dept1_m3_spreadsheetId = '1O3i6h_vu7xr3d8C-TlzX8NH1zqBs5zvfPxkD2hSGriE';
const dept2_m1_spreadsheetId = '1sqqQvhGBORPXLN4irIMeY5RsZnrCtd0MPYMKR7JBFgQ';
const dept2_m2_spreadsheetId = '1murD_v03uRU9xUEIPHDaHah-QO1q78IVfcaL4__NC48';
const dept2_m3_spreadsheetId = '1oib_ZxNN3gmj28QG1r2DCnjpYQU5Fmn97rW0gl-P8M0';
const dept3_m1_spreadsheetId = '1oGl56-wb-IVTME3RLHh1ImbERnZ3H-XiVpA2oXGY4Uk';
const dept3_m2_spreadsheetId = '1mfOzDAcaA9yE7MKFhyVkcqbkvQ3jpeE1HdQ1jKkz8zQ';
const dept3_m3_spreadsheetId = '1eFWJUvdCase_ejyGh4FsSYIIGRFTvgCZlZOOvph8UX8';
const refreshInterval = 10000; // Refresh interval in milliseconds (e.g., 5000 ms = 5 seconds)

//Home Page

// Total Working Hours Data for Home page
function getData0() {
    const range = 'F3'; // Update with your actual sheet name and range
    fetch(`https://sheets.googleapis.com/v4/spreadsheets/${overall_spreadsheetId}/values/${range}?key=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('overallworking_value');
            container.innerHTML = ''; // Clear previous data

            if (data.values.length > 0) {
                data.values.forEach(row => {
                    container.innerHTML += `<h1>${row[0]}</h1>`;
                });
            } else {
                container.innerHTML = 'No data available';
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

// Overall Energy Consumption Data for Home page
function getData1() {
    const range = 'G3'; // Update with your actual sheet name and range
    fetch(`https://sheets.googleapis.com/v4/spreadsheets/${overall_spreadsheetId}/values/${range}?key=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('overallenergy_value');
            container.innerHTML = ''; // Clear previous data

            if (data.values.length > 0) {
                data.values.forEach(row => {
                    container.innerHTML += `<h1>${row[0]}</h1>`;
                });
            } else {
                container.innerHTML = 'No data available';
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

// Overall Carbon Footprint Data for Home page
function getData2() {
    const range = 'H3'; // Update with your actual sheet name and range
    fetch(`https://sheets.googleapis.com/v4/spreadsheets/${overall_spreadsheetId}/values/${range}?key=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('overallcarbonfootprint_value');
            container.innerHTML = ''; // Clear previous data

            if (data.values.length > 0) {
                data.values.forEach(row => {
                    container.innerHTML += `<h1>${row[0]}</h1>`;
                });
            } else {
                container.innerHTML = '<p>No data available</p>';
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

//Department1 (Overall data)

// Total Working Hours Data for Department1 overall data
function getData3() {
    
    const range = 'H3'; // Update with your actual sheet name and range
    fetch(`https://sheets.googleapis.com/v4/spreadsheets/${dept1_overall_spreadsheetId}/values/${range}?key=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('dept1_overallworking_value');
            container.innerHTML = ''; // Clear previous data

            if (data.values.length > 0) {
                data.values.forEach(row => {
                    container.innerHTML += `<h1>${row[0]}</h1>`;
                });
            } else {
                container.innerHTML = 'No data available';
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

// Overall Energy Consumption Data for Department1 overall data
function getData4() {
    const range = 'I3'; // Update with your actual sheet name and range
    fetch(`https://sheets.googleapis.com/v4/spreadsheets/${dept1_overall_spreadsheetId}/values/${range}?key=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('dept1_overallenergy_value');
            container.innerHTML = ''; // Clear previous data

            if (data.values.length > 0) {
                data.values.forEach(row => {
                    container.innerHTML += `<h1>${row[0]}</h1>`;
                });
            } else {
                container.innerHTML = 'No data available';
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

// Overall Carbon Footprint Data for Department1 overall data
function getData5() {
    const range = 'J3'; // Update with your actual sheet name and range
    fetch(`https://sheets.googleapis.com/v4/spreadsheets/${dept1_overall_spreadsheetId}/values/${range}?key=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('dept1_overallcarbonfootprint_value');
            container.innerHTML = ''; // Clear previous data

            if (data.values.length > 0) {
                data.values.forEach(row => {
                    container.innerHTML += `<h1>${row[0]}</h1>`;
                });
            } else {
                container.innerHTML = '<p>No data available</p>';
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

//Department2 overall data

// Total Working Hours Data for Department2 overall data
function getData6() {
    const range = 'H3'; // Update with your actual sheet name and range
    fetch(`https://sheets.googleapis.com/v4/spreadsheets/${dept2_overall_spreadsheetId}/values/${range}?key=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('dept2_overallworking_value');
            container.innerHTML = ''; // Clear previous data

            if (data.values.length > 0) {
                data.values.forEach(row => {
                    container.innerHTML += `<h1>${row[0]}</h1>`;
                });
            } else {
                container.innerHTML = 'No data available';
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

// Overall Energy Consumption Data for Department2 overall data
function getData7() {
    const range = 'I3'; // Update with your actual sheet name and range
    fetch(`https://sheets.googleapis.com/v4/spreadsheets/${dept2_overall_spreadsheetId}/values/${range}?key=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('dept2_overallenergy_value');
            container.innerHTML = ''; // Clear previous data

            if (data.values.length > 0) {
                data.values.forEach(row => {
                    container.innerHTML += `<h1>${row[0]}</h1>`;
                });
            } else {
                container.innerHTML = 'No data available';
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

// Overall Carbon Footprint Data for Department2 overall data
function getData8() {
    const range = 'J3'; // Update with your actual sheet name and range
    fetch(`https://sheets.googleapis.com/v4/spreadsheets/${dept2_overall_spreadsheetId}/values/${range}?key=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('dept2_overallcarbonfootprint_value');
            container.innerHTML = ''; // Clear previous data

            if (data.values.length > 0) {
                data.values.forEach(row => {
                    container.innerHTML += `<h1>${row[0]}</h1>`;
                });
            } else {
                container.innerHTML = '<p>No data available</p>';
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

//Department3 overall data

// Total Working Hours Data for Department3 overall data
function getData9() { 
    const range = 'H3'; // Update with your actual sheet name and range
    fetch(`https://sheets.googleapis.com/v4/spreadsheets/${dept3_overall_spreadsheetId}/values/${range}?key=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('dept3_overallworking_value');
            container.innerHTML = ''; // Clear previous data

            if (data.values.length > 0) {
                data.values.forEach(row => {
                    container.innerHTML += `<h1>${row[0]}</h1>`;
                });
            } else {
                container.innerHTML = 'No data available';
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

// Overall Energy Consumption Data for Department3 overall data
function getData10() {
    const range = 'I3'; // Update with your actual sheet name and range
    fetch(`https://sheets.googleapis.com/v4/spreadsheets/${dept3_overall_spreadsheetId}/values/${range}?key=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('dept3_overallenergy_value');
            container.innerHTML = ''; // Clear previous data

            if (data.values.length > 0) {
                data.values.forEach(row => {
                    container.innerHTML += `<h1>${row[0]}</h1>`;
                });
            } else {
                container.innerHTML = 'No data available';
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

// Overall Carbon Footprint Data for Department3 overall data
function getData11() {
    const range = 'J3'; // Update with your actual sheet name and range
    fetch(`https://sheets.googleapis.com/v4/spreadsheets/${dept3_overall_spreadsheetId}/values/${range}?key=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('dept3_overallcarbonfootprint_value');
            container.innerHTML = ''; // Clear previous data

            if (data.values.length > 0) {
                data.values.forEach(row => {
                    container.innerHTML += `<h1>${row[0]}</h1>`;
                });
            } else {
                container.innerHTML = '<p>No data available</p>';
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

//Department1  Machine1 data

// Total Working Hours Data for Department1  Machine1 data
function getData12() {
    const range = 'F5:G5'; // Update with your actual sheet name and range
    fetch(`https://sheets.googleapis.com/v4/spreadsheets/${dept1_m1_spreadsheetId}/values/${range}?key=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('dept1_M1_working_value');
            container.innerHTML = ''; // Clear previous data

            if (data.values.length > 0) {
                data.values.forEach(row => {
                    container.innerHTML += `<h1>${row[0]}</h1>`;
                });
            } else {
                container.innerHTML = 'No data available';
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

// Overall Energy Consumption Data for Department1  Machine1 data
function getData13() {
    const range = 'H5:I5'; // Update with your actual sheet name and range
    fetch(`https://sheets.googleapis.com/v4/spreadsheets/${dept1_m1_spreadsheetId}/values/${range}?key=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('dept1_M1_energy_value');
            container.innerHTML = ''; // Clear previous data

            if (data.values.length > 0) {
                data.values.forEach(row => {
                    container.innerHTML += `<h1>${row[0]}</h1>`;
                });
            } else {
                container.innerHTML = 'No data available';
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

// Overall Carbon Footprint Data for Department1  Machine1 data
function getData14() {
    const range = 'J5'; // Update with your actual sheet name and range
    fetch(`https://sheets.googleapis.com/v4/spreadsheets/${dept1_m1_spreadsheetId}/values/${range}?key=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('dept1_M1_carbonfootprint_value');
            container.innerHTML = ''; // Clear previous data

            if (data.values.length > 0) {
                data.values.forEach(row => {
                    container.innerHTML += `<h1>${row[0]}</h1>`;
                });
            } else {
                container.innerHTML = '<p>No data available</p>';
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

//Department1  Machine2 data

// Total Working Hours Data for Department1  Machine2 data
function getData15() {
    const range = 'F5:G5'; // Update with your actual sheet name and range
    fetch(`https://sheets.googleapis.com/v4/spreadsheets/${dept1_m2_spreadsheetId}/values/${range}?key=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('dept1_M2_working_value');
            container.innerHTML = ''; // Clear previous data

            if (data.values.length > 0) {
                data.values.forEach(row => {
                    container.innerHTML += `<h1>${row[0]}</h1>`;
                });
            } else {
                container.innerHTML = 'No data available';
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

// Overall Energy Consumption Data for Department1  Machine2 data
function getData16() {
    const range = 'H5:I5'; // Update with your actual sheet name and range
    fetch(`https://sheets.googleapis.com/v4/spreadsheets/${dept1_m2_spreadsheetId}/values/${range}?key=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('dept1_M2_energy_value');
            container.innerHTML = ''; // Clear previous data

            if (data.values.length > 0) {
                data.values.forEach(row => {
                    container.innerHTML += `<h1>${row[0]}</h1>`;
                });
            } else {
                container.innerHTML = 'No data available';
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

// Overall Carbon Footprint Data for Department1  Machine2 data
function getData17() {
    const range = 'J5'; // Update with your actual sheet name and range
    fetch(`https://sheets.googleapis.com/v4/spreadsheets/${dept1_m2_spreadsheetId}/values/${range}?key=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('dept1_M2_carbonfootprint_value');
            container.innerHTML = ''; // Clear previous data

            if (data.values.length > 0) {
                data.values.forEach(row => {
                    container.innerHTML += `<h1>${row[0]}</h1>`;
                });
            } else {
                container.innerHTML = '<p>No data available</p>';
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

//Department1  Machine3 data

// Total Working Hours Data for Department1  Machine3 data
function getData18() {
    const range = 'F5:G5'; // Update with your actual sheet name and range
    fetch(`https://sheets.googleapis.com/v4/spreadsheets/${dept1_m3_spreadsheetId}/values/${range}?key=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('dept1_M3_working_value');
            container.innerHTML = ''; // Clear previous data

            if (data.values.length > 0) {
                data.values.forEach(row => {
                    container.innerHTML += `<h1>${row[0]}</h1>`;
                });
            } else {
                container.innerHTML = 'No data available';
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

// Overall Energy Consumption Data for Department1  Machine3 data
function getData19() {
    const range = 'H5:I5'; // Update with your actual sheet name and range
    fetch(`https://sheets.googleapis.com/v4/spreadsheets/${dept1_m3_spreadsheetId}/values/${range}?key=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('dept1_M3_energy_value');
            container.innerHTML = ''; // Clear previous data

            if (data.values.length > 0) {
                data.values.forEach(row => {
                    container.innerHTML += `<h1>${row[0]}</h1>`;
                });
            } else {
                container.innerHTML = 'No data available';
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

// Overall Carbon Footprint Data for Department1  Machine3 data
function getData20() {
    const range = 'J5'; // Update with your actual sheet name and range
    fetch(`https://sheets.googleapis.com/v4/spreadsheets/${dept1_m3_spreadsheetId}/values/${range}?key=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('dept1_M3_carbonfootprint_value');
            container.innerHTML = ''; // Clear previous data

            if (data.values.length > 0) {
                data.values.forEach(row => {
                    container.innerHTML += `<h1>${row[0]}</h1>`;
                });
            } else {
                container.innerHTML = '<p>No data available</p>';
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

//Department2  Machine1 data

// Total Working Hours Data for Department2  Machine1 data
function getData21() {
    const range = 'F5:G5'; // Update with your actual sheet name and range
    fetch(`https://sheets.googleapis.com/v4/spreadsheets/${dept2_m1_spreadsheetId}/values/${range}?key=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('dept2_M1_working_value');
            container.innerHTML = ''; // Clear previous data

            if (data.values.length > 0) {
                data.values.forEach(row => {
                    container.innerHTML += `<h1>${row[0]}</h1>`;
                });
            } else {
                container.innerHTML = 'No data available';
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

// Overall Energy Consumption Data for Department2  Machine1 data
function getData22() {
    const range = 'H5:I5'; // Update with your actual sheet name and range
    fetch(`https://sheets.googleapis.com/v4/spreadsheets/${dept2_m1_spreadsheetId}/values/${range}?key=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('dept2_M1_energy_value');
            container.innerHTML = ''; // Clear previous data

            if (data.values.length > 0) {
                data.values.forEach(row => {
                    container.innerHTML += `<h1>${row[0]}</h1>`;
                });
            } else {
                container.innerHTML = 'No data available';
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

// Overall Carbon Footprint Data for Department2  Machine1 data
function getData23() {
    const range = 'J5'; // Update with your actual sheet name and range
    fetch(`https://sheets.googleapis.com/v4/spreadsheets/${dept2_m1_spreadsheetId}/values/${range}?key=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('dept2_M1_carbonfootprint_value');
            container.innerHTML = ''; // Clear previous data

            if (data.values.length > 0) {
                data.values.forEach(row => {
                    container.innerHTML += `<h1>${row[0]}</h1>`;
                });
            } else {
                container.innerHTML = '<p>No data available</p>';
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

//Department2  Machine2 data

// Total Working Hours Data for Department2  Machine2 data
function getData24() {
    const range = 'F5:G5'; // Update with your actual sheet name and range
    fetch(`https://sheets.googleapis.com/v4/spreadsheets/${dept2_m2_spreadsheetId}/values/${range}?key=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('dept2_M2_working_value');
            container.innerHTML = ''; // Clear previous data

            if (data.values.length > 0) {
                data.values.forEach(row => {
                    container.innerHTML += `<h1>${row[0]}</h1>`;
                });
            } else {
                container.innerHTML = 'No data available';
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

// Overall Energy Consumption Data for Department2  Machine2 data
function getData25() {
    const range = 'H5:I5'; // Update with your actual sheet name and range
    fetch(`https://sheets.googleapis.com/v4/spreadsheets/${dept2_m2_spreadsheetId}/values/${range}?key=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('dept2_M2_energy_value');
            container.innerHTML = ''; // Clear previous data

            if (data.values.length > 0) {
                data.values.forEach(row => {
                    container.innerHTML += `<h1>${row[0]}</h1>`;
                });
            } else {
                container.innerHTML = 'No data available';
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

// Overall Carbon Footprint Data for Department2  Machine2 data
function getData26() {
    const range = 'J5'; // Update with your actual sheet name and range
    fetch(`https://sheets.googleapis.com/v4/spreadsheets/${dept2_m2_spreadsheetId}/values/${range}?key=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('dept2_M2_carbonfootprint_value');
            container.innerHTML = ''; // Clear previous data

            if (data.values.length > 0) {
                data.values.forEach(row => {
                    container.innerHTML += `<h1>${row[0]}</h1>`;
                });
            } else {
                container.innerHTML = '<p>No data available</p>';
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

//Department2  Machine3 data

// Total Working Hours Data for Department2  Machine3 data
function getData27() {
    const range = 'F5:G5'; // Update with your actual sheet name and range
    fetch(`https://sheets.googleapis.com/v4/spreadsheets/${dept2_m3_spreadsheetId}/values/${range}?key=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('dept2_M3_working_value');
            container.innerHTML = ''; // Clear previous data

            if (data.values.length > 0) {
                data.values.forEach(row => {
                    container.innerHTML += `<h1>${row[0]}</h1>`;
                });
            } else {
                container.innerHTML = 'No data available';
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

// Overall Energy Consumption Data for Department2  Machine3 data
function getData28() {
    const range = 'H5:I5'; // Update with your actual sheet name and range
    fetch(`https://sheets.googleapis.com/v4/spreadsheets/${dept2_m3_spreadsheetId}/values/${range}?key=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('dept2_M3_energy_value');
            container.innerHTML = ''; // Clear previous data

            if (data.values.length > 0) {
                data.values.forEach(row => {
                    container.innerHTML += `<h1>${row[0]}</h1>`;
                });
            } else {
                container.innerHTML = 'No data available';
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

// Overall Carbon Footprint Data for Department2  Machine3 data
function getData29() {
    const range = 'J5'; // Update with your actual sheet name and range
    fetch(`https://sheets.googleapis.com/v4/spreadsheets/${dept2_m3_spreadsheetId}/values/${range}?key=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('dept2_M3_carbonfootprint_value');
            container.innerHTML = ''; // Clear previous data

            if (data.values.length > 0) {
                data.values.forEach(row => {
                    container.innerHTML += `<h1>${row[0]}</h1>`;
                });
            } else {
                container.innerHTML = '<p>No data available</p>';
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

//Department3  Machine1 data

// Total Working Hours Data for Department3  Machine1 data
function getData30() {
    const range = 'F5:G5'; // Update with your actual sheet name and range
    fetch(`https://sheets.googleapis.com/v4/spreadsheets/${dept3_m1_spreadsheetId}/values/${range}?key=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('dept3_M1_working_value');
            container.innerHTML = ''; // Clear previous data

            if (data.values.length > 0) {
                data.values.forEach(row => {
                    container.innerHTML += `<h1>${row[0]}</h1>`;
                });
            } else {
                container.innerHTML = 'No data available';
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

// Overall Energy Consumption Data for Department3  Machine1 data
function getData31() {
    const range = 'H5:I5'; // Update with your actual sheet name and range
    fetch(`https://sheets.googleapis.com/v4/spreadsheets/${dept3_m1_spreadsheetId}/values/${range}?key=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('dept3_M1_energy_value');
            container.innerHTML = ''; // Clear previous data

            if (data.values.length > 0) {
                data.values.forEach(row => {
                    container.innerHTML += `<h1>${row[0]}</h1>`;
                });
            } else {
                container.innerHTML = 'No data available';
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

// Overall Carbon Footprint Data for Department3  Machine1 data
function getData32() {
    const range = 'J5'; // Update with your actual sheet name and range
    fetch(`https://sheets.googleapis.com/v4/spreadsheets/${dept3_m1_spreadsheetId}/values/${range}?key=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('dept3_M1_carbonfootprint_value');
            container.innerHTML = ''; // Clear previous data

            if (data.values.length > 0) {
                data.values.forEach(row => {
                    container.innerHTML += `<h1>${row[0]}</h1>`;
                });
            } else {
                container.innerHTML = '<p>No data available</p>';
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

//Department3 Machine2 data

// Total Working Hours Data for Department3 Machine2 data
function getData33() {
    const range = 'F5:G5'; // Update with your actual sheet name and range
    fetch(`https://sheets.googleapis.com/v4/spreadsheets/${dept3_m2_spreadsheetId}/values/${range}?key=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('dept3_M2_working_value');
            container.innerHTML = ''; // Clear previous data

            if (data.values.length > 0) {
                data.values.forEach(row => {
                    container.innerHTML += `<h1>${row[0]}</h1>`;
                });
            } else {
                container.innerHTML = 'No data available';
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

// Overall Energy Consumption Data for Department3  Machine2 data
function getData34() {
    const range = 'H5:I5'; // Update with your actual sheet name and range
    fetch(`https://sheets.googleapis.com/v4/spreadsheets/${dept3_m2_spreadsheetId}/values/${range}?key=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('dept3_M2_energy_value');
            container.innerHTML = ''; // Clear previous data

            if (data.values.length > 0) {
                data.values.forEach(row => {
                    container.innerHTML += `<h1>${row[0]}</h1>`;
                });
            } else {
                container.innerHTML = 'No data available';
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

// Overall Carbon Footprint Data for Department3  Machine2 data
function getData35() {
    const range = 'J5'; // Update with your actual sheet name and range
    fetch(`https://sheets.googleapis.com/v4/spreadsheets/${dept3_m2_spreadsheetId}/values/${range}?key=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('dept3_M2_carbonfootprint_value');
            container.innerHTML = ''; // Clear previous data

            if (data.values.length > 0) {
                data.values.forEach(row => {
                    container.innerHTML += `<h1>${row[0]}</h1>`;
                });
            } else {
                container.innerHTML = '<p>No data available</p>';
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

//Department3 Machine3 data

// Total Working Hours Data for Department3 Machine3 data
function getData36() {
    const range = 'F5:G5'; // Update with your actual sheet name and range
    fetch(`https://sheets.googleapis.com/v4/spreadsheets/${dept3_m3_spreadsheetId}/values/${range}?key=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('dept3_M3_working_value');
            container.innerHTML = ''; // Clear previous data

            if (data.values.length > 0) {
                data.values.forEach(row => {
                    container.innerHTML += `<h1>${row[0]}</h1>`;
                });
            } else {
                container.innerHTML = 'No data available';
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

// Overall Energy Consumption Data for Department3  Machine3 data
function getData37() {
    const range = 'H5:I5'; // Update with your actual sheet name and range
    fetch(`https://sheets.googleapis.com/v4/spreadsheets/${dept3_m3_spreadsheetId}/values/${range}?key=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('dept3_M3_energy_value');
            container.innerHTML = ''; // Clear previous data

            if (data.values.length > 0) {
                data.values.forEach(row => {
                    container.innerHTML += `<h1>${row[0]}</h1>`;
                });
            } else {
                container.innerHTML = 'No data available';
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

// Overall Carbon Footprint Data for Department3  Machine3 data
function getData38() {
    const range = 'J5'; // Update with your actual sheet name and range
    fetch(`https://sheets.googleapis.com/v4/spreadsheets/${dept3_m3_spreadsheetId}/values/${range}?key=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('dept3_M3_carbonfootprint_value');
            container.innerHTML = ''; // Clear previous data

            if (data.values.length > 0) {
                data.values.forEach(row => {
                    container.innerHTML += `<h1>${row[0]}</h1>`;
                });
            } else {
                container.innerHTML = '<p>No data available</p>';
            }
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

window.onload = () => {
    getData0();
    getData1();
    getData2();
    getData3();
    getData4();
    getData5();
    getData6();
    getData7();
    getData8();
    getData9();
    getData10();
    getData11();
    getData12();
    getData13();
    getData14();
    getData15();
    getData16();
    getData17();
    getData18();
    getData19();
    getData20();
    getData21();
    getData22();
    getData23();
    getData24();
    getData25();
    getData26();
    getData27();
    getData28();
    getData29();
    getData30();
    getData31();
    getData32();
    getData33();
    getData34();
    getData35();
    getData36();
    getData37();
    getData38();
    setInterval(getData0, refreshInterval); // Auto-refresh data at regular intervals
    setInterval(getData1, refreshInterval);
    setInterval(getData2, refreshInterval);
    setInterval(getData3, refreshInterval); 
    setInterval(getData4, refreshInterval);
    setInterval(getData5, refreshInterval);
    setInterval(getData6, refreshInterval); 
    setInterval(getData7, refreshInterval);
    setInterval(getData8, refreshInterval);
    setInterval(getData9, refreshInterval); 
    setInterval(getData10, refreshInterval);
    setInterval(getData11, refreshInterval);
    setInterval(getData12, refreshInterval); 
    setInterval(getData13, refreshInterval);
    setInterval(getData14, refreshInterval);
    setInterval(getData15, refreshInterval); 
    setInterval(getData16, refreshInterval);
    setInterval(getData17, refreshInterval);
    setInterval(getData18, refreshInterval); 
    setInterval(getData19, refreshInterval);
    setInterval(getData20, refreshInterval);
    setInterval(getData21, refreshInterval); 
    setInterval(getData22, refreshInterval);
    setInterval(getData23, refreshInterval);
    setInterval(getData24, refreshInterval); 
    setInterval(getData25, refreshInterval);
    setInterval(getData26, refreshInterval);
    setInterval(getData27, refreshInterval); 
    setInterval(getData28, refreshInterval);
    setInterval(getData29, refreshInterval);
    setInterval(getData30, refreshInterval); 
    setInterval(getData31, refreshInterval);
    setInterval(getData32, refreshInterval);
    setInterval(getData33, refreshInterval); 
    setInterval(getData34, refreshInterval);
    setInterval(getData35, refreshInterval);
    setInterval(getData36, refreshInterval); 
    setInterval(getData37, refreshInterval);
    setInterval(getData38, refreshInterval);
};
